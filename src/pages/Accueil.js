import React, { Component } from 'react';
import '../App.css';

import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid';

import Connexion from '../composants/Connexion'
import Inscription from '../composants/Inscription'

import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

class Accueil extends Component {
  render() {
    return (
	<body>
      <Grid container alignItems='center'>
		  
		  <Grid item md={4}></Grid>		
		  <Grid item md={4}  >
          <h1>LOS Groupe 2</h1>
		  </Grid>
		  <Grid item md={4}></Grid>

		  
		  <Grid item md={1}></Grid>
		  <Grid item md={4}><Connexion/></Grid>
		  <Grid item md={1}></Grid>
		  <Grid item md={4}><Inscription/></Grid>
		  <Grid item md={1}></Grid>
	

      </Grid>
	  </body>
    );
  }
}

export default Accueil;



