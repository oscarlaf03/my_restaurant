const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => state.cartItems.reduce((acc, cartItem) => (cartItem.quantity * cartItem.price) + acc, 0).toFixed(2),
  cartQuantity: (state) => state.cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0),
};

export default getters;
