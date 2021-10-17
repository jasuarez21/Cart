import { render } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Cart from './Cart';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Cart component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        cart : [{
            items: 'Ron Barcelo'
        }]
    })
    beforeEach(() => {
        jest.spyOn(actions, 'loadCart').mockReturnValueOnce({ type: actionTypes.LOAD_CART });
        dispatch = jest.fn();
    })
    test('Should render the cart page', () => {
        const cart = render(<Provider store={store}><Cart /></Provider>)
        expect(cart).toMatchSnapshot()
    })
})