import React from "react";
import Admin from '../components/admin';
import Buyer from '../components/buyer';
import Producer from '../components/producer';
import { Switch, Route } from "react-router-dom";

function ContentRouter(props) {
  return (
    <Switch>
      <Route exact path="/admin" render={() => <Admin {...props} />} />
      <Route exact path="/" render={props => <Buyer/>} />
      <Route exact path="/producer" render={() => <Producer {...props} />} />
    </Switch>
  );
}

export default ContentRouter;