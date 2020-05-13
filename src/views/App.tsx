import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { all, signIn, signOn, notFound} from './Router';
import SignContext from './SigniIn/signInContext';
import PlayPage from './PlayPage';

function play(){
  return <PlayPage />
}

export default function App() {
  const [success, setSuccess] = React.useState(false)

  return <SignContext.Provider value={{ success, setSuccess }}>
    <BrowserRouter>
      <Switch>
        <Route path="/home/" component={all} />
        <Route path='/signOn/' component={signOn} />
        <Route path='/signIn/' component={signIn} />
        <Route path='/notFind/' component={notFound} />
        <Route path='/playPage/' component={play}/>
        <Route component={all} />
      </Switch>
    </BrowserRouter>
  </SignContext.Provider>
}
