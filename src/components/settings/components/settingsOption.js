import React from 'react'
import {Grid} from '@material-ui/core'

export default function settingsOption() {
    return (
        <Grid container>
        <Grid item md={5}>
          <p className="heading-two">CATEGORIES</p>
        </Grid>
        
        <Grid item md={5}>
          <p className="heading-three">ATTRIBUTES</p>
        </Grid>
        <Grid item md={2}> 
          <p className="heading-two">+ADD</p>
        </Grid>
      </Grid>
    )
}
