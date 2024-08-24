import { RecordingLink } from "./RecordingLink";

// Displays overall information about the recording being examined.

export function RecordingDisplay() {
  return <div className="RecordingInfo">
    <RecordingLink className="DefaultRecordingLink" text="Recording of PLACEHOLDER" point={undefined} time={undefined}></RecordingLink>
  </div>;
}
