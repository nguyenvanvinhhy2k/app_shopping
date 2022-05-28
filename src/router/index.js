import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProductDetail from "../components/ProductDetail.vue";
import Category from "../components/Category.vue";
import Cart from "../components/Cart.vue";
import Contact from "../components/Contact.vue";
import Info from "../components/Info.vue";
import NewDetail from "../components/NewDetail.vue";
import New from "../components/New.vue";
import Registor from "../components/Registor.vue";
import Login from "../components/Login.vue";
import CartOder from "../components/CartOder.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/cart-oder",
    name: "CartOder",
    component: CartOder,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/newdetail",
    name: "NewDetail",
    component: NewDetail,
  },
  {
    path: "/new",
    name: "New",
    component: New,
  },
  {
    path: "/registor",
    name: "Registor",
    component: Registor,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes,
});

export default router;
