

import React from 'react';
import '../App.css';
import {data} from './data';
import logo from '../resources/logo.png';

function Sidebar() {
    return (
    <div className="Sidebar">
         <div className="Logo">
                <img src={logo} alt="Logo" />
            </div>
        <ul className= "SidebarList">
        {data.map((val,key)=> {
        return (
            <li 
            key= {key} 
            className="row"
            id={window.location.pathname == val.link ? "active" : ""}
            onClick ={()=> {window.location.pathname = val.link}}

            > 

            <div id="icon"> {val.icon}</div>
            <div id="title">   
                {val.title}
                </div>
            </li>
        );
    })}
    </ul>
    </div>
    );
}

export default Sidebar;
