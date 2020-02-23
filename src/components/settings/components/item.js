import React from "react";
import { Grid } from "@material-ui/core";

export default function items() {
  return (
    <Grid container>
      <Grid item md={12} className="item-label-wrapper">
        <p className="heading-two">catogery</p>
      </Grid>
     
      <Grid item md={12} className="item-option-wrapper">
        <Grid container>
        <Grid item md={12} className="item-option-wrapper">
        <p className="caption">SHAPES</p>
      </Grid>
          <Grid item md={12} className="item-button-wrapper">
            <button className="setting-shape-button setting-shape-button-active">
              Bounding Box
            </button>
            <button className="setting-shape-button">Polygon</button>
          </Grid>
          <Grid item md={12} className="item-button-wrapper">
            <button className="setting-shape-button ">Circle</button>
            <button className="setting-shape-button">Point</button>
            <button className="setting-shape-button">Line</button>
          </Grid>
          <Grid item md={12} className="item-option-wrapper settings-option-bar-border">
            <p className="caption ">ATTRIBUTES</p>
          </Grid>
          <Grid item md={12} className="item-button-wrapper item-button-wrapper-end">
            <div>
            <button className="setting-attribute-button">DUPLICATE</button>
            <button className="setting-attribute-button">REMOVE</button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
