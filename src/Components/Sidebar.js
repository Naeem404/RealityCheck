import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import logo from '../resources/logo.png';
import '../App.css';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Logo">
                <img src={logo} alt="Logo" />
            </div>
            <List>
                <ListItem button component={Link} to="/chat">
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItem>
                <ListItem button component={Link} to="/results">
                    <ListItemIcon>
                        <SignalCellularAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Results" />
                </ListItem>
                <ListItem button component={Link} to="/recommendations">
                    <ListItemIcon>
                        <VolunteerActivismIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recommendations" />
                </ListItem>
            </List>
        </div>
    );
}

export default Sidebar;



//import React from 'react';
// import {data} from './data';
// import logo from '../resources/logo.png';

// function Sidebar() {
//     return (
//     <div className="Sidebar">
//          <div className="Logo">
//                 <img src={logo} alt="Logo" />
//             </div>
//         <ul className= "SidebarList">
//         {data.map((val,key)=> {
//         return (
//             <li 
//             key= {key} 
//             className="row"
//             id={window.location.pathname == val.link ? "active" : ""}
//             onClick ={()=> {window.location.pathname = val.link}}

//             > 

//             <div id="icon"> {val.icon}</div>
//             <div id="title">   
//                 {val.title}
//                 </div>
//             </li>
//         );
//     })}
//     </ul>
//     </div>
//     );
// }

// export default Sidebar;