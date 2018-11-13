import React, { Component } from 'react';
import BottomNav from './BottomNav';
//redux
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <BottomNav />
      </Provider>
    );
  }
}

export default App;