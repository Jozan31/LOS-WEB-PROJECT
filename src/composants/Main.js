import React, { Component } from 'react';
import sword from '../images/sword.jpg';
import shield from '../images/shield.jpg';


import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList';
import Paper from 'material-ui-next/Paper';




class Main extends Component {
	

  render() {
    return (
		<Paper>
		<div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around',overflow: 'hidden',}}>
		 <GridList style={{flexWrap: 'nowrap',transform: 'translateZ(0)',}} cols={5}>
        {this.props.cartes.map(c => (
          <GridListTile key={c.photo} >
            <img src={c.photo} alt={c.name} />
            <GridListTileBar
              title={c.name}
			  subtitle={"att:"+c.att+"   def:"+c.def}
            />
          </GridListTile>
        ))}
      </GridList>
	 </div>
	 </Paper>
    );
  }
}

export default Main;
