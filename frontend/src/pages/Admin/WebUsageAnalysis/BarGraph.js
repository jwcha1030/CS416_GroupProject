import React, {useState} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const myDataSource = {
  chart: {
    caption: "Items Most Viewed [Year 2020]",
    subCaption: "Users stayed at least 1 min on the product page",
    xAxisName: "Item",
    yAxisName: "Number of Users Visited",
    numberSuffix: "",
    theme: "fusion"
  },
  data: [
    {
      label: "2020 Hoodie",
      value: "610"
    },
    {
      label: "2020 Pants",
      value: "260"
    },
    {
      label: "2020 Mugcup",
      value: "180"
    },
    {
      label: "2020 Jacket",
      value: "540"
    },
    {
      label: "2019 Hoodie",
      value: "115"
    },
    {
      label: "2020 Shoes",
      value: "100"
    },
    {
      label: "2020 Shorts",
      value: "30"
    },
    {
      label: "2017 Legendary Jacket",
      value: "30"
    },
    {
      label: "2020 T-Shirts",
      value: "21"
    },
    {
      label: "SBU Tumblr",
      value: "20"
    }
  ]
};

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

export default function BarGraph(props) {
  const [label, setLabel] = useState({actualValue: 'Hover on the plot to see the value along with the label'});

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  const showPlotValue = (eventObj, dataObj) => {
    setLabel({
      actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
    });
  };

  return (
    <div>
      <ReactFC {...chartConfigs} fcEvent-dataplotRollOver={showPlotValue}/>
      <p style={{padding: '10px', background: '#f5f2f0'}}>{label.actualValue}</p>
    </div>
  );

}
