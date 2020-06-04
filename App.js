/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Drawer from './src/navigation/drawer';
import Loader from './src/shared/loader';
import {Provider} from 'react-redux'
import store from './src/reducer/store'

const App = () => {
  return (
    <Provider store={store}>
      <Drawer />
    </Provider>
  );
};

export default App;
