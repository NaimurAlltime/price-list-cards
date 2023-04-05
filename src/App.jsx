import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl font-semibold text-fuchsia-500">
        Explore React with Tailwind!
      </h1>
    </div>
  );
}

export default App;
