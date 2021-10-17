import cartReducer from './cartReducer';
import actionTypes from '../actions/actionTypes';

describe('when invoked a cartReducer func', () => {
    test('should return an array', () => {
      const action = {
        type: actionTypes.LOAD_CART,
        items: { id: 1, items: 'Ron barcelo' }
      };
      const cart = [];
      const result = cartReducer(cart, action);
      expect(result).toEqual({ id: 1, items: 'Ron barcelo' });
    })
    test('should return an array in delete to cart', () => {
        const action = {
          type: actionTypes.DELETE_FROM_CART,
          item: 'Vodka'
        };
        const cart = {
            data: {
                stores: {
                    data: [{
                        relationships: {
                            items:[
                                {
                                    attributes: {
                                        brand: 'Vodka',
                                        quantity: 1
                                    }
                                }
                            ]
                        }
                    }
                ]
                }
            }
        };
        const result = cartReducer(cart, action);
        expect(result).toEqual({"data": {"stores": {"data": [{"relationships": {"items": []}}]}}});
      });
})