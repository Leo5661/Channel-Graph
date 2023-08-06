import { getData, getXAxisMid } from "./Data.ts";
import { MessageCountType } from "./MessageCountList.ts";

export const engagementHelper = {
  engagementMessageOverTimeChartOptions: (
    messageCountList: MessageCountType[],
    channels: object[],
  ) => {
    const data = getData(messageCountList, channels);
    const plotXAxisMid = getXAxisMid(data);

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
        headerFormat: `{point.key}</br>`,
        pointFormat: `<b>{point.y}</b> message on {point.x:%e %b}`,
        style: {
          color: "#FFFFFF",
        },
      },

      yAxis: {
        type: "linear",
        title: "",
        tickColor: "#BFBFBF",
        tickWidth: 1,
        min: 0,
        gridLineWidth: 0,
        labels: {
          style: {
            color: "#BFBFBF",
          },
        },
      },

      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%e. %b",
        },
        tickInterval: 24 * 3600 * 1000,
        tickColor: "#BFBFBF",
        lineColor: "#BFBFBF",
        plotLines: [
          {
            color: "gray",
            dashStyle: "solid",
            value: plotXAxisMid,
            width: 2,
          },
        ],
        labels: {
          style: {
            color: "#BFBFBF",
          },
        },
      },

      legend: {
        backgroundColor: "#0A0A0D",
        itemStyle: {
          color: "#FFFFFF84",
          fontSize: "11px",
          fontWeight: "normal",
        },
      },

      series: [
        {
          name: `general`,
          marker: {
            enabled: false,
          },
          lineWidth: 4,
          color: "#145959",
          data: data,
        },
      ],
    };

    return config;
  },
};
