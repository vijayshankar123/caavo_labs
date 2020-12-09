import React, { Fragment } from "react";
import "./Navbar.css"
import TvIcon from '@material-ui/icons/Tv';
import { Link } from "react-router-dom";

//navbar component
const Navbar = ( ) => {
  return (
   <nav className="nav">
     <div className="navbar">
       <div style={{display:"flex",alignItems:"center"}}>
       <TvIcon style={{fontSize:31,marginRight:5}} />
       <h3 className="new-font" style={{marginLeft:"5px",marginTop:"5px"}}>Caavo Labs</h3>
       </div>
       
       <ul style={{marginTop:"8px"}}>
         <li className="new-font"> Welcome Guest</li>
       </ul>
     </div>
   </nav>
  )
};

export default Navbar
