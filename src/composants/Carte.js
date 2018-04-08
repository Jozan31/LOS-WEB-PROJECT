import React, { Component } from 'react';
import sword from '../images/sword.jpg';
import shield from '../images/shield.jpg';


import ButtonBase from "material-ui-next/ButtonBase";
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';




class Carte extends Component {
	constructor(props) {
      super(props);
      this.state = { bord:{},
					 clef:this.props.clef,
					 choisie:this.props.choisie,
					 sty:'solide red 20px'
					};
	this.selectio=this.selectio.bind(this);
  };
	
selectio(){
	
	this.setState({choisie:true,sty:'solide yellow 20px'});
}	

  render() {
    return (
	<ButtonBase onClick={this.selectio}>
      <Card className='carte' style={{border:this.state.sty}}>
          <CardHeader
            title={this.props.name}
          />
          <CardMedia 
			className='ImageCarte'
			image={this.props.photo}
          />
          <CardContent>
			<img  className="AttDef" src={sword} alt="épée zelda"/>
			<Typography  style={{display:'inline-block'}}component="span">{this.props.att}&emsp;&emsp;</Typography>
			<br/>
			<img  className="AttDef" src={shield} alt="épée zelda"/>
			<Typography style={{display:'inline-block'}}component="span">{this.props.def}</Typography>
          </CardContent>
          
        </Card>  
        </ButtonBase>

    );
  }
}

export default Carte;
