import React from 'react';
import { render } from '@testing-library/react-native';
import ConfigureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './Header';

jest.mock('react-native-responsive-screen')


describe('When invoked a Header component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        user : [{
            cart: 'items'
        }]
    })
    test('Should render the header page', () => {
     const header = render(<Provider store={store}><Header /></Provider>)
     expect(header).toMatchSnapshot()
 })
})