import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Data from '../Data/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/data" component={ Data }/>
    </Switch>
  );
}

export default Routes;
