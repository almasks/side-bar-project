import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {links,social} from './data'
import { useGlobalContext } from './context'

function SideBar() {
    const {isSideBarOpen,closeSideBar} =useGlobalContext()
  return (
    <aside className={`${isSideBarOpen?'sidebar show-sidebar':'sidebar'}`}>
        <div className='sidebar-header'>
            <h3 className='logo'>Coding addict 
            </h3>
            <button className='close-btn'onClick={closeSideBar}>
                <FaTimes/>
            </button>
           
        </div>
        <ul className='links'>
            {links.map((link)=>{
                const {id,url,text,icon}=link
                return(
                    <li key={id}>
                        <a href={url}>
                            {icon}{text} </a>
                    </li>
                )
            })}

        </ul>
        <ul className='social-icons'>
            {social.map((socialIcons)=>{
                const {id,url,icon}=socialIcons
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            }
            )}
        </ul>
    </aside>
  )
}

export default SideBar