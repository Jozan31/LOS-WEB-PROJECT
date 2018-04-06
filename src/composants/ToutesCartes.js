import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';

import streaker from '../images/streaker.jpg';

import Carte from '../composants/Carte'


import Grid from 'material-ui-next/Grid';
import AppBar from 'material-ui-next/AppBar';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';
import ButtonBase from "material-ui-next/ButtonBase";
import Button from "material-ui-next/Button";
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Divider from 'material-ui-next/Divider';



class ToutesCartes extends Component {
	constructor(props) {
      super(props);
      this.state = { arrete:true,
					cartes:[{name:'Streaker',att:'200',def:'un poil de cul',key:'Streaker'}],
					compte:20,
					deck:[],
					bor:{},
					env:true,
					dec:'',
					};

		  this.ajouterCarte = this.ajouterCarte.bind(this);
		  this.readyToGO = this.readyToGo.bind(this);

  };



ajouterCarte(k){
	let dd=this.state.deck;
	let cc=this.state.compte;
	if(dd.includes(k)){
		dd.splice((dd.indexOf(k)),1);
		cc+=1;
		this.setState({compte:cc,
					deck:dd,env:true});
	}
	else if(this.state.compte!=0){
		dd.push(k);
		cc-=1;
		this.setState({compte:cc,
					deck:dd});
	}
	if (cc==0){
		var dec=[];
		for (var i = 0; i < dd.length; i++) {
			dec.push({key:dd[i]});
		}
		dec=JSON.stringify(dec);
		alert(dec);
		this.setState({dec:dec,env:false});


	}
}



tutti(){

	if(this.state.arrete){
	fetch('https://los.ling.fr/cards/getAll', {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {

					var koala=[];
					for (var i = 0; i < data["data"].length; i++) {
						console.log(data["data"][i]["name"]+" "+data["data"][i]["info"]["attack"]+" "+data["data"][i]["info"]["defense"]);
						koala.push({name:data["data"][i]["name"],att:data["data"][i]["info"]["attack"],def:data["data"][i]["info"]["defense"],clef:data["data"][i]["key"]});

					}
					return koala
			})
			.then(function(d){this.setState({cartes:d});}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		this.setState({arrete:false,});
	}
}

readyToGo(){
	/*
	fetch('https://los.ling.fr/match/initDeck?deck='+this.state.dec+'&token='+this.props.tok, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if(data.status=='ok'){*/
						alert('deck confectionné');
						this.props.history.push('/Match',{params:{ token:this.props.tok, advName:this.props.advName,advId:this.props.advId}});

					/*}
					else{alert('nope :'+JSON.stringify(data));}

			})
			.catch(function(error) {
				console.log(error);
			});*/
}
  render() {

    return (
	<Grid>
		<AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Constituer votre deck , encore {this.state.compte}
          </Typography>
        </Toolbar>
      </AppBar>
	  <Grid md={12}style={{height:100}}></Grid>


		{this.tutti()}
		<Grid md={10}>
		{this.state.cartes.map((m, idx) =>
				<ButtonBase onClick={()=>this.ajouterCarte(m.clef)} >
				<Carte key={idx} choisie={false} photo={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+m['clef']+'_1.jpg'} name={m['name']} clef={m['clef']}att={m['att']} def={m['def']}/>
				</ButtonBase>

							 )}
		</Grid>
		<Grid md={1}>
	  <List component="nav" style={{position: 'fixed',overflow: 'auto','top':50,right:0,height:'400px'}}>
			<ListItem >
			  <ListItemText primary="Mon Deck" />
			</ListItem>
		  <Divider />
			{this.state.deck.map((a, idx) =>
				<ListItem button >
				  <ListItemText onClick={()=>this.ajouterCarte(a)} primary={a} />

				</ListItem>


							 )}

		  </List>
		  </Grid>
	<Button disabled={this.state.env} onClick={this.readyToGo} color='secondary'style={{position:'fixed',bottom:10, right:10, width:250,height:100,fontSize:42}}><strong >JOUER</strong></Button>
    </Grid>

    );
  }
}

export default withRouter(ToutesCartes);
