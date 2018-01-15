import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import reducers from './reducers';
import { AUTHENTICATED } from './actionCreators/auth';
import secured from './components/auth/secured';

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
          <div className="container">
              <Navbar />
          </div>
          <div className="container">
              <Route exact path="/" component={LandingPage} />
              <Route path="/signin" component={Signin} />
              <Route path="/signout" component={secured(Signout)} />
              <Route path="/homepage" component={secured(Homepage)} />
          </div>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
