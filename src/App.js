// App.js

import React from "react";
import "./App.css";
import Card from "./components/Card";
import blue from "./assets/blue.jpg";
import white from "./assets/white.jpg";
import yellow from "./assets/yellow.jpg";
import white2 from "./assets/white2.jpg";
import orange2 from "./assets/orange2.jpg";
import wood from "./assets/wood.jpg";
import NewNavbar from "./components/NewNavbar";
function App() {
  return (
    <div>
      <NewNavbar />
      <div className="navtop"></div>
      <div className="wrapper">
        <Card
          img={white}
          title="Style-white"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ."
        />
        <Card
          img={blue}
          title="Style-blue"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          "
        />
        <Card
          img={yellow}
          title="Style-yellow"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed.
          "
        />
      </div>
      <div className="navtop"></div>
      <div className="wrapper">
        <Card
          img={orange2}
          title="Style-orange"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ."
        />
        <Card
          img={white2}
          title="Style-white"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .
          "
        />
        <Card
          img={wood}
          title="Style-wooden"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .
          "
        />
      </div>
    </div>
  );
}

export default App;
