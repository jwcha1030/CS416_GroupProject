import React, {useEffect, useState} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
export default function BarGraph(props) {
  const [label, setLabel] = useState({actualValue: 'Hover on the plot to see the value along with the label'});
  const [categories, setCategories]=useState(()=>{
      let ret= [];
      ret.push({category:[]});
      // console.log("ret[0].category",ret[0].category);
      for(let i=0; i<props.dataInput.length; i++){
        ret[0].category.push({
          label: props.dataInput[i].name
        })
      }
      return ret;
    }
  );
  const[viewedData, setViewedData]=useState(()=>{
    let ret= [];
    props.dataInput.map(item=>{
      ret.push({value: item.num_of_clicked.toString()})
    });
    // console.log("getViewedData:",ret);
    return ret;
  });

  const[inquiriesData, setInquiriesData]=useState(()=>{
    let ret= [];
    props.dataInput.map(item=>{
      ret.push({value: item.num_of_inquiries.toString()})
    });
    // console.log("getInquiriesData:",ret);
    return ret;
  });

  const myDataSource = {
    chart: {
      caption: "Number of Views & Purchase Inquiries For All Merchandise",
      subCaption: "Since December 2020",
      xAxisName: "Item",
      yAxisName: "Number of Clicks",
      numberSuffix: "",
      theme: "fusion",
      divLineIsDashed: "1",
      divLineDashLen: "1",
      divLineGapLen: "1"
    },
    categories: categories,
    dataset: [
      {
        seriesname: "Number Viewed",
        data: viewedData
      },
      {
        seriesname: "Number of Purchase Inquiries",
        data: inquiriesData
      }
    ]
  };

  const chartConfigs = {
      type: 'mscolumn2d',
      width: '100%',
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
    };

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
