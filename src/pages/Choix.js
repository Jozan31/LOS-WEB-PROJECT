import React, { Component } from 'react';
import '../App.css';

import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui-next/Paper';
import Typography from 'material-ui-next/Typography';

import { Link } from 'react-router-dom'


class Choix extends Component {
	

  render() {
    return (
		
      <Grid container md={12}  alignItems='center'>
		<Grid md={12} style={{height:200}}></Grid>

	  
		  <Grid md={2}></Grid>
		  <Grid md={2} alignContent='center'>
			<Link to='/RechercheUnBro'>
				<Paper elevation={4} style={{backgroundColor:'#009688'}}>
					<Typography variant="headline" component="h2">
					  JOUER
					</Typography>
				  </Paper>
			</Link>
		  </Grid>
		  <Grid md={1}></Grid>
		  <Grid md={2}>
			 <Link to='/'>
				<Paper elevation={4} style={{backgroundColor:'#CDDC39'}}>
					<Typography variant="headline" component="h2">
					  Se Déconnecter
					</Typography>
				  </Paper>
			</Link>
		  </Grid>
		  <Grid md={1}></Grid>
		  <Grid md={2}>
			<Link to='/'>
				<Paper elevation={4} style={{backgroundColor:'#FF8A65'}}>
					<Typography variant="headline" component="h2">
					  Se Désinscrire
					</Typography>
				  </Paper>
			</Link>
			
		  </Grid>
		  <Grid md={2}></Grid>

      </Grid>
    );
  }
}

export default Choix;



