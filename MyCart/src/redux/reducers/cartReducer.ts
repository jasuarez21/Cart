import actionTypes from '../actions/actionTypes';

function cartReducer(cart : any = [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return action.items

    case actionTypes.DELETE_FROM_CART:
      const itemIndexDelete = cart.data?.stores.data[0].relationships.items.findIndex((item: any) => action.item === item.attributes.brand);

      if (cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity > 1) {
        cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity = 
        (cart.data.stores.data[0].relationships.items[itemIndexDelete].attributes.quantity - 1)
        return {...cart};
      }
      cart.data.stores.data[0].relationships.items.splice(cart.data.stores.data[0].relationships.items.indexOf(action.item), 1);
    return {...cart};

    case actionTypes.UPDATE_CART:
      return [];
    default:
      return cart;
  }
}

export default cartReducer;