import axios from 'axios';
import actionTypes from './actionTypes';
import { Dispatch } from 'redux';
interface deleteAction {
  type: string,
  item: string
}

export function loadCart() {
    return async (dispatch: Dispatch) => {
        try {   
        const {data} = await axios.get('http://demo0915487.mockable.io/cart');
        dispatch({
          type: actionTypes.LOAD_CART,
          items: data
        });
      } catch (error) {
        dispatch({
          type: actionTypes.ERROR,
        });
      }
    }
  }
  
  export function deleteFromCart(item: string): deleteAction {
    return {
      type: actionTypes.DELETE_FROM_CART,
      item,
    };
  }