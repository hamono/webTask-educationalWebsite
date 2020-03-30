import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { all, signIn, signOn } from './Router';

export default function App() {


  return <BrowserRouter>
  <Switch>
    <Route path="/home/" component={all} />
    <Route path='/signOn/' component={signOn} />
    <Route path='/signIn/' component={signIn} />
    <Route component={all} />
  </Switch>
  </BrowserRouter>
}



















