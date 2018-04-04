import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'material-ui-next/Button'
import TextField from 'material-ui-next/TextField';
import Grid from 'material-ui-next/Grid';




class Connexion extends Component {
	state = {connected: false}
	
	constructor(props) {
      super(props);
      this.state = { mail: '', password: '',tok:'' };
	  
	  this.handleSubmit = this.handleSubmit.bind(this);
  };
	
	handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });

  };
  handleSubmit() {
		fetch('https://los.ling.fr/users/connect?email='+this.state.mail+'&password='+this.state.password, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
				alert(JSON.stringify(data));
				alert(data.data.token);
				if(data.status=='error'){alert("nope guy, Try again...");}
				else{
					this.setState({connected: true,tok:data.data.token})
					
					this.props.history.push('/choix',{params:{ token:data.data.token,m: this.state.mail,p:this.state.password }});}
				
					
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
						  id="mail"
						  name="mail"
						  label="mail"
						  placeholder="marco@polo.it"
						  margin="normal"
						  onChange={this.handleChange('mail')}
						  value={this.state.mail}

						/>
						</Grid>
						 <Grid item md={12}>
						<TextField
						  fullWidth
						  id="password"
						  name="password"
						  type="password"
						  label="mot de passe "
						  placeholder="******"
						  margin="normal"
						  onChange={this.handleChange('password')}
						  value={this.state.password}
						/>
						</Grid>
						<Button onClick={this.handleSubmit}>
						  Se Connecter
						</Button>
						
					</form>
    );
  }
}

  
  
 

function mapStateToProps(state) {
  return {
	connected: state.connected,
	mail: state.mail,
	tok: state.tok
  };
}



export default withRouter((connect(mapStateToProps)(Connexion)));

