import React, { Component } from 'react';


import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Divider from 'material-ui-next/Divider';

import { Link } from 'react-router-dom'

import EnvoyerDemande from '../composants/EnvoyerDemande'



class ListeAdv extends Component {
	constructor(props) {
		
		super(props);
		this.state={
			listAdv:[{name:"Olive",matchmakingId:'n10',},{name:"Tom",matchmakingId:'n10'},{name:"Mark Landers",matchmakingId:'n10'},{name:"Le petit chauve (mais je ne me souviens plus comment il s'appelle)",matchmakingId:'n10'}],

		};
	  this.chercheVS = this.chercheVS.bind(this);
	  
	}
	
chercheVS(){
		fetch('https://los.ling.fr/matchmaking/getAll?token='+this.props.tok, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					var koala=[];
					for (var i = 0; i < data["data"].length; i++) {
						koala.push(data.data[i]);
					}
					return koala;
				})
				.then(function(k) {
					this.setState({listAdv:k});
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		
	}

  render() {
	
    return (
	<List component="nav">
			<ListItem >
			  <ListItemText primary="Liste Adversaire" />
			  <Button onClick={this.chercheVS}>Nouvel Adversaire ??</Button>
			</ListItem>
		  <Divider />
			{this.state.listAdv.map((a, idx) => 
				<ListItem button >
				  <ListItemText primary={a.name} />
					<EnvoyerDemande mid={a.matchmakingId} tok={this.props.tok}/>
						
				</ListItem>


							 )}
			
		  </List>

    );
  }
}

export default ListeAdv;



