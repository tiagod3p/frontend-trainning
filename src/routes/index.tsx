import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Partners from '../pages/partners';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Partners} />
  </Switch>
);
export default Routes;
