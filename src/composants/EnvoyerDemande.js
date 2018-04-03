import React, { Component } from 'react';

import Button from 'material-ui-next/Button';




class EnvoyerDemande extends Component {
	constructor(props) {
      super(props);
	  this.state={
					message:'Affronter ??',
					color:'default',
					dis:false
				}
	  this.sendReq = this.SendReq.bind(this);
  };
SendReq(){
	fetch('https://los.ling.fr/matchmaking/request?matchmakingId='+this.props.mid+'&token='+this.props.tok, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					if (data.status=='ok'){
						this.setState({message:'demande en cours...',color:'primary',dis:true});
						
					}
	
				}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
}
  render() {
    return (
		<Button onClick={this.sendReq} disabled={this.state.dis} color={this.state.color}>{this.state.message}</Button>
    );
  }
}

export default EnvoyerDemande;
