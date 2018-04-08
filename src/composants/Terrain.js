import React, { Component } from 'react';



import Carte from '../composants/Carte'





import Grid from 'material-ui-next/Grid';

import Card from 'material-ui-next/Card';

import ButtonBase from "material-ui-next/ButtonBase";



class Terrain extends Component {



  constructor(props) {

    super(props);

  };



  render() {

    return (

      <Grid container align="center">

        <Grid item xs={12}>

              {[0,1,2,3,4].map(value =>

                <ButtonBase>

                  <Card style={{ backgroundColor: 'blue', height: 250, width: 150}} className="card" ></Card>

                </ButtonBase>

              )}

        </Grid>

        <Grid item xs={12}>

              {[0,1,2,3,4].map(value =>

                <ButtonBase>

                  <Card style={{ backgroundColor: 'green', height: 250, width: 150}} className="card" ></Card>

                </ButtonBase>

              )}

        </Grid>

      </Grid>

    );

  }



}



export default Terrain;