



			function initOnReady() {
				var udf_datafeed = new Datafeeds.UDFCompatibleDatafeed(SETTINGS.contextPath, 100000000);

				var widget = window.tvWidget = new TradingView.widget({
					fullscreen: false,
					width: SETTINGS.width,
					height: SETTINGS.height,
					symbol: SETTINGS.tokenName,
					timezone: "Europe/Moscow",
					interval: '60',
					container_id: "tv_chart_container",
					datafeed: udf_datafeed,
					debug: true,
					library_path: "resources/js/",
					locale: "en",
					debug: true,
					time_frames: [{resolution: "60", text:"5d"}],
					overrides: {
                        "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)"

                    },
                    //"chart_scroll"
                    disabled_features: [ "chart_zoom", "header_widget", "header_saveload", "left_toolbar", "context_menus", "control_bar", "timeframes_toolbar", "symbol_info"]

				});


                function setRange(){
                        var t = widget.chart()._chartWidget.model().mainSeries().priceScale().priceRange();
                        if(t.maxValue() < SETTINGS.maxPrice){
                            t.setMaxValue(SETTINGS.maxPrice);
                        }
                        if(t.minValue() > SETTINGS.minPrice){
                            t.setMinValue(SETTINGS.minPrice);
                        }
//                        console.debug('min ='  + t.minValue());
//                        console.debug('max ='  + t.maxValue());
                        widget.chart()._chartWidget.model().mainSeries().priceScale().setPriceRange(t);
                        widget.chart()._chartWidget.model().mainSeries().priceScale().properties().lockScale.setValue(true);
                        widget.chart()._chartWidget.model().mainSeries().priceScale().m_markBuilder.rebuildTickMarks();
                        widget.chart()._chartWidget.model().mainSeries().priceScale().updateFormatter();
                        widget.chart()._chartWidget.model().scrollChartByBar(-SETTINGS.shift);
                        console.debug('ok');
                        document.body.style.background = "#000000";
                        var elem = document.createElement('div');
                        elem.id = 'graphic-loaded';
                        document.body.appendChild(elem);
                }

				widget.onChartReady(function() {
                     widget.chart().setVisibleRange({from: SETTINGS.startTime, to: SETTINGS.endTime}, function() {

                        setTimeout(setRange, 1000);


                     });


				    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.min}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 255, 0)"
                            }
                        }
                    );

                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.mid}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 255, 0)"
                            }
                        }
                    );

                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.max}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 255, 0)"
                            }
                        }
                    );

                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.profit1}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 0, 255)"
                            }
                        }
                    );
                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.profit2}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 0, 255)"
                            }
                        }
                    );
                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.profit3}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(0, 0, 255)"
                            }
                        }
                    );
                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.stop1}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(255, 0, 0)"
                            }
                        }
                    );
                    widget.chart().createMultipointShape(
                        [{time:SETTINGS.signalTime, price: SETTINGS.stop2}],
                        {
                            shape: "horizontal_ray",
                            lock: true,
                            disableSelection: true,
                            disableSave: true,
                            disableUndo: true,
                            overrides: {
                                showLabel: true,
                                linewidth: 2,
                                linecolor: "rgb(255, 0, 0)"
                            }
                        }
                    );


					widget.chart().createMultipointShape(
					[{ time: SETTINGS.signalTime }],
					{
					shape: "vertical_line",
					text: "Signal Time",
					overrides: {
										showLabel: false,
										linewidth: 2,
										linecolor: "blue"
								}
					}
					);
					widget.chart().createMultipointShape(
                    [{ time: SETTINGS.endTime }],
                    {
                    shape: "vertical_line",
                    text: "Signal Time",
                    overrides: {
                                        showLabel: false,
                                        linewidth: 1,
                                        linestyle: 1,
                                        linecolor: "white"
                                }
                    }
                    );




				}); // end of widget.onChartReady
			}; // end of TradingView.onready



			window.addEventListener('DOMContentLoaded', initOnReady, false);