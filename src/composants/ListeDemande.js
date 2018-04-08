import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';


import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Divider from 'material-ui-next/Divider';

import AccepterDemande from '../composants/AccepterDemande'






class ListeDemande extends Component {
	constructor(props) {
		
		super(props);
		this.state={
					req:[{"userId":"5ac2b19dfc3de50c263ca134","matchmakingId":"5ac2b1a2fc3de50c263ca135","name":"test7"},{"userId":"5ac2b19dfc3de50c263ca134","matchmakingId":"5ac2b1a2fc3de50c263ca135","name":"test7"},{"userId":"5ac2b19dfc3de50c263ca134","matchmakingId":"5ac2b1a2fc3de50c263ca135","name":"test7"},{"userId":"5ac2b19dfc3de50c263ca134","matchmakingId":"5ac2b1a2fc3de50c263ca135","name":"test7"},{"userId":"5ac2b2c71e5c1210f07eac4b","matchmakingId":"5ac2b2cd1e5c1210f07eac4c","name":"test5"},{"userId":"5ac2b19dfc3de50c263ca134","matchmakingId":"5ac2b1a2fc3de50c263ca135","name":"test7"}],
		};
	  this.raf = this.raf.bind(this);

	}
	
raf(){
		fetch('https://los.ling.fr/matchmaking/participate?token='+this.props.tok, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					var koala=[];
					for (var i = 0; i < data["data"]["request"].length; i++) {
						koala.push(data.data.request[i]);
					}
					return koala;
				})
				.then(function(k) {
					this.setState({req:k});
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		
	}

  render() {
	
    return (
	<List component="nav">
			<ListItem >
			  <ListItemText primary="Demande recue" />
			  <Button onClick={this.raf}>rafraichir ??</Button>
			</ListItem>
		  <Divider />
			{this.state.req.map((a, idx) => 
				<ListItem button >
				  <ListItemText primary={a.name} />
					<AccepterDemande mid={a.matchmakingId} tok={this.props.tok}/>
				  
				</ListItem>


							 )}
			
		  </List>

    );
  }
}

export default withRouter(ListeDemande);



