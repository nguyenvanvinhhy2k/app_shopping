export const orderTotalPrice = (state) => {
  let total = 0;
  state.orderDetails.forEach((item) => (total += item.price * item.quantity));
  return total;
};

export const cartItemCount = (state) => {
  return state.cart.length;
};

export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach(
    (item) => (total += item.product.originalPrice * item.quantity)
  );
  return total;
};

export const getFilterProducts = (state) => {
  return state.filterProducts;
};

export const user = (state) => {
  return state.user;
};
