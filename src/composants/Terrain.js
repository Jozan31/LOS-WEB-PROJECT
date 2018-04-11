import React, { Component } from 'react';


import CarteBoard from '../composants/CarteBoard'

import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui-next/Paper';
import Card from 'material-ui-next/Card';
import ButtonBase from "material-ui-next/ButtonBase";



class Terrain extends Component {



  constructor(props) {

    super(props);

    this.state = {
      cartesMoi : this.props.badgeContent
    }
    //this.setState({cartesMoi : this.state.cartesMoi});
    console.log(this.state.cartesMoi);

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

          {this.state.cartesMoi.map(h => (
                    <CarteBoard name={h.name}  photo={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+h.key+'_1.jpg'} def={h.stats.attackdamage} att={h.stats.armor} />
                ))}

        </Grid>

      </Grid>

    );

  }



}



export default Terrain;
