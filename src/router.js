import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/containers/Welcome';
import Game from './components/containers/Game';
import Result from './components/containers/Result';


export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="init" >
        <Scene initial key="welcome" component={Welcome} hideNavBar={true} />
      </Scene>
      <Scene key="game">
        <Scene initial key="action" component={Game} hideNavBar={true} />
      </Scene>
      <Scene key="result">
        <Scene initial key="score" component={Result} hideNavBar={true} />
      </Scene>
    </Router>
  );
}
