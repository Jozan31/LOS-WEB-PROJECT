import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';

import Button from 'material-ui-next/Button';




class AccepterDemande extends Component {
	constructor(props) {
      super(props);
	  this.state={
					
				}
	  this.accept = this.accept.bind(this);
  };
accept(){
	fetch('https://los.ling.fr/matchmaking/acceptrequest?matchmakingId='+this.props.mid+'&token='+this.props.tok, {
		method: 'get'} 
				)
				.then(function(resp){return resp.json()})
				.then(function(data) {
					alert(JSON.stringify(data));
					this.props.history.push('/AttentionUnMartienSEchappe',{params:{ token:this.props.tok, advName:data.data.player2.name,advId:data.data.player2.id}});
					
	
				}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
}
  render() {
    return (
		<Button onClick={this.accept}>Accepter</Button>
    );
  }
}

export default withRouter(AccepterDemande);
