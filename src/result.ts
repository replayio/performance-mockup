import { PerformanceAnalysisResult } from "./interfaceTypes";

// FIXME Enable cross origin accesses on static.replay.io performance results.
function addCORSProxy(url: string) {
  return "https://corsproxy.io/?" + url;
}

export async function fetchResult(recordingId: string): Promise<PerformanceAnalysisResult | string> {
  const jsonURL = addCORSProxy(`https://static.replay.io/performance/performance-${recordingId}.json`);

  let result;
  try {
    result = await fetch(jsonURL);
  } catch (e) {
    return `Error reading ${jsonURL}`;
  }

  let json;
  try {
    json = result.json();
  } catch (e) {
    return `Error decoding JSON ${jsonURL}`;
  }

  return json;
}
