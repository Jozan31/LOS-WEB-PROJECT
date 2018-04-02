import React, { Component } from 'react';
import sword from '../images/sword.jpg';
import shield from '../images/shield.jpg';


import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList';




class Main extends Component {
	

  render() {
    return (
		<div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around',overflow: 'hidden',}}>
		 <GridList style={{flexWrap: 'nowrap',transform: 'translateZ(0)',}} cols={4.5}>
        {this.props.cartes.map(c => (
          <GridListTile key={c.photo}>
            <img src={c.photo} alt={c.name} />
            <GridListTileBar
              title={c.name}
			  subtitle={"att:"+c.att+"   def:"+c.def}
            />
          </GridListTile>
        ))}
      </GridList>
	 </div>
    );
  }
}

export default Main;
