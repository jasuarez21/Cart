import { loadCart, deleteFromCart } from './actionCreators';
import axios from 'axios';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('When invoked a loadCart function', () => {
    test('Should call a dispatch function ', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce('item');
        await loadCart()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})

test('should dispatch ERROR', async () => {
    axios.get.mockRejectedValue({data: 'noitems'});
    const dispatch = jest.fn();
    await loadCart()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ERROR,
    });
  });

  describe('When invoked a deleteFromCart function', () => {
    test('Should return and object with type and data', async () => {
        const funcResult = deleteFromCart('josep');
        const result = {
            type: actionTypes.DELETE_FROM_CART,
            item: 'josep'

        }
        expect(result).toEqual(funcResult);
    })
})