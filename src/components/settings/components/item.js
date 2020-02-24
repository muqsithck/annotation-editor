import React from "react";
import { Grid } from "@material-ui/core";

export default function items(props) {
  console.log("rad", props.redius);

  return (
    <Grid container>
      <Grid item md={12} className="item-label-wrapper item-label-wrapper-flex">
       <div className="color-circle"></div> 
       <input className="input-box" placeholder="Enter category label..."  />

      </Grid>
      <Grid item md={12} className="item-option-wrapper">
        <Grid container>
          <Grid item md={12} className="item-option-wrapper">
            <p className="caption">SHAPES</p>
          </Grid>
          <Grid item md={12} className="item-button-wrapper">
            <button
              className={
                props.redius === "0%"
                  ? "setting-shape-button setting-shape-button-active"
                  : "setting-shape-button"
              }
              onClick={() => props.shapeHandler("0%")}
            >
              Bounding Box
            </button>
            <button
              className={
                props.redius === "50%"
                  ? "setting-shape-button setting-shape-button-active"
                  : "setting-shape-button"
              }
              onClick={() => props.shapeHandler("50%")}
            >
              Polygon
            </button>
          </Grid>
          <Grid item md={12} className="item-button-wrapper">
            <button className="setting-shape-button ">Circle</button>
            <button className="setting-shape-button">Point</button>
            <button className="setting-shape-button">Line</button>
          </Grid>
          <Grid
            item
            md={12}
            className="item-option-wrapper settings-option-bar-border"
          >
            <p className="caption ">ATTRIBUTES</p>
          </Grid>
          <Grid
            item
            md={12}
            className="item-button-wrapper item-button-wrapper-end"
          >
            <div>
              <button className="setting-attribute-button">DUPLICATE</button>
              <button
                className="setting-attribute-button"
                onClick={props.undoOnClick}
              >
                REMOVE
              </button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
