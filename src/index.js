import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import reducers from './reducers';
import { AUTHENTICATED } from './actionCreators/auth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/homepage" component={Homepage} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
