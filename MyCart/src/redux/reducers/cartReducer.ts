import actionTypes from '../actions/actionTypes';

function cartReducer(cart : any = [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return action.items

    case actionTypes.DELETE_FROM_CART:
      const itemIndexDelete = cart
      .findIndex((item: any) => action.moto._id === item._id);
  
    if (cart[itemIndexDelete].quantity > 1) {
      cart[itemIndexDelete] = {
        ...cart[itemIndexDelete],
        quantity: cart[itemIndexDelete].quantity - 1
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