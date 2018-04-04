import React, { Component } from 'react';
import '../App.css';
import streaker from '../images/streaker.jpg';
import a from '../images/a.jpg';
import b from '../images/b.jpg';
import c from '../images/c.jpg';
import d from '../images/d.jpg';
import e from '../images/e.jpg';
import mick from '../images/mick.jpg';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Carte from '../composants/Carte'
import ToutesCartes from '../composants/ToutesCartes'
import BandeauMatch from '../composants/BandeauMatch'
import Saileure from '../composants/Saileure'
import AdvParam from '../composants/AdvParam'


import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';





class Match extends Component {
	constructor(props) {
		super(props);
		this.state={
			adversaire:{
				nom:'props.location.state.params.advName',
				id:'props.location.state.params.advId',
				vie:150,
				carteDeck:16,
				carteMain:4,
				carteBoard:{},
			},
			tok:'props.location.state.params.token',
			cartes:[{photo:streaker,name:'Streaker',att:40,def:40},
					{photo:a, name:'bonhommeA', att:40, def:40},
					{photo:b, name:'bonhommeB', att:4, def:12},
					{photo:c, name:'bonhommeC', att:0, def:84},
					{photo:d, name:'bonhommeD', att:1, def:2},
					{photo:e, name:'bonhommeE', att:33, def:200},
					{photo:mick, name:'Nickey', att:300, def:300}
					],
			tVie:'100%',		
		}
	}
  render() {

    return (
      <Grid container>
	  <Saileure/>
		<AdvParam para={this.state.adversaire}/>
		<Grid style={{height:400}}></Grid>
		<BandeauMatch tVie={this.tVie} cartes={this.state.cartes}/>
      </Grid>
    );
  }
}

export default Match;



