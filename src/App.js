// App.js

import React from "react";
import "./App.css";

import blue from "./assets/blue.jpg";
import white from "./assets/white.jpg";
import yellow from "./assets/yellow.jpg";
import white2 from "./assets/white2.jpg";
import orange2 from "./assets/orange2.jpg";
import wood from "./assets/wood.jpg";
import NewNavbar from "./components/NewNavbar";
import FilterableProductCard from "./components/FilterableProductCard";
function App() {
  let PRODUCTS=[
    {id:1,imageUrl:white,title:"Style-white",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
    price:"$2",stocked:true
  },
  {id:2,imageUrl:blue,title:"Style-blue",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
  price:"$2",stocked:true
},
{id:3,imageUrl:yellow,title:"Style-yellow",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
price:"$2",stocked:true
},
{id:4,imageUrl:orange2,title:"Style-orange",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
price:"$2",stocked:true
},
{id:5,imageUrl:white2,title:"Style-white",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
price:"$2",stocked:true
},
{id:6,imageUrl:wood,title:"Style-wooden",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
price:"$2",stocked:true
},
  ]
      
    
  return (
    <div>
      
      {/* <div className="navtop"></div>
      <div className="wrapper">
        <Card
          products={PRODUCTS}
        />
        <Card
          products={PRODUCTS}
        />
        <Card
          products={PRODUCTS}
        />
      </div>
      <div className="navtop"></div>
      <div className="wrapper">
        <Card
          products={PRODUCTS}
        />
        <Card
          products={PRODUCTS}
        />
        <Card
          products={PRODUCTS}
        />
      </div> */}
      <FilterableProductCard products={PRODUCTS}/>
    </div>
  );
}

export default App;
