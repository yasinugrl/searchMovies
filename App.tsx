import React, { useEffect } from 'react';
import Router from './src/Router';
import { Provider } from 'react-redux';
console.disableYellowBox = true;
import store from './src/reducers/Store';

const App = () => {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  )
}
export default App;