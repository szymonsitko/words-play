import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/containers/Welcome';
import Game from './components/containers/Game';


export const RouterComponent = () => {
  return (
    <Router>

    <Scene key="init" >
      <Scene initial key="welcome" component={Welcome} hideNavBar={true} />
    </Scene>

    <Scene key="game">
      <Scene initial key="action" component={Game} hideNavBar={true} />
    </Scene>

    </Router>
  );
}
