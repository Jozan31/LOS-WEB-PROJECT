import React, { Component } from 'react';
import coeur from '../images/coeur.png';


import Paper from 'material-ui-next/Paper';
import Grid from 'material-ui-next/Grid';
import Badge from 'material-ui-next/Badge';




class Vie extends Component {
	constructor(props) {
      super(props);
      this.state = { vie:150,
					};
  };
	

  render() {
    return (
		<Badge badgeContent={this.state.vie} color="secondary" style={{margin: 'auto auto'}}>
		
          <img src={coeur} alt="vie" style={{margin: 'auto auto',height:this.props.taille,width:this.props.taille}}/>
        </Badge>
			

    );
  }
}

export default Vie;
