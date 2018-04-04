import React, { Component } from 'react';


import Main from '../composants/Main'
import Deck from '../composants/Deck'
import Vie from '../composants/Vie'


import Grid from 'material-ui-next/Grid';







class BandeauMatch extends Component {
	constructor(props) {
		super(props);
		this.state={
			
			tVie:this.props.tVie,		
		}
	}
  render() {

    return (
      
		  <Grid container alignContent='space-around' alignItems='stretch'>
			<Grid item md={2}><Vie taille={this.props.tVie}/></Grid>
			<Grid item md={7}><Main cartes={this.props.cartes}/></Grid>
			<Grid item md={2}><Deck/></Grid>
		  </Grid>
    );
  }
}

export default BandeauMatch;



