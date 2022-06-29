let cart = window.localStorage.getItem("cart");
let user = window.localStorage.getItem("user");
let userId = window.localStorage.getItem("userId");

export default {
  products: [],
  product: {},
  category: [],
  favourites: [],
  categories: [],
  productRelation: [],
  categoryRelation: [],
  orderDetails: [],
  cart: cart ? JSON.parse(cart) : [],
  filterProducts: [],
  user: user ? JSON.parse(user) : "",
  useId: userId ? JSON.parse(userId) : "",
};
