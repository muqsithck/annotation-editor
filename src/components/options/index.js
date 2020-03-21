import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

export default function index(props) {
  return (
    <Grid container style={{display:"flex", justifyContent:"flex-end"}}>
      
        <button className="option-control-button"
        onClick={props.zoomInitial}
        > Zoom 100% </button> 
    
        <button 
        onClick={props.zoomIn}
        className="option-control-button"> Zoom In </button>
     
        <button
        onClick={props.zoomOut}
        className="option-control-button"> Zoom Out </button>
    
        <button className="option-control-button"
         onClick={props.redoOnClick}>
          Redo
        </button>
    
        <button className="option-control-button" onClick={props.undoOnClick}>
          Undo
        </button>
   
    </Grid>
  );
}
