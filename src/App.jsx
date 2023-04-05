import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl font-semibold text-fuchsia-500">
        Explore React with Tailwind!
      </h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
