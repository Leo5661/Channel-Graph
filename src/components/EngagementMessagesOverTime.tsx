import * as Highcharts from "highcharts";
import { engagementHelper } from "../util/EngagementHelper.ts";
import { MessageCountList } from "../util/MessageCountList.ts";
import { Channels } from "../util/Channels.ts";
import { HighchartsReact } from "highcharts-react-official";

function EngagementMessagesOverTime() {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    MessageCountList,
    Channels,
  );

  return (
    <div className="p-8 mt-8 drop-shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default EngagementMessagesOverTime;
