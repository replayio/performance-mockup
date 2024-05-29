import { getResult } from "./input";
import { DependencyChainStep, OriginSummary } from "./interfaceTypes";

interface RecordingLinkProps {
  text: string;
  point: string;
  time: number;
}

function RecordingLink(props: RecordingLinkProps) {
  const { point, time, text } = props;
  const recordingId = getResult().spec.recordingId;
  const url = `https://app.replay.io/recording/${recordingId}?point=${point}&time=${time}`;
  return <a className="RecordingLink" href={url} target="_blank">{text}</a>
}

function formatNumber(n: number) {
  return n.toFixed(3);
}

function assert(v: any) {
  if (!v) {
    throw new Error("Assertion Failed!");
  }
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
    <RecordingLink text="End Point" point={triggerPoint} time={endTime}></RecordingLink>

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

interface TimelineEntryProps {
  step: DependencyChainStep;
}

function TimelineEntry(props: TimelineEntryProps) {
  const { step } = props;
  return <div>{"Entry: " + step.code}</div>
}

function App() {
  const summary = getResult().summaries[0];

  const entries: TimelineEntryProps[] = [];
  for (const step of summary.dependencySteps) {
    entries.push({ step });
  }

  return (
    <div className="App">
      <SummaryStatistics summary={summary}></SummaryStatistics>
      <div className="SummaryTitle">Path Steps</div>
      {
        entries.map(props => (<TimelineEntry {...props}></TimelineEntry>))
      }
    </div>
  );
}

export default App;
