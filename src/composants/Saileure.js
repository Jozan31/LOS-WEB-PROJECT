import React, { Component } from 'react';

import dulz from '../images/dulz.mp3';




class Saileure extends Component {
	

  render() {
    return (
	<div>
     <audio src={dulz}  autoPlay  />
	</div>
    );
  }
}

export default Saileure;
