import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import play from '../images/play.gif';



import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui-next/Paper';
import Typography from 'material-ui-next/Typography';




class Choix extends Component {
	state = {connected: true}
	constructor(props) {
      super(props);
      this.state = { mail: props.location.state.params.m, password: props.location.state.params.p,tok :props.location.state.params.token };
	  this.deco = this.deco.bind(this);
	  this.desinscription = this.desinscription.bind(this);
	  this.game = this.game.bind(this);

  };
	
	deco(){
		fetch('https://los.ling.fr/users/disconnect', {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					this.setState({connected: false})
					this.props.history.push('/');
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
	}
	desinscription(){
		fetch('https://los.ling.fr/users/unsubscribe?token='+this.state.tok+'&email='+this.state.mail+'&password='+this.state.password, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					this.setState({connected: false})
					this.props.history.push('/');
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
	}
	game(){
		fetch('https://los.ling.fr/matchmaking/participate?token='+this.state.tok, {
				method: 'get',headers: { 'Connection': 'keep-alive'}}, 
				)
				.then(function(resp){return resp.text()})
				.then(function(data) {
					console.log(this.props.store);
					alert(data);
					this.props.history.push('/RechercheUnBro',{params:{ token:this.state.tok}});
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
	}
  render() {
    return (
		
      <Grid container md={12}  alignItems='center'>
		<Grid md={12} style={{height:40}}></Grid>

	  
		  <Grid md={4}></Grid>
		  <Grid md={8} alignContent='center'>
		<img  style={{height:'50%',width:'50%'}} onClick={this.game}src={play} alt="JOUER"/>

		  </Grid>
		  <Grid md={12} style={{height:50}}></Grid>
		  <Grid md={3}></Grid>

		  <Grid md={2}>
			<Button onClick={this.deco}>Se Déconnecter
			</Button>
		  </Grid>
		  <Grid md={2}></Grid>
		  <Grid md={2}>
			<Button onClick={this.desinscription}>Se Désinscrire
			</Button>
			
		  </Grid>

      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
	connected: state.connected,
  };
}



export default withRouter((connect(mapStateToProps)(Choix)));



