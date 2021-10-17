import React from 'react';
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


export default App;
