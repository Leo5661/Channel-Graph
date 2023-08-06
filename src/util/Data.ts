import { MessageCountType } from "./MessageCountList.ts";

export const getData = (
  messageCountList: MessageCountType[],
  channels: Array<object>,
): Array<object> => {
  const data: Array<object> = [];
  let fillterdList: Array<object> = [];

  channels.map((item: any) => {
    const channelId = item.id;
    const fillterd = messageCountList.filter((countItem) => {
      return countItem.channelId === channelId;
    });

    if (fillterd.length > 1) {
      fillterdList = fillterd.map((obj) => ({ ...obj, name: item.name }));
    }
  });

  //   console.log("fillterd list: ", fillterdList);

  if (fillterdList.length != 0) {
    fillterdList.map((item: any) => {
      const timestamp = new Date(item.timeBucket).getTime();
      data.push({ y: parseInt(item.count), x: timestamp, name: item.name });
    });
  }

  //   console.log("data point", data);
  return data;
};

export const getXAxisMid = (data: Array<object>) => {
  const min = data.reduce((prev, current) => {
    return prev.x < current.x ? prev : current;
  });

  const max = data.reduce((prev, current) => {
    return prev.x > current.x ? prev : current;
  });

  const mid = new Date((min.x + max.x) / 2);
  //   console.log(mid.toISOString());

  return mid;
};
