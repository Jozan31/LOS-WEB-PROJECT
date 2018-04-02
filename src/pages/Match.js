import React, { Component } from 'react';
import '../App.css';
import streaker from '../images/streaker.jpg';
import a from '../images/a.jpg';
import b from '../images/b.jpg';
import c from '../images/c.jpg';
import d from '../images/d.jpg';
import e from '../images/e.jpg';
import mick from '../images/mick.jpg';


import Carte from '../composants/Carte'
import ToutesCartes from '../composants/ToutesCartes'
import Main from '../composants/Main'
import Saileure from '../composants/Saileure'


import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';



import { Link } from 'react-router-dom'




class Match extends Component {
	constructor(props) {
		super(props);
		this.state={
			cartes:[{photo:streaker,name:'Streaker',att:40,def:40},
					{photo:a, name:'bonhommeA', att:40, def:40},
					{photo:b, name:'bonhommeB', att:4, def:12},
					{photo:c, name:'bonhommeC', att:0, def:84},
					{photo:d, name:'bonhommeD', att:1, def:2},
					{photo:e, name:'bonhommeE', att:33, def:200},
					{photo:mick, name:'Nickey', att:300, def:300}
					],
		}
	}
  render() {

    return (
      <Grid container>
	  {this.state.cartes.map((m, idx) => 
				<Carte key={idx} photo={m['photo']} name={m['name']} att={m['att']} def={m['def']}/>
		
							 )}
 
		  <Saileure/>
		  <Main cartes={this.state.cartes}/>
      </Grid>
    );
  }
}

export default Match;



