import { getRecordingId } from "./params";
import { fetchResult } from "./result";
import { assert } from "./utils";
import { DependencyChainStep, OriginSummary, PerformanceAnalysisResult } from "./interfaceTypes";
import { useState, useEffect } from "react";

interface RecordingLinkProps {
  className: string;
  text: string;
  point: string;
  time: number;
}

function RecordingLink(props: RecordingLinkProps) {
  const { className, point, time, text } = props;
  const recordingId = getRecordingId();
  assert(recordingId);
  const url = `https://app.replay.io/recording/${recordingId}?point=${point}&time=${time}`;
  return <a className={className} href={url} target="_blank">{text}</a>
}

function formatNumber(n: number) {
  return Math.round(n) + " ms";
}

interface SummaryProps {
  summary: OriginSummary;
}

function SummaryStatistics(props: SummaryProps) {
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
    <div className="SummaryEntry">{"Start Time: " + formatNumber(startTime)}</div>
    <div className="SummaryEntry">{"End Time: " + formatNumber(endTime)}</div>
    <RecordingLink className="SummaryPoint" text="End Point" point={triggerPoint} time={endTime}></RecordingLink>

    <div className="SummaryTitle">Timing</div>
    <div className="SummaryEntry">{"Total: " + formatNumber(elapsed)}</div>
    <div className="SummaryEntry">{"Network: " + formatNumber(networkTime)}</div>
    <div className="SummaryEntry">{"Main Thread: " + formatNumber(mainThreadTime)}</div>
    <div className="SummaryEntry">{"Scheduling: " + formatNumber(schedulingTime)}</div>

    <div className="SummaryTitle">Network</div>
    <div className="SummaryEntry">{"Round Trips: " + numNetworkRoundTrips}</div>

    <div className="SummaryTitle">Main Thread</div>
    <div className="SummaryEntry">{"React Rendering: " + formatNumber(timeRender)}</div>
    <div className="SummaryEntry">{"React Committing: " + formatNumber(timeCommit)}</div>
    <div className="SummaryEntry">{"React Flushing Effects: " + formatNumber(timeFlushPassiveEffects)}</div>
  </span>;
}

function getDescription(step: DependencyChainStep): string {
  switch (step.code) {
    case "DocumentBeginLoad":
      return `Document begins loading`;
    case "DocumentExecuteBlockedScript":
      return `Executed a script blocked by other resources`;
    case "DocumentInitiateNetworkRequest":
      return `Request started for a document URL`;
    case "NetworkReceiveData":
      return `Received ${step.numBytes} bytes of data`;
    case "NetworkReceiveResource":
      return `Received the entire resource`;
    case "ScriptInitiateNetworkRequest":
      return `Script started a network request`;
    case "ScriptCreateWebSocket":
      return `Script created a WebSocket`;
    case "ScriptSendWebSocketMessage":
      return `Script sent a WebSocket message`;
    case "WebSocketConnected":
      return `New WebSocket connected`;
    case "WebSocketMessageReceived":
      return `Received a WebSocket response`;
    case "ReactHydrateRoot":
      return `React hydration started`;
    case "ReactRender":
      return `React rendered a component`;
    case "ReactReturnElement":
      return `Component render returned a new component`;
    case "ReactCreateElement":
      return `Component render created a new component`;
    case "ReactCallUseEffect":
      return `Component render called useEffect()`;
    case "ReactEffectFirstCall":
      return `Effect function called for the first time`;
    case "ReactCallSetState":
      return `Script called setState()`;
  }
  return "Entry: " + step.code;
}

function isNetworkResponse(step: DependencyChainStep) {
  switch (step.code) {
    case "NetworkReceiveData":
    case "NetworkReceiveResource":
    case "WebSocketConnected":
    case "WebSocketMessageReceived":
      return true;
  }
  return false;
}

interface TimelineEntryProps {
  step: DependencyChainStep;
  previous: DependencyChainStep | null;
}

function TimelineEntry(props: TimelineEntryProps) {
  const { step, previous } = props;

  const children: any[] = [];
  children.push(<div className="TimelineDescription">{getDescription(step)}</div>);
  children.push(<div className="TimelineTime">{"Time: " + formatNumber(step.time ?? 0)}</div>);

  if (previous) {
    const elapsed = (step.time ?? 0) - (previous.time ?? 0);
    children.push(<div className="TimelineTime">{"Elapsed: " + formatNumber(elapsed)}</div>);
  }

  if (step.point) {
    children.push(<RecordingLink className="TimelineEntryPoint" text="Point" point={step.point} time={step.time ?? 0}></RecordingLink>);
  }

  if ("url" in step) {
    children.push(<div className="TimelineURL">{"URL: " + step.url}</div>);
  }

  if ("calleeLocation" in step && step.calleeLocation) {
    const { url, line } = step.calleeLocation;
    children.push(<div className="TimelineLocation">{`Location: ${url}:${line}`}</div>);
  }

  const className = isNetworkResponse(step) ? "TimelineEntryNetwork" : "TimelineEntry";

  return <div className={className}>
    {children}
  </div>
}

function App() {
  const [result, setResult] = useState<string | PerformanceAnalysisResult>("initial");
  useEffect(() => {
    console.log("EFFECT_CALLED");
    const recordingId = getRecordingId();
    if (recordingId) {
      setResult("Fetching results...");
      fetchResult(recordingId).then(result => setResult(result));
    } else {
      setResult("recordingId URL param not specified");
    }
  }, []);

  if (typeof result == "string") {
    return <div className="Status">{ result }</div>;
  }

  const summary = result.summaries[0];

  const entries: TimelineEntryProps[] = [];
  let previous: DependencyChainStep | null = null;
  for (const step of summary.dependencySteps) {
    entries.push({ step, previous });
    previous = step;
  }

  return (
    <div className="App">
      <SummaryStatistics summary={summary}></SummaryStatistics>
      <div className="SummaryTitle">Steps</div>
      {
        entries.map(props => (<TimelineEntry {...props}></TimelineEntry>))
      }
    </div>
  );
}

export default App;
