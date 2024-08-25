import { RecordingLink } from "./RecordingLink";
import { DependencyChainOrigin, OriginSummary } from "../interfaceTypes";
import { assert, formatTime } from "../utils";

// Displays overall information about performance for behavior triggered
// by an originating event.

function getOriginTitle(origin: DependencyChainOrigin) {
  switch (origin.kind) {
    case "documentLoad":
      return "Initial Document Load";
    case "dispatchEvent":
      return `User Event ${origin.eventType}`;
    case "resize":
      return "User Resized Window";
    case "other":
      return "Unknown Origin";
  }
}

interface OriginSummaryProps {
  summary: OriginSummary;
}

export function OriginSummaryDisplay(props: OriginSummaryProps) {
  const { summary } = props;

  const {
    startTime,
    endTime,
    elapsed,
    networkTime,
    schedulingTime,
    mainThreadTime,
    workerThreadTime,
    timerTime,
    reactSliceTime,
    numNetworkRoundTrips,
    origin,
    originScreenShot,
    originMouseLocation,
    commitScreenShot,
  } = summary;

  assert(!workerThreadTime);
  assert(!timerTime);

  const timeRender = (reactSliceTime["SyncRender"] ?? 0) + (reactSliceTime["ConcurrentRender"] ?? 0);
  const timeCommit = reactSliceTime["Commit"] ?? 0;
  const timeFlushPassiveEffects = reactSliceTime["FlushPassiveEffects"] ?? 0;

  const title = getOriginTitle(origin);

  const containerStyle: any = {
    position: 'relative',
    display: 'inline-block',
  };

  let originImage;
  let mouseLocationDiv;
  if (originScreenShot) {
    const src = `data:image/jpeg;base64,${originScreenShot.screen}`;
    originImage = <img className="OriginImage" src={src}></img>;

    if (originMouseLocation) {
      const circleX = 50;
      const circleY = 50;
      const circleRadius = 20;
      const circleColor = "red";
      const circleStyle: any = {
        position: 'absolute',
        left: `${circleX - circleRadius}px`, // Adjust the position to center the circle
        top: `${circleY - circleRadius}px`, // Adjust the position to center the circle
        width: `${circleRadius * 2}px`,
        height: `${circleRadius * 2}px`,
        borderRadius: '50%',
        backgroundColor: circleColor,
        pointerEvents: 'none', // Ensures that the circle does not interfere with interactions on the image
      };
      mouseLocationDiv = <div style={circleStyle}></div>
    }
  }

  return <span>
    <div className="OriginTitle">{ title }</div>
    <div style={containerStyle}>
      {originImage}
      {mouseLocationDiv}
    </div>
    <div className="OriginEntry">{"Time: " + formatTime(startTime)}</div>
    <div className="OriginEntry">{"Elapsed: " + formatTime(elapsed)}</div>

    <div className="SummaryTitle">Timing</div>
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
