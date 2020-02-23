import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import SettigsOption from './components/settingsOption'
import Item from './components/item'

export default class index extends Component {
  render() {
    return (
      <Grid container>
        <Grid item md={12}>
          <p className="heading">CUSTOMIZE EDITOR</p>
        </Grid>
        <Grid item md={12} className="settings-option-bar">
        <SettigsOption />
        </Grid>
        <Grid item md={12} className="settings-items">
        <Item />
        </Grid>
      </Grid>
    );
  }
}
