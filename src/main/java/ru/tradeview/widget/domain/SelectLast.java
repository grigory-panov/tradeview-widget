package ru.tradeview.widget.domain;

public class SelectLast {

    private SelectLastData result;

    private boolean success;
    private String error;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public SelectLastData getResult() {
        return result;
    }

    public void setResult(SelectLastData result) {
        this.result = result;
    }
}
