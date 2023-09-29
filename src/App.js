// App.js

import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Parent Card</h1>
        <p>This is the parent card content.</p>

        <Card>
          <h2>Child Card</h2>
          <p>This is the child card content.</p>
        </Card>
      </Card>
    </div>
  );
}

export default App;
