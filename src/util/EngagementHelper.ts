import { MessageCountType } from "./MessageCountList.ts";

const getData = (
  messageCountList: MessageCountType[],
  channels: object[],
): Array<object> => {
  const data: Array<object> = [];
  let fillterdList: object[] = [];

  channels.map((item: object) => {
    const channelId = item.id;
    const fillterd = messageCountList.filter((countItem) => {
      return countItem.channelId === channelId;
    });

    if (fillterd.length > 1) {
      fillterdList = fillterd.map((obj) => ({ ...obj, name: item.name }));
    }
  });

  console.log("fillterd list: ", fillterdList);

  if (fillterdList.length != 0) {
    fillterdList.map((item: object) => {
      const timestamp = new Date(item.timeBucket).getTime();
      data.push({ y: parseInt(item.count), x: timestamp, name: item.name });
    });
  }

  console.log("data point", data);
  return data;
};

export const engagementHelper = {
  engagementMessageOverTimeChartOptions: (
    messageCountList: MessageCountType[],
    channels: object[],
  ) => {
    const data = getData(messageCountList, channels);

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

        style: {
          color: "#FFFFFF",
        },
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
        dateTimeLabelFormats: {
          day: "%e. %b",
        },
        tickInterval: 24 * 3600 * 1000,
        plotLines: [
          {
            color: "gray",
            dashStyle: "solid",
            value: 7.5,
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
          data: data,
        },
      ],
    };

    return config;
  },
};
