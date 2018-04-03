import React, { Component } from 'react';
import jb from '../images/jb.jpg';


import ButtonBase from "material-ui-next/ButtonBase";
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';
import Paper from 'material-ui-next/Paper';
import Badge from 'material-ui-next/Badge';




class Deck extends Component {
	constructor(props) {
      super(props);
      this.state = { nbCartes:16,
					};
  };
	

  render() {
    return (
	<ButtonBase>
      <Paper >
		<Badge badgeContent={this.state.nbCartes} color="secondary">
          <img src={jb} alt="justin B"/>
        </Badge>
			
	  </Paper>
     </ButtonBase>

    );
  }
}

export default Deck;
