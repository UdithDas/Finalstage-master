
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaEdit,
    FaStar,
    FaGlassCheers,
    FaAddressCard,
    FaPowerOff
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/productList",
            name:"Type",
            icon:<FaGlassCheers/>
           
        },
        {
            path:"/product",
            name:"Rating",
            icon:<FaStar/>
            
        },
        {
            path:"/register",
            name:"Register",
            icon:<FaEdit/>
        },
        {
            path:"/analytics",
            name:"Restuarant Details",
            icon:<FaAddressCard/>
        },
        {
            path:"/",
            name:"LogOut",
            icon:<FaPowerOff/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">DineOut</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;