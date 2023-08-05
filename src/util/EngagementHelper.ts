import * as Highcharts from "highcharts";

export const engagementHelper = {
  engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
    const config = {
      title: {
        text: "",
      },
      boost: {
        useGPUTranslations: true,
      },
      credits: {
        enabled: false,
      },
      chart: {
        type: "spline",
        backgroundColor: "#1E1E26",
      },
      tooltip: {
        backgroundColor: "#00000085",
        borderColor: "#2aa9ad",
        borderRadius: 2,
        borderWidth: 2,
      },

      yAxis: {
        type: "linear",
        title: "",
        lineColor: "#BFBFBF",
        tickWidth: 1,
        min: 0,
        gridLineWidth: 0,
      },

      xAxis: {
        type: "datetime",
        labels: {
          formatter: function () {
            return Highcharts.dateFormat("%e %b", this.value);
          },
        },
        plotLines: [
          {
            color: "gray",
            dashStyle: "solid",
            value: 5.5,
            width: 2,
          },
        ],
      },

      legend: {
        backgroundColor: "#0A0A0D",
        text: "general",
        itemStyle: {
          color: "#FFFFFF84",
          fontSize: "11px",
          fontWeight: "normal",
        },
      },

      series: [
        {
          marker: {
            enabled: false,
          },
          lineWidth: 4,
          color: "#145959",
          data: [
            4, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4,
          ],
        },
      ],
    };

    return config;
  },
};
