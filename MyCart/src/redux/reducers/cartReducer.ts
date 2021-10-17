import { Action } from '../../types/Action';
import { Item } from '../../types/Item';
import actionTypes from '../actions/actionTypes';

function cartReducer(cart : any = [], action: Action) {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return action.items

    case actionTypes.DELETE_FROM_CART:
      const itemIndexDelete = cart.data?.stores.data[0].relationships.items.findIndex((item: Item) => action.item === item.attributes.brand);

      if (cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity > 1) {
        cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity = 
        (cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity - 1)
        return {...cart};
      }
      cart.data.stores.data[0].relationships.items.splice(cart.data.stores.data[0].relationships.items.indexOf(action.item), 1);
    return {...cart};
    
    default:
      return cart;
  }
}

export default cartReducer;