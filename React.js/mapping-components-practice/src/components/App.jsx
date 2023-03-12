import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createItem(item) {
  return (
    <Entry
      key={item.id}
      emoji={item.emoji}
      term={item.name}
      description={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createItem)}</dl>
    </div>
  );
}

export default App;
