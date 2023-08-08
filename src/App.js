import React from "react";
import './index.css'
import Modal from "./Modal";
import SideBar from "./SideBar";
import Home from "./Home";
function App() {
  return (
    <div >
      <Home/>
      <Modal/>
      <SideBar/>
    </div>
  );
}

export default App;
