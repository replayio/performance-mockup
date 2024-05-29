import { getResult } from "./input";
import { DependencyChainStep, OriginSummary } from "./interfaceTypes";

interface SummaryProps {
  summary: OriginSummary;
}

interface TimelineEntryProps {
  step: DependencyChainStep;
}

function SummaryStatistics(props: SummaryProps) {
  const { summary } = props;

  const {
    elapsed,
    networkTime,
    schedulingTime,
    mainThreadTime,
    workerThreadTime,
    timerTime,
    unknownTime,
    reactSliceTime,
    reactEventTime,
    reactEvents,
    numNetworkRoundTrips,
  } = summary;

  return <div>Hello World!</div>
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
      {
        entries.map(props => (<TimelineEntry {...props}></TimelineEntry>))
      }
    </div>
  );
}

export default App;
