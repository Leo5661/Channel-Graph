import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { engagementHelper } from "../util/EngagementHelper.ts";
import { MessageCountList } from "../util/MessageCountList.ts";
import { Channels } from "../util/Channels.ts";

function EngagementMessagesOverTime() {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    MessageCountList,
    Channels,
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default EngagementMessagesOverTime;
