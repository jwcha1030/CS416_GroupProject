import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import * as React from "react";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import {useState} from "react";

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, FusionTheme);

export default function MonthlyVisitGraph(props) {
  const formatDate=(dateStr)=>{
    let ret;
    let months=["Jan","Feb","Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month= months[parseInt(dateStr.substring(5,7))-1]; //convert number into string format as in months array.
    let year= dateStr.substring(0,4);
    ret=month+"-"+year;
    return ret;
  };

  const [chartData, setChartData] = useState(() => {
    let ret = [];
    props.dataInput.map((entry,i) => {
      ret.push(
        {
          label: formatDate(entry.date),
          value: entry.count
        })
    });
    console.log("Initialize chartData:", ret);
    return ret;
  });

  const chartConfigs={
    type: "line",
    width: props.width,
    height: "270",
    dataFormat: "json",
    dataSource:
    {
      //Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Total Number of Visits",
        //Set the chart subcaption
        subCaption: "For every month",
        //Set the x-axis name
        xAxisName: "Months",
        //Set the y-axis name
        yAxisName: "Visits",
        numberSuffix: "",
        divlineColor: "#999999",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data: chartData
    }
  };

  return (<ReactFC{...chartConfigs}/>);
}
