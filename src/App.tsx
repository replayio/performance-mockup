import React, { useState } from "react";

interface TimelineEntryProps {
  count: number;
}

function TimelineEntry(props: TimelineEntryProps) {
  const { count } = props;
  return <div>{"Entry: " + count}</div>
}

function App() {
  const entries: TimelineEntryProps[] = [];
  for (let i = 0; i < 10; i++) {
    entries.push({ count: i });
  }

  return (
    <div className="App">
      {
        entries.map(props => (<TimelineEntry {...props}></TimelineEntry>))
      }
    </div>
  );
}

export default App;
