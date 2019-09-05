package ru.tradeview.widget.domain;

import java.math.BigDecimal;

public class FeedData {

    private String s;
    private long t[];
    private BigDecimal c[];
    private BigDecimal o[];
    private BigDecimal h[];
    private BigDecimal l[];
    private BigDecimal v[];

    public String getS() {
        return s;
    }

    public void setS(String s) {
        this.s = s;
    }

    public long[] getT() {
        return t;
    }

    public void setT(long[] t) {
        this.t = t;
    }

    public BigDecimal[] getC() {
        return c;
    }

    public void setC(BigDecimal[] c) {
        this.c = c;
    }

    public BigDecimal[] getO() {
        return o;
    }

    public void setO(BigDecimal[] o) {
        this.o = o;
    }

    public BigDecimal[] getH() {
        return h;
    }

    public void setH(BigDecimal[] h) {
        this.h = h;
    }

    public BigDecimal[] getL() {
        return l;
    }

    public void setL(BigDecimal[] l) {
        this.l = l;
    }

    public BigDecimal[] getV() {
        return v;
    }

    public void setV(BigDecimal[] v) {
        this.v = v;
    }
}
