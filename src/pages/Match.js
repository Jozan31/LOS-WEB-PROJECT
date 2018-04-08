import React, { Component } from 'react';
import '../App.css';
import jb from '../images/jb.jpg';
import streaker from '../images/streaker.jpg';
import a from '../images/a.jpg';
import b from '../images/b.jpg';
import c from '../images/c.jpg';
import d from '../images/d.jpg';
import e from '../images/e.jpg';
import mick from '../images/mick.jpg';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Carte from '../composants/Carte'
import CarteBoard from '../composants/CarteBoard'
import Saileure from '../composants/Saileure'


import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui-next/Card';
import Typography from 'material-ui-next/Typography';
import Paper from 'material-ui-next/Paper';
import ButtonBase from "material-ui-next/ButtonBase";
import Badge from 'material-ui-next/Badge';
import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList';
import AppBar from 'material-ui-next/AppBar';
import Toolbar from 'material-ui-next/Toolbar';
import Divider from 'material-ui-next/Divider';




class Match extends Component {
	
	constructor(props) {
		super(props);
		
		this.state={
			adversaire:{"name":"ytrter","id":"","deck":16,"hp":150,"hand":4,"board":[],"turn":true,"cardPicked":false},
			moi:{"name":"amerigo","id":"5ac46dee3b0c5824e64c025f","deck":16,"hp":150,"hand":[{"key":"Ezreal","name":"Ezreal","stats":{"armor":21.88,"armorperlevel":3.5,"attackdamage":55.66,"attackdamageperlevel":2.41,"attackrange":550,"attackspeedoffset":0,"attackspeedperlevel":2.8,"crit":0,"critperlevel":0,"hp":484.4,"hpperlevel":80,"hpregen":6.424,"hpregenperlevel":0.55,"movespeed":325,"mp":360.6,"mpperlevel":42,"mpregen":8.092,"mpregenperlevel":0.65,"spellblock":30,"spellblockperlevel":0},"title":"Explorateur prodigue"}],"board":[],"turn":true,"cardPicked":false},
			tok:props.location.state.params.token,
			refresh:'fin Tour',
			tt:'',
			atta:'',
			yop:false,
			
		}
		console.log(JSON.stringify(this.state.moi));
			console.log(JSON.stringify(this.state.adversaire));
		fetch('https://los.ling.fr/match/getMatch?token='+props.location.state.params.token, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					
					if(typeof data.data.player1.hand=="number"){
						this.setState({moi:data.data.player2,adversaire:data.data.player1,refresh:"refresh"});
					}
					else{
						this.setState({moi:data.data.player1,adversaire:data.data.player2});

					}
					if(this.state.moi.turn){this.setState({tt:'T TON TOUR'});}
					else{this.setState({tt:'C PAS Ton Tour'});}
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
			console.log(JSON.stringify(this.state.moi));
			console.log(JSON.stringify(this.state.adversaire));

			
			this.maj=this.maj.bind(this);
			this.piocher=this.piocher.bind(this);
			this.finTour=this.finTour.bind(this);
			this.mettreOnBoard=this.mettreOnBoard.bind(this);
			this.rattattack=this.rattattack.bind(this);
			this.defdef=this.defdef.bind(this);
	}
	
	maj(){
		alert('maj');
		fetch('https://los.ling.fr/match/getMatch?token='+this.state.tok, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if(typeof data.data.player1.hand=="number"){
						this.setState({moi:data.data.player2,adversaire:data.data.player1});
					}
					else{
						this.setState({moi:data.data.player1,adversaire:data.data.player2});
					}
					if(this.state.moi.turn){this.setState({tt:"T Ton Tour"});}
					else{this.setState({tt:"C PAS Ton Tour"});}
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
	}
	piocher(){
		if(this.state.moi.turn){
		fetch('https://los.ling.fr/match/pickCard?token='+this.state.tok, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.text()})
				.then(function(data) {
					this.maj();
					alert(data);
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		}
	}
	finTour(){
		if(this.state.moi.turn){
		fetch('https://los.ling.fr/match/endTurn?token='+this.state.tok, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.text()})
				.then(function(data) {
					this.maj();
					alert(data);
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
			this.setState({refresh:"refresh"});
		}
		else{this.maj();if(this.state.moi.turn){this.setState({refresh:"fin Tour"});}}
	}
	mettreOnBoard(k){
		if(this.state.moi.turn){
			/*
			let m=this.state.moi;
			for (var i=0; i< m.hand.length; i++){
				if(m.hand[i].key==k){
					m.board.push(m.hand[i]);
					m['hand'].splice(i,1);
					this.setState({moi:m});
					console.log(this.state.moi);
				}
			}
			*/
			fetch('https://los.ling.fr/match/playCard?token='+this.state.tok+'&card='+k, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.text()})
				.then(function(data) {
					this.maj();
					alert(data);
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
			
		}
				alert('dla');

	}
	
	rattattack(a){
		if(this.state.atta!=a){
			alert('attaquant chjoisie');
			this.setState({atta:a,yop:true});
		}
		else{alert('attaquant plus choisie');this.setState({atta:'',yop:false});}
	}
	defdef(a){
		if(this.state.yop){
			fetch('https://los.ling.fr/match/attack?card='+this.state.atta+'&ennemyCard='+a+'&token='+this.state.tok, {
				method: 'get'}, {mode: 'cors'}
				)
				.then(function(resp){return resp.text()})
				.then(function(data) {
					this.maj();
					alert(data);
					
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
		}
		
	}
  render() {

    return (
      <Grid container>
	  <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {this.state.tt} 
          </Typography>

        </Toolbar>
      </AppBar>
	  <Saileure/>
		<Grid md={1}></Grid>
		<Grid >
			<Paper>
				<Typography>{this.state.adversaire.name}</Typography>
				<Typography>PV: {this.state.adversaire.hp}</Typography>
				<Typography>Deck: {this.state.adversaire.deck}</Typography>
				<Typography>Main: {this.state.adversaire.deck}</Typography>
				
			</Paper>
		</Grid>
		
		{this.state.adversaire.board.map(h => (
							<Paper onClick={()=>this.defdef(h.key)}>
							<CarteBoard name={h.name} photo={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+h.key+'_1.jpg'} def={h.stats.attackdamage} att={h.stats.armor} />
							</Paper>
						))}
		
		<Grid md={12} style={{height:50}}></Grid>
		<Divider/>
		<Grid md={12} style={{height:50}}></Grid>
			<CarteBoard name='streaker' photo={streaker} def={0} att={0} />
			<CarteBoard name='streaker' photo={streaker} def={0} att={0} />
			<CarteBoard name='streaker' photo={streaker} def={0} att={0} />
			{this.state.moi.board.map(h => (
							<Paper onDoubleClick={()=>this.rattattack(h.key)}>
							<CarteBoard name={h.name}  photo={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+h.key+'_1.jpg'} def={h.stats.attackdamage} att={h.stats.armor} />
							</Paper>
						))}
		<Grid container alignContent='space-around' alignItems='stretch'>
			<Grid item md={2}>
				<Badge badgeContent={this.state.moi.hp} color="secondary" style={{margin: 'auto auto'}}>
					<Paper style={{width:200}}>
						<Typography align='center'style={{height:'70%',width:'70%',fontSize:90,textAlign:'center',margin:'auto auto'}}>{this.state.moi.hp}</Typography>
					</Paper>
				</Badge>
			</Grid>
			<Grid item md={7}>
				<Paper >
					<div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around',overflow: 'hidden',}}>
						<GridList style={{flexWrap: 'nowrap',transform: 'translateZ(0)',}} cols={6}>
						{this.state.moi.hand.map(c => (
							  <GridListTile onDoubleClick={()=>this.mettreOnBoard(c.key)}key={c.key} style={{height:145}}>
								<img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+c.key+'_1.jpg'} alt={c} />
								<GridListTileBar
								  title={c.key}
								  subtitle={"att:"+c.stats.attackdamage+" def:"+c.stats.armor}
								/>
							  </GridListTile>
						))}
					  </GridList>
					 </div>
				</Paper>
			</Grid>
			<Grid item md={2}>
				<Paper onClick={this.piocher}>
					<Badge badgeContent={this.state.moi.deck} color="secondary">
					  <img src={jb} style={{height:'70%',width:'70%'}} alt="justin B"/>
					</Badge>
				</Paper>
			</Grid>
					<Button onClick={this.finTour}>{this.state.refresh}</Button>

		  </Grid>
      </Grid>
    );
  }
}

export default Match;



