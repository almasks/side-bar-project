import React, { useState } from "react";
import { useContext } from "react";
const AppContext=React.createContext()


const AppProvider =({children})=>{
const [isModalOpen,setIsModalOpen]=useState(false)
const [isSideBarOpen,setSideBarOpen]=useState(false)
const openModal=()=>{
    setIsModalOpen(true)
}
const closeModal=()=>{
    setIsModalOpen(false)
}
const openSideBar=()=>{
    setSideBarOpen(true)
}
const closeSideBar=()=>{
    setSideBarOpen(false)
}
    return  <AppContext.Provider value={{openModal,closeModal,openSideBar,closeSideBar,isModalOpen,isSideBarOpen}}>{children}</AppContext.Provider>
    
}
export const useGlobalContext=()=>{
return useContext(AppContext)
}
export {AppContext,AppProvider}