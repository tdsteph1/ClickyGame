import React from "react";
import "./Wrapper.css";

//Note: (...props) returns image below navebar. 
//TRY: deleting <main className= ... />
const Wrapper = props => <main className="wrapper" {...props} />;


export default Wrapper;
