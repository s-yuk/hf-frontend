import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { SettingsInputAntenna } from '@mui/icons-material';
import ChartApi from './ChartApi';
import { useState } from "react";
import am4lang_ja_JP from "@amcharts/amcharts4/lang/ja_JP";
am4core.useTheme(am4themes_animated);


class AmChart extends Component {
  constructor(props) {
    super(props);
    this.name = this.props;
    // console.log(this.name);
  }


  componentDidMount() {

    this.chart = prepareChart();
    this.chart.data = this.name.name;
    console.log(this.chart.data);

  }

  // componentWillUnmount() {
  //   if (this.chart) {
  //     this.chart.dispose();
  //   }
  // }



  render() {

    return (

      //チャートの大きさ
      <div id="chartdiv" style={{ width: "100%", height: "95%" }}></div>

      // <>
      // <ChartApi /></>

    );
  }
}



function prepareChart() {

  const chart = am4core.create('chartdiv', am4charts.XYChart);
  chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
  chart.paddingRight = 20;

  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 60;

  dateAxis.skipEmptyPeriods = true;

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.minWidth = 35;

  var series = chart.series.push(new am4charts.CandlestickSeries());
  series.dataFields.dateX = "date";
  series.dataFields.valueY = "close";
  series.dataFields.openValueY = "open";
  series.dataFields.lowValueY = "low";
  series.dataFields.highValueY = "high";

  series.tooltipText = "Open: [bold]{openValueY.value}[/]\nLow: [bold]{lowValueY.value}[/]\nHigh: [bold]{highValueY.value}[/]\nClose: [bold]{valueY.value}[/]";

  chart.cursor = new am4charts.XYCursor();

  const scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series);
  //  chart.scrollbarX = scrollbarX;

  // chart.scrollbarX = new am4core.Scrollbar();



  chart.dateFormatter.language = new am4core.Language(); //標準の翻訳設定
  chart.dateFormatter.language.locale = am4lang_ja_JP; //標準の翻訳設定
  chart.language.locale["_date_day"] = "M/dd";
  chart.language.locale["_date_year"] = "yyyy";

  // chart.language.locale["_date_day"] = "M月dd日"; 
  return chart;
}



export default AmChart;