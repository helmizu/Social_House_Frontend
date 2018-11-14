import React, { Component } from 'react';
//redux
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';

//router
import Root from './Root';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;