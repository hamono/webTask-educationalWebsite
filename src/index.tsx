import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import HomeLoading from './views/comonent/HomeLoading'
const App = React.lazy(() => import('./views/App'))
ReactDOM.render(
  <React.Suspense fallback={<HomeLoading />}>
    <App />
  </React.Suspense>
  , document.getElementById('root'));


registerServiceWorker();
