import React from "react";
import "./Hamburger.css";


interface IProps {
   click: ()=>any /*the handler that sets the flag that triggers any of the drawer components */
}

const hamburger: React.FC<IProps> = (props) => {
 return ( <div className="hamburger" onClick={props.click}>
    <div className="hamburger__slice" />
    <div className="hamburger__slice" />
    <div className="hamburger__slice" />
 </div>);
};

export default hamburger;
