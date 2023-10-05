// App.js

import React from "react";
import "./App.css";
import Card from "./components/Card";
import blue from "./assets/blue.jpg";
import white from "./assets/white.jpg";
import yellow from "./assets/yellow.jpg";
function App() {
  return (
    <div className="wrapper">
      <Card
        img={blue}
        title="Style-blue"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
      />
      <Card
        img={white}
        title="Style-white"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          "
      />
      <Card
        img={yellow}
        title="Style-yellow"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          "
      />
    </div>
  );
}

export default App;
