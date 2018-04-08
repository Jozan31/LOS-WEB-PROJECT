import React, { Component } from 'react';
import streaker from '../images/streaker.jpg';
import {withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Carte from '../composants/Carte'
import ToutesCartes from '../composants/ToutesCartes'


import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';







class DeckPending extends Component {
	constructor(props) {
		super(props);
		fetch('https://los.ling.fr/match/getMatch?token='+props.location.state.params.token, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if(data.status!="Deck is pending"){
							this.props.history.push('/Match',{params:{ token:props.location.state.params.token, advName:props.location.state.params.advName,advId:props.location.state.params.advId}});			
					}
					
				}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		this.state={
			advName:props.location.state.params.advName,
			advId:props.location.state.params.advId,
			tok:props.location.state.params.token,
		}
	}
  render() {

    return (
      <Grid container>
		<ToutesCartes tok={this.state.tok} advName={this.state.advName} advId={this.state.advId}/>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}export default withRouter(DeckPending);



