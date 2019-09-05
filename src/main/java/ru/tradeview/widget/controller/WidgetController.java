package ru.tradeview.widget.controller;

import org.h2.util.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import ru.tradeview.widget.domain.Feed;
import ru.tradeview.widget.domain.FeedData;
import ru.tradeview.widget.domain.SelectLast;
import ru.tradeview.widget.domain.Symbol;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.ResolverStyle;
import java.util.*;

@Controller
public class WidgetController {

    private static final Logger logger = LoggerFactory.getLogger(WidgetController.class);
    private static String API_URL = "http://213.166.70.234";

    @RequestMapping(value = "/config", produces = "application/json")
    @ResponseBody
    public String getConfig() throws IOException {
        return IOUtils.readStringAndClose(new InputStreamReader(WidgetController.class.getClassLoader().getResourceAsStream("config.json")), 0);
    }


    @RequestMapping(value = "/symbols", produces = "application/json")
    @ResponseBody
    public Symbol getConfig(@RequestParam(name = "symbol") String symbol,  HttpSession session) throws IOException {
        Symbol s = new Symbol();
        s.setName(symbol);
        s.setDescription(symbol);
        s.setExchange((String) session.getAttribute("description"));
        s.setPricescale((Long) session.getAttribute("precision"));
        s.setExpired(false);
        return s;
    }

    @RequestMapping(value = "/history", produces = "application/json")
    @ResponseBody
    public FeedData getHistory(@RequestParam(name = "symbol") String symbol, @RequestParam(name = "from", required = false) long from, @RequestParam(name = "to", required = false) long to, HttpSession session) throws IOException {

        Map<String, Object> params = new LinkedHashMap<>();
        params.put("symbol", symbol);
        params.put("from", session.getAttribute("startTimeParam"));
        params.put("to", session.getAttribute("endTimeParam"));

        FeedData fd =  new RestTemplate().getForObject(API_URL + "/api/services/app/Token/GetBinanceDataByToken?token={symbol}&dateFrom={from}&dateTo={to}", Feed.class, params).getResult();
        fd.setS("ok");
        final int lastInd = fd.getT().length -1;
        if(lastInd == -1){
            logger.error("no data");
            throw new RuntimeException("no data for feed");
        }
        logger.debug(fd.getT()[0] + " " + fd.getT()[lastInd]);
        return fd;

    }


    @RequestMapping(value = "/")
    public String getIndex(@RequestParam(name = "date") String date, @RequestParam(name = "tokenName") String token, HttpSession session, Model model){


        Map<String, Object> params = new LinkedHashMap<>();
        params.put("date", date);
        params.put("token", token);

        SelectLast signal = new RestTemplate().getForObject(API_URL + "/api/services/app/Signals/Get?date={date}&tokenName={token}", SelectLast.class, params);
        if(!signal.isSuccess()){
            logger.error(signal.getError());
            throw new RuntimeException(signal.getError());
        }
        if(signal.getResult() == null){
            throw new RuntimeException("No data for signal!");
        }

        ZonedDateTime signalTime = convertDateToUtcDate(signal.getResult().getTime());
        signal.getResult().setSignalTime(signalTime.toEpochSecond());
        model.addAttribute("signal", signal.getResult());

        String paramDateFrom = convertToDate(signalTime.minusDays(5).toEpochSecond());
        String paramDateTo = convertToDate(Instant.now().getEpochSecond());
        params.clear();
        params.put("symbol", token);
        params.put("from", paramDateFrom);
        params.put("to", paramDateTo);

        session.setAttribute("startTimeParam", paramDateFrom);
        session.setAttribute("endTimeParam", paramDateTo);
        model.addAttribute("startTime", calculateStartTime( signalTime) -  calculateShift( signalTime) * 3600);
        model.addAttribute("endTime", Instant.now().getEpochSecond());
        model.addAttribute("shift", calculateShift( signalTime) + 1);


        ArrayList<BigDecimal> allData = new ArrayList<>();
        allData.add(signal.getResult().getMax());
        allData.add(signal.getResult().getMid());
        allData.add(signal.getResult().getMax());
        allData.add(signal.getResult().getProfit1());
        allData.add(signal.getResult().getProfit2());
        allData.add(signal.getResult().getProfit3());
        allData.add(signal.getResult().getProfit4());
        allData.add(signal.getResult().getProfit5());
        allData.add(signal.getResult().getProfit6());
        allData.add(signal.getResult().getProfit7());
        allData.add(signal.getResult().getStop1());
        allData.add(signal.getResult().getStop2());

        model.addAttribute("minPrice", allData.stream().filter(d -> d.compareTo(BigDecimal.ZERO) > 0).min(Comparator.comparing(d2 -> d2)).get());
        model.addAttribute("maxPrice", allData.stream().filter(d -> d.compareTo(BigDecimal.ZERO) > 0).max(Comparator.comparing(d2 -> d2)).get());

        int scale = allData.stream().filter(d -> d.compareTo(BigDecimal.ZERO) > 0).max(Comparator.comparing(BigDecimal::scale)).get().scale();
        session.setAttribute("precision", BigDecimal.TEN.pow(scale).longValue());
        session.setAttribute("description", signal.getResult().getExchangeName());

        return "index";
    }


    private long calculateStartTime(ZonedDateTime signalTime) {
        return signalTime.minusDays(2).toEpochSecond();
    }

    private long calculateShift(ZonedDateTime signalTime) {
        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));

        // находим, насколько он старый, и добавляем до 3 дней после текущей даты
        long maxDate = signalTime.plusDays(5).toEpochSecond();
        long diff = maxDate - now.toEpochSecond();
        if(diff > 3 * 24 * 3600){
            logger.debug("shift = " + (long)(diff/3600 -  3 * 24));
            return diff/3600 -  3 * 24;
        }
        return 0;
    }


    @RequestMapping(value = "/error")
    public String getError(){
        return "error";
    }

    private static ZonedDateTime convertDateToUtcDate(String date){
        if(date.contains(".")){
            date = date.substring(0, date.indexOf('.'));
        }
        return ZonedDateTime. parse(date, DateTimeFormatter.ISO_LOCAL_DATE_TIME.withZone(ZoneId.of("UTC")));
    }

    private static String convertToDate(long date){
        ZonedDateTime utc = ZonedDateTime.ofInstant(Instant.ofEpochSecond(date), ZoneId.of("UTC"));
        return DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'.000Z'").format(utc);

    }

}
