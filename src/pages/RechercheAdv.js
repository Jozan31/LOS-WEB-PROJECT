import React, { Component } from 'react';
import '../App.css';

import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Divider from 'material-ui-next/Divider';



import { Link } from 'react-router-dom'


class RechercheAdv extends Component {
	constructor(props) {
		
		super(props);
		this.state={
			listAdv:["Olive","Tom","Mark Landers","Le petit chauve (mais je ne me souviens plus comment il s'appelle)"],
		}
	}


  render() {
    return (
      <Grid container>
		 <List component="nav">
			<ListItem >
			  <ListItemText primary="Liste Adversaire" />
			</ListItem>
		  <Divider />
			{this.state.listAdv.map((a, idx) => 
				<ListItem button >
				  <ListItemText primary={a} />
				  
				  <Link to='/Match'>
						<Button >
						  Affronter
						</Button>
					</Link>
				</ListItem>

							 )}
			
		  </List>
		  
      </Grid>
    );
  }
}

export default RechercheAdv;



