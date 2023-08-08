import React from "react";
import {FaBars} from 'react-icons/fa'
import { useContext } from "react";
import { AppContext, useGlobalContext } from "./context";
function Home(){
    const {openModal,openSideBar}=useGlobalContext()
    return(
        <main>
            <button className="sidebar-toggle" onClick={openSideBar}>
                <FaBars/>
            </button>
            <button className="btn" onClick={openModal}>show modal</button>
        </main>
    )
}
export default Home