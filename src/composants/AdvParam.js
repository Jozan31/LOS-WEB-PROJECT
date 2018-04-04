import React, { Component } from 'react';


import Main from '../composants/Main'


import Grid from 'material-ui-next/Grid';







class AdvParam extends Component {
	constructor(props) {
		alert(JSON.stringify(props.para));
		super(props);
		this.state={
			
		}
	}
  render() {

    return (
      
		  <Grid container alignContent='space-around' alignItems='stretch'>
			
		  </Grid>
    );
  }
}

export default AdvParam;



