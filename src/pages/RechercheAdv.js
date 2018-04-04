import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import ListeAdv from '../composants/ListeAdv'
import ListeDemande from '../composants/ListeDemande'

import Grid from 'material-ui-next/Grid';

class RechercheAdv extends Component {
	constructor(props) {
		
		super(props);
		this.state={
			tok:props.location.state.params.token,

		};
	}

	

  render() {
    return (
      <Grid container>
		 <ListeAdv tok={this.state.tok}/>
		 <Grid md={2}></Grid>
		 <ListeDemande tok={this.state.tok}/>
 
      </Grid>
    );
  }
}

export default RechercheAdv;



