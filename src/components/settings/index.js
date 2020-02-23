import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import SettigsOption from "./components/settingsOption";
import Item from "./components/item";

export default function index(props) {
  return (
    <Grid container>
      <Grid item md={12}>
        <p className="heading">CUSTOMIZE EDITOR</p>
      </Grid>
      <Grid item md={12} className="settings-option-bar">
        <SettigsOption />
      </Grid>
      <Grid item md={12} className="settings-items">
        {props.squares.length > 0 ? (
          <Item
            shapeHandler={props.shapeHandler}
            redius={props.redius}
            undoOnClick={props.undoOnClick}
          />
        ) : null}
      </Grid>
    </Grid>
  );
}
