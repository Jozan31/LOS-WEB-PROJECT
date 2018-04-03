import React, { Component } from 'react';

import Carte from '../composants/Carte'


import Grid from 'material-ui-next/Grid';




class ToutesCartes extends Component {
	constructor(props) {
      super(props);
      this.state = { arrete:true,
					cartes:[{name:'Streaker',att:'200',def:'un poil de cul'}],
					};

  };
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
						koala.push({name:data["data"][i]["name"],att:data["data"][i]["info"]["attack"],def:data["data"][i]["info"]["defense"],photo:data["data"][i]["key"]});

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


  render() {
	
    return (
	<Grid>
		{this.tutti()}
		{this.state.cartes.map((m, idx) => 
				<Carte key={idx} photo={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+m['photo']+'_1.jpg'} name={m['name']} att={m['att']} def={m['def']}/>
		
							 )}
    </Grid>

    );
  }
}

export default ToutesCartes;



