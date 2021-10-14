/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Header from './src/components/Header/Header';
import Cart from './src/components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {

  return (
    <Provider store={store()}>
      <Header />
      <Cart />
    </Provider>
  );
};

const styles = StyleSheet.create({
})

export default App;
