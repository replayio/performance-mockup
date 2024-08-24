import { OriginSummaryDisplay } from "./OriginSummaryDisplay";
import { TimelineEntry, TimelineEntryProps } from "./TimelineEntry";
import { OriginSummary, DependencyChainStep } from "../interfaceTypes";

// Displays all information for an originating event.

interface OriginDisplayProps {
  summary: OriginSummary;
}

export function OriginDisplay(props: OriginDisplayProps) {
  const { summary } = props;

  const entries: TimelineEntryProps[] = [];
  let previous: DependencyChainStep | null = null;
  for (const step of summary.dependencySteps) {
    entries.push({ step, previous });
    previous = step;
  }

  return <div>
    <OriginSummaryDisplay summary={summary}></OriginSummaryDisplay>
    <div className="SummaryTitle">Steps</div>
    {
      entries.map(props => (<TimelineEntry {...props}></TimelineEntry>))
    }
  </div>;
}
