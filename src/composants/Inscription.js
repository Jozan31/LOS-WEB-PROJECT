import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'material-ui-next/Button'
import TextField from 'material-ui-next/TextField';
import Grid from 'material-ui-next/Grid';

import { Link } from 'react-router-dom'


class Inscription extends Component {
	state = {connected: false}
	
	constructor(props) {
      super(props);
      this.state = { email: '', pwd: '',username:'' };
	  
	  this.handleSubmit = this.handleSubmit.bind(this);
  };
	
	handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });

  };
  handleSubmit() {
	  alert(this.state.email+' '+this.state.pwd+' '+this.state.username);
		fetch('https://los.ling.fr/users/subscribe?email='+this.state.email+'&password='+this.state.pwd+'&name='+this.state.username, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if(data.status=='error'){alert("nope guy, Try again...");}
					else{
						alert('inscris');
						fetch('https://los.ling.fr/users/connect?email='+this.state.email+'&password='+this.state.pwd, {
						method: 'get'} 
								)
								.then(function(resp){return resp.json()})
								.then(function(data) {
								alert(JSON.stringify(data));
								if(data.status=='error'){alert("nope guy, Try again...");}
								else{
									this.setState({connected: true})
									
									this.props.history.push('/choix',{params:{ token:data.data.token,m: this.state.email,p:this.state.pwd }});}
								
									
							}.bind(this))
							.catch(function(error) {
								console.log(error);
							});
						
						}
					
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
  };
  render() {
    return (
						<form>
						 <Grid item md={12}>
						 <TextField
						  fullWidth
						  id="email"
						  name="email"
						  label="email"
						  placeholder="marco@polo.it"
						  margin="normal"
						  onChange={this.handleChange('email')}
						  value={this.state.email}
						/>
						</Grid>
						 <Grid item md={12}>
						 <TextField
						  fullWidth
						  id="username"
						  name="username"
						  label="username"
						  placeholder="marco"
						  margin="normal"
						  onChange={this.handleChange('username')}
						  value={this.state.username}
						/>
						</Grid>
						 <Grid item md={12}>
						<TextField
						  fullWidth
						  id="pwd"
						  name="pwd"
						  type="password"
						  label="mot de passe "
						  placeholder="******"
						  margin="normal"
						  onChange={this.handleChange('pwd')}
						  value={this.state.pwd}
						/>
						</Grid>
						<Button onClick={this.handleSubmit} >
						  S'inscrire
						</Button>
					</form>
    );
  }
}

function mapStateToProps(state) {
  return {
	connected: state.connected,
	mail: state.email
  };
}



export default withRouter((connect(mapStateToProps)(Inscription)));
