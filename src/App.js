import React, { Component } from 'react';
import './App.css';

import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';

import Connexion from './composants/Connexion';
import Inscription from './composants/Inscription';
import  Accueil from './pages/Accueil';
import  Choix from './pages/Choix';
import RechercheAdv from './pages/RechercheAdv';
import Match from './pages/Match';

import { BrowserRouter } from 'react-router-dom';
import { Route, Root } from 'react-router-dom';


class App extends Component {
  render() {
    return (
	<BrowserRouter >
      <div>
      <Route exact={true} path="/" component={Accueil} />
	  <Route path="/choix" component={Choix} />
	  <Route path="/RechercheUnBro" component={RechercheAdv}/>
	  <Route path="/Match" component={Match}/>
		</div>
	  </BrowserRouter>
    );
  }
}

export default App;
