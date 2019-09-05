import org.junit.Assert;
import org.junit.Test;
import ru.tradeview.widget.controller.WidgetController;
import ru.tradeview.widget.domain.FeedData;

import java.math.BigDecimal;

public class TestConvert {
    @Test
    public void addFakeTest() {
        int lastInd = 0;
        FeedData fd = new FeedData();
        fd.setO(new BigDecimal[] {new BigDecimal(1.0)});
        fd.setC(new BigDecimal[] {new BigDecimal(2.0)});
        fd.setH(new BigDecimal[] {new BigDecimal(2.0)});
        fd.setL(new BigDecimal[] {new BigDecimal(1.0)});
        fd.setT(new long[] {0});
        fd.setV(new BigDecimal[] {new BigDecimal(0.0)});
        FeedData fakeFeed = new FeedData();
        fakeFeed.setS("ok");
        fakeFeed.setC(WidgetController.addValueToArray(fd.getC(), fd.getC()[lastInd]));
        fakeFeed.setH(WidgetController.addValueToArray(fd.getH(), BigDecimal.TEN));
        fakeFeed.setL(WidgetController.addValueToArray(fd.getL(), new BigDecimal(0.5)));
        fakeFeed.setO(WidgetController.addValueToArray(fd.getO(), fd.getO()[lastInd]));
        fakeFeed.setT(WidgetController.addValueToArray(fd.getT(), fd.getT()[lastInd] + 3600));
        fakeFeed.setV(WidgetController.addValueToArray(fd.getV(), fd.getV()[lastInd]));
        Assert.assertEquals(fakeFeed.getC().length, 2);
        Assert.assertEquals(fakeFeed.getC()[0], new BigDecimal(2.0));
        Assert.assertEquals(fakeFeed.getC()[1], new BigDecimal(2.0));

        Assert.assertEquals(fakeFeed.getL()[0], new BigDecimal(1.0));
        Assert.assertEquals(fakeFeed.getL()[1], new BigDecimal(0.5));

        Assert.assertEquals(fakeFeed.getH()[0], new BigDecimal(2.0));
        Assert.assertEquals(fakeFeed.getH()[1], new BigDecimal(10));

        Assert.assertEquals(fakeFeed.getT()[0], 0);
        Assert.assertEquals(fakeFeed.getT()[1], 3600);

        BigDecimal t = new BigDecimal("0.000024");
        Assert.assertEquals(6, t.scale());

    }
}
