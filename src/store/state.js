let cart = window.localStorage.getItem("cart");
let user = window.localStorage.getItem("user");
let userId = window.localStorage.getItem("userId");

export default {
  products: [],
  product: {},
  category: [],
  categories: [],
  productRelation: [],
  categoryRelation: [],
  orderDetails: [],
  cart: cart ? JSON.parse(cart) : null,
  filterProducts: [],
  user: user ? JSON.parse(user) : null,
  useId: userId ? JSON.parse(userId) : null,
};
