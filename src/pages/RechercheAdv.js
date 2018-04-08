import React, { Component } from 'react';

import {withRouter, Link} from 'react-router-dom';

import ListeAdv from '../composants/ListeAdv'
import ListeDemande from '../composants/ListeDemande'

import Grid from 'material-ui-next/Grid';
import Button from 'material-ui-next/Button';

class RechercheAdv extends Component {
	constructor(props) {
		
		super(props);
		this.state={
			tok:props.location.state.params.token,

		};
	this.checkMatch = this.checkMatch.bind(this);

	}
	
  componentDidMount() {
    this.interval = setInterval(this.checkMatch, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
	checkMatch(){
		fetch('https://los.ling.fr/matchmaking/participate?token='+this.state.tok, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if(data.data.hasOwnProperty('match')){
							this.props.history.push('/AttentionUnMartienSEchappe',{params:{ token:this.state.tok, advName:data.data.match.player2.name,advId:data.data.match.player2.id}});
							//
						
					}
					
				}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
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

export default withRouter(RechercheAdv);



