import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { All } from './Router';

export default function App() {


  return <BrowserRouter>
  <Switch>
    <Route path="/home/" component={All} />
    <Route component={All} />
  </Switch>
  </BrowserRouter>
}



















