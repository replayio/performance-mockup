import { getRecordingId } from "../params";
import { assert } from "../utils";

// Component for linking to a location in a recording.

interface RecordingLinkProps {
  className: string;
  text: string;
  point: string | undefined;
  time: number | undefined;
}

export function RecordingLink(props: RecordingLinkProps) {
  const { className, point, time, text } = props;
  const recordingId = getRecordingId();
  assert(recordingId);
  let url = `https://app.replay.io/recording/${recordingId}`;
  if (point && time) {
    url += `?point=${point}&time=${time}`;
  }
  return <a className={className} href={url} target="_blank">{text}</a>
}
