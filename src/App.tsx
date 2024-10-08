import { getRecordingId } from "./params";
import { fetchResult } from "./result";
import { PerformanceAnalysisResult } from "./interfaceTypes";
import { useState, useEffect } from "react";
import { RecordingDisplay } from "./components/RecordingDisplay";
import { OriginDisplay } from "./components/OriginDisplay";

function App() {
  const [result, setResult] = useState<string | PerformanceAnalysisResult>("initial");
  useEffect(() => {
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

  const { recordingURL } = result;

  return (
    <div className="App">
      <RecordingDisplay recordingURL={recordingURL}></RecordingDisplay>
      {
        result.summaries.map(summary => {
          const props = { summary };
          return (<OriginDisplay {...props}></OriginDisplay>);
        })
      }
      <div className="Footer"></div>
    </div>
  );
}

export default App;
