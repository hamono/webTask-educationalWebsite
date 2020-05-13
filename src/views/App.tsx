import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { all, signIn, signOn, notFound, playPage } from './Router';
import SignContext from './SigniIn/signInContext';
import IsSignOn from './SignOn/isSignOn';
import IsSignIn from './SigniIn/isSignIn';


export default function App() {
  const [success, setSuccess] = React.useState(false);
  const [isSignOn, setIsSignOn] = React.useState(null);
  const [isSignIn, setIsSignIn] = React.useState(null)

  return <SignContext.Provider value={{ success, setSuccess }}>
    <IsSignIn.Provider value={{ isSignIn, setIsSignIn}}>
      <IsSignOn.Provider value={{ isSignOn, setIsSignOn }}>
        <BrowserRouter>
          <Switch>
            <Route path="/home/" component={all} />
            <Route path='/signOn/' component={signOn} />
            <Route path='/signIn/' component={signIn} />
            <Route path='/notFind/' component={notFound} />
            <Route path='/playPage/' component={playPage} />
            <Route component={all} />
          </Switch>
        </BrowserRouter>
      </IsSignOn.Provider>
    </IsSignIn.Provider>
  </SignContext.Provider>
}
