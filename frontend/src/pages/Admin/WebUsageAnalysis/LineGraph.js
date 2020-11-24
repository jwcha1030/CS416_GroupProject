import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import * as React from "react";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Dummy Chart : A vs B",
    yaxisname: "Revenue Made ($)",
    subcaption: "Last week",
    numdivlines: "4",
    showvalues: "0",
    legenditemfontsize: "10",
    legenditemfontbold: "1",
    plottooltext: "<b>$$dataValue</b> revenue made for Item $seriesName on $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Jan 1"
        },
        {
          label: "Jan 2"
        },
        {
          label: "Jan 3"
        },
        {
          label: "Jan 4"
        },
        {
          label: "Jan 5"
        },
        {
          label: "Jan 6"
        },
        {
          label: "Jan 7"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "A",
      data: [
        {
          value: "55"
        },
        {
          value: "45"
        },
        {
          value: "52"
        },
        {
          value: "29"
        },
        {
          value: "48"
        },
        {
          value: "28"
        },
        {
          value: "32"
        }
      ]
    },
    {
      seriesname: "B",
      data: [
        {
          value: "50"
        },
        {
          value: "30"
        },
        {
          value: "49"
        },
        {
          value: "22"
        },
        {
          value: "43"
        },
        {
          value: "14"
        },
        {
          value: "31"
        }
      ]
    }
  ]
};

export default function LineGraph(prop) {
    return (
      <ReactFusioncharts
        className="myChart"
        type="msspline"
        width={prop.width}
        height={prop.height}
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}
