import actionTypes from '../actions/actionTypes';

function cartReducer(cart : any = [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return action.items

    case actionTypes.DELETE_FROM_CART:
      const itemIndexDelete = cart.data?.stores.data[0].relationships.items
      .findIndex((item: any) => action.item.brand === item.attributes.brand);
  
    if (cart[itemIndexDelete].quantity > 1) {
      console.log(cart)
      cart[itemIndexDelete] = {
        ...cart[itemIndexDelete],
        quantity: cart[itemIndexDelete].attributes.quantity - 1
      };
      return [...cart];
    }
    cart.splice(cart.indexOf(action.item), 1);
    return [...cart];

    case actionTypes.UPDATE_CART:
      return [];
    default:
      return cart;
  }
}

export default cartReducer;