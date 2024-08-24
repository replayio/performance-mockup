import { RecordingLink } from "./RecordingLink";
import { OriginSummary } from "../interfaceTypes";
import { assert, formatTime } from "../utils";

// Displays overall information about performance for behavior triggered
// by an originating event.

interface OriginSummaryProps {
  summary: OriginSummary;
}

export function OriginSummaryDisplay(props: OriginSummaryProps) {
  const { summary } = props;

  const {
    startTime,
    endTime,
    triggerPoint,
    elapsed,
    networkTime,
    schedulingTime,
    mainThreadTime,
    workerThreadTime,
    timerTime,
    reactSliceTime,
    numNetworkRoundTrips,
  } = summary;

  assert(!workerThreadTime);
  assert(!timerTime);

  const timeRender = (reactSliceTime["SyncRender"] ?? 0) + (reactSliceTime["ConcurrentRender"] ?? 0);
  const timeCommit = reactSliceTime["Commit"] ?? 0;
  const timeFlushPassiveEffects = reactSliceTime["FlushPassiveEffects"] ?? 0;

  return <span>
    <div className="SummaryTitle">Limiting Path</div>
    <div className="SummaryEntry">{"Start Time: " + formatTime(startTime)}</div>
    <div className="SummaryEntry">{"End Time: " + formatTime(endTime)}</div>
    <RecordingLink className="SummaryPoint" text="End Point" point={triggerPoint} time={endTime}></RecordingLink>

    <div className="SummaryTitle">Timing</div>
    <div className="SummaryEntry">{"Total: " + formatTime(elapsed)}</div>
    <div className="SummaryEntry">{"Network: " + formatTime(networkTime)}</div>
    <div className="SummaryEntry">{"Main Thread: " + formatTime(mainThreadTime)}</div>
    <div className="SummaryEntry">{"Scheduling: " + formatTime(schedulingTime)}</div>

    <div className="SummaryTitle">Network</div>
    <div className="SummaryEntry">{"Round Trips: " + numNetworkRoundTrips}</div>

    <div className="SummaryTitle">Main Thread</div>
    <div className="SummaryEntry">{"React Rendering: " + formatTime(timeRender)}</div>
    <div className="SummaryEntry">{"React Committing: " + formatTime(timeCommit)}</div>
    <div className="SummaryEntry">{"React Flushing Effects: " + formatTime(timeFlushPassiveEffects)}</div>
  </span>;
}
