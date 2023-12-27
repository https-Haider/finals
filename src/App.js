import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dragons from './components/Dragon';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Space Travel</h1>
          <Switch>
            <Route path="/dragons" component={Dragons} />
            { }
            <Route path="/" exact>
              <p>Dragons</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
