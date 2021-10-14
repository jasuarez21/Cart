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
