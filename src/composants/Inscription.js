import React, { Component } from 'react';

import Button from 'material-ui-next/Button'
import TextField from 'material-ui-next/TextField';
import Grid from 'material-ui-next/Grid';

import { Link } from 'react-router-dom'


class Inscription extends Component {
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
						/>
						</Grid>
						<Link to='/Choix'>
						<Button raised>
						  S'inscrire
						</Button>
						</Link>
					</form>
    );
  }
}

export default Inscription;
