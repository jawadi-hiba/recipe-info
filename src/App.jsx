import { useState } from "react";
import "./App.css";
import { assets } from "./assets/assets.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img src={assets.headpic} alt="header-img" className="header-pic" />
      </div>
    </>
  );
}

export default App;
