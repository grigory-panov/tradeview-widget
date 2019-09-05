package ru.tradeview.widget.domain;

public class Symbol {
      private String name;
      private String description;
      private String session="24x7";
      private String timezone="UTC";
      private int minmov = 1;
      private long pricescale = 100000000;
      private int minmove2 = 0;
      private boolean has_intraday = true;
      private String[] supported_resolutions = new String[] { "60"};
      private String[] intraday_multipliers = new String[] {"60"};
      private boolean has_seconds = false;
      private boolean has_daily = false;
      private boolean has_weekly_and_monthly = false;
      private boolean has_empty_bars = true;
      private boolean force_session_rebuild = true;
      private boolean has_no_volume = true;
      private int volume_precision = 0;
      private String data_status="endofday";
      private boolean expired = false;
      private long expiration_date;
      private String sector="";
      private String industry="";
      private String exchange="";


    public long getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(long expiration_date) {
        this.expiration_date = expiration_date;
    }

    public String getExchange() {
        return exchange;
    }

    public void setExchange(String exchange) {
        this.exchange = exchange;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public int getMinmov() {
        return minmov;
    }

    public void setMinmov(int minmov) {
        this.minmov = minmov;
    }

    public long getPricescale() {
        return pricescale;
    }

    public void setPricescale(long pricescale) {
        this.pricescale = pricescale;
    }

    public int getMinmove2() {
        return minmove2;
    }

    public void setMinmove2(int minmove2) {
        this.minmove2 = minmove2;
    }

    public boolean isHas_intraday() {
        return has_intraday;
    }

    public void setHas_intraday(boolean has_intraday) {
        this.has_intraday = has_intraday;
    }

    public String[] getSupported_resolutions() {
        return supported_resolutions;
    }

    public void setSupported_resolutions(String[] supported_resolutions) {
        this.supported_resolutions = supported_resolutions;
    }

    public String[] getIntraday_multipliers() {
        return intraday_multipliers;
    }

    public void setIntraday_multipliers(String[] intraday_multipliers) {
        this.intraday_multipliers = intraday_multipliers;
    }

    public boolean isHas_seconds() {
        return has_seconds;
    }

    public void setHas_seconds(boolean has_seconds) {
        this.has_seconds = has_seconds;
    }

    public boolean isHas_daily() {
        return has_daily;
    }

    public void setHas_daily(boolean has_daily) {
        this.has_daily = has_daily;
    }

    public boolean isHas_weekly_and_monthly() {
        return has_weekly_and_monthly;
    }

    public void setHas_weekly_and_monthly(boolean has_weekly_and_monthly) {
        this.has_weekly_and_monthly = has_weekly_and_monthly;
    }

    public boolean isHas_empty_bars() {
        return has_empty_bars;
    }

    public void setHas_empty_bars(boolean has_empty_bars) {
        this.has_empty_bars = has_empty_bars;
    }

    public boolean isForce_session_rebuild() {
        return force_session_rebuild;
    }

    public void setForce_session_rebuild(boolean force_session_rebuild) {
        this.force_session_rebuild = force_session_rebuild;
    }

    public boolean isHas_no_volume() {
        return has_no_volume;
    }

    public void setHas_no_volume(boolean has_no_volume) {
        this.has_no_volume = has_no_volume;
    }

    public int getVolume_precision() {
        return volume_precision;
    }

    public void setVolume_precision(int volume_precision) {
        this.volume_precision = volume_precision;
    }

    public String getData_status() {
        return data_status;
    }

    public void setData_status(String data_status) {
        this.data_status = data_status;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }
}
