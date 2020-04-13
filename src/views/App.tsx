import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { all, signIn, signOn } from './Router';
import SignContext from './SigniIn/signInContext';

export default function App() {
  const [success, setSuccess] = React.useState(true)

  return <SignContext.Provider value={{ success, setSuccess }}>
    <BrowserRouter>
      <Switch>
        <Route path="/home/" component={all} />
        <Route path='/signOn/' component={signOn} />
        <Route path='/signIn/' component={signIn} />
        <Route component={all} />
      </Switch>
    </BrowserRouter>
  </SignContext.Provider>
}



















