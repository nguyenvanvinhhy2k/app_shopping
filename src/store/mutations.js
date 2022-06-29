export const SET_ORDER_DETAIL_ID = (state, orderDetails) => {
  state.orderDetails = orderDetails;
};

export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const SET_PRODUCT_RELATION = (state, product) => {
  state.productRelation = product;
};

export const SET_CATEGORY = (state, category) => {
  state.category = category;
};

export const SET_CATEGORY_RELATION = (state, category) => {
  state.categoryRelation = category;
};

export const SET_CATEGORIES = (state, categories) => {
  state.categories = categories;
};

export const SET_FAVOURIES = (state, favourites) => {
  state.favourites = favourites;
};
export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    localStorage.setItem("cart", JSON.stringify(state.cart));
    return;
  } else {
    state.cart.push({ product, quantity });
    localStorage.setItem("cart", JSON.stringify(state.cart));
    console.log(state.cart);
  }
};

export const REMOVE_CART = (state, item) => {
  let index = state.cart.indexOf(item);
  state.cart.splice(index, 1);
  window.localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const SET_FILTER_PRODUCTS = (state, products) => {
  state.filterProducts = products;
};

export const USER = (state, user) => {
  state.user = user;
};

export const USER_ID = (state, id) => {
  state.userId = id;
};
