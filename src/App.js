import React, {useState} from "react"; 
import './App.css';
import Navbar from "./components/Navbar/Navbar";
  import Homepage from "./components/Homepage/Homepage";
  import TechStack from "./components/TechStack/TechStack";
  function App() {
  return (
    <div className="app">   
    <Navbar/>
    <Homepage/>
    <TechStack/>
    </div>
  );
  }

export default App;
