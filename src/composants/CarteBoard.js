import React, { Component } from 'react';
import sword from '../images/sword.jpg';
import shield from '../images/shield.jpg';


import Card, { CardHeader, CardMedia, CardContent } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';
import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui-next/Paper';
import ButtonBase from "material-ui-next/ButtonBase";





class CarteBoard extends Component {
	constructor(props) {
      super(props);
      this.state = { 
					 clef:this.props.clef,
					 choisie:this.props.choisie,
					};
  };
	


  render() {
    return (
	<ButtonBase>
      <Paper>
		<span><strong>{this.props.name}</strong></span>
		<Paper>
		<img width={80} height={104} src={this.props.photo}/>
		</Paper>
		<br/>
		<img  style={{width:'15px',height:'15px'}} src={sword} alt="épée zelda"/>
		<Typography  style={{display:'inline-block'}}component="span">{this.props.att}&emsp;&emsp;</Typography>
		<img  style={{width:'15px',height:'15px'}} src={shield} alt="bouclier zelda"/>
		<Typography style={{display:'inline-block'}}component="span">{this.props.def}</Typography>
	  </Paper>
	  </ButtonBase>
    );
  }
}

export default CarteBoard;
