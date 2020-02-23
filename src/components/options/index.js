import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

export default function index(props) {
  return (
    <Grid container>
      <Grid item md={12} className="option-control-wrapper">
        <button className="option-control-button"> ZOOM 100% </button>
      </Grid>
      <Grid item md={12} className="option-control-wrapper">
        <button className="option-control-button"> ZOOM IN </button>
      </Grid>
      <Grid item md={12} className="option-control-wrapper">
        <button className="option-control-button"> ZOOM Out </button>
      </Grid>
      <Grid item md={12} className="option-control-wrapper">
        <button className="option-control-button" onClick={props.redoOnClick}>
          
          Redo
        </button>
      </Grid>
      <Grid item md={12} className="option-control-wrapper">
        <button className="option-control-button" onClick={props.undoOnClick}>
          
          Undo
        </button>
      </Grid>
    </Grid>
  );
}
