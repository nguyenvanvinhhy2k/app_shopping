<template>
  <header class="header">
    <div class="grid wide">
      <div class="header-container row">
        <div class="header-menu-bar col l-0 m-4 c-4">
          <a
            class="header-menu-bar__icon btn-modal-active"
            data-modal="menu-mobile"
          >
            <i class="ti-menu"></i>
          </a>
        </div>
        <div class="header-logo col l-3 m-4 c-4">
          <div class="header-logo-wrap">
            <a class="header-logo-link" style="margin: 0 auto">
              <img
                src="/fontend/asset/images/source/cipershop.jpg"
                class="header-logo-link-img"
              />
            </a>
          </div>
        </div>

        <div class="header-menu col l-6 m-0 c-0">
          <ul class="header-menu__list">
            <li class="header-menu__list-items header-menu__list-items--acrive">
              <router-link :to="{ name: 'Home' }">
                <a class="header-menu__list-items-link">Trang Chủ</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <a class="header-menu__list-items-link">Cửa Hàng</a>

              <ul class="header-submenu__list">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  class="header-submenu__list-items header-submenu__list-items--active"
                >
                  <router-link
                    :to="{ name: 'Category', params: { id: category.id } }"
                  >
                    <a
                      @click="moveCategoryId(category.id)"
                      class="header-submenu__list-items-link"
                      >{{ category.name }}</a
                    >
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'Info' }">
                <a class="header-menu__list-items-link">Giới Thiệu</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'New' }">
                <a class="header-menu__list-items-link">Tin Tức</a>
              </router-link>
            </li>

            <li class="header-menu__list-items">
              <router-link :to="{ name: 'Contact' }">
                <a class="header-menu__list-items-link">Liên Hệ</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="header-group-btn col l-3 m-4 c-4">
          <ul class="header-group-btn__list">
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-search btn-modal-active"
                data-modal="search"
              >
                <i
                  @click="isSearch = !isSearch"
                  class="header-group-btn__list-items-link-icon ti-search"
                ></i>
              </a>
            </li>
            <li class="header-group-btn__list-items">
              <router-link
                :to="{ name: 'Login' }"
                class="header-group-btn__list-items-link header-group-btn__list-items-auth btn-modal-active"
                data-modal="auth"
              >
                <i class="header-group-btn__list-items-link-icon ti-user"></i>
              </router-link>
            </li>
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-like btn-modal-active"
                data-modal="like"
              >
                <i
                  @click="isLike = !isLike"
                  class="header-group-btn__list-items-link-icon ti-heart"
                ></i>
                <span class="header-group-btn__list-items-like-count">{{
                  countFavouries
                }}</span>
              </a>
            </li>
            <li class="header-group-btn__list-items">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-cart btn-modal-active"
                data-modal="cart"
              >
                <router-link :to="{ name: 'Cart' }">
                  <i
                    @click="moveCartscrollTo()"
                    class="header-group-btn__list-items-link-icon ti-shopping-cart"
                  ></i>
                </router-link>
                <span class="header-group-btn__list-items-cart-count">{{
                  cartCount
                }}</span>
              </a>
            </li>
            <!-- <li class="header-group-btn__list-items" v-if="user">
              <a
                class="header-group-btn__list-items-link header-group-btn__list-items-cart btn-modal-active"
              >
                <a href="javascript:void(0)" @click="logout">
                  <i
                    class="header-group-btn__list-items-link-icon ti-shift-left"
                  ></i>
                </a>
              </a>
            </li> -->
            <li
              style="
                font-size: 12px;
                margin-left: 17px;
                cursor: pointer;
                position: relative;
              "
              class="header-group-btn__list-items"
              v-if="(user = !null)"
            >
              <p style="width: 127px">{{ user }}</p>
              <ul class="ul">
                <li class="li">
                  <router-link to="/cart-oder" class="oder"
                    >Đơn mua
                  </router-link>
                </li>
                <li class="li">
                  <a @click="logout" class="">Đăng xuất</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class=""
      style="
        position: fixed;
        z-index: 998;
        width: 35%;
        top: 0;
        right: 0;
        background: aliceblue;
      "
      v-if="isSearch === true"
    >
      <form action="" class="modal-search__form">
        <div class="modal-search__form-header">
          <div class="modal-search__form-header-title">Tìm Kiếm</div>
          <div
            class="modal-search__form-close modal-close"
            @click="isSearch = !isSearch"
          >
            <i class="ti-close"></i>
          </div>
        </div>
        <div class="modal-search__form-content">
          <div class="modal-search__form-content-wrap">
            <div class="modal-search__form-content-row">
              <select
                name=""
                id="modal-search__form-select"
                class="modal-search__form-select"
              >
                <option value="*">Tất cả sản phẩm</option>
                <option value="*">Mô hình BanDai</option>
                <option value="*">Mô hình Dragon Ball</option>
                <option value="*">Mô hình One Piece</option>
                <option value="*">Mô hình Naruto</option>
              </select>
            </div>
          </div>
          <div class="modal-search__form-content-wrap">
            <div
              class="modal-search__form-content-row modal-search__form-content-input"
            >
              <input
                type="text"
                name=""
                id="modal-search__form-content-input"
                placeholder="Từ Khóa"
                @input="handleInput"
              />
              <button type="submit"><i class="ti-search"></i></button>
            </div>
          </div>
        </div>
      </form>
      <div class="modal-search__results">
        <div class="modal-search__results-header">Kết quả tìm kiếm</div>
        <div class="modal-search__results-content">
          <ul class="modal-search__results-content-list" style="height: 460px">
            <li
              class="modal-search__results-content-list-items"
              v-for="product in getFilterProducts"
              :key="product.id"
            >
              <a href="" class="modal-search__results-content-list-items-link">
                <div class="modal-search__results-content-list-items-thumbnail">
                  <img
                    style="width: 100px; height: 100px"
                    :src="product.image"
                    alt=""
                  />
                </div>
                <div
                  class="modal-search__results-content-list-items-description"
                >
                  <div
                    class="modal-search__results-content-list-items-description-name"
                  >
                    {{ product.name }}
                  </div>
                  <div
                    class="modal-search__results-content-list-items-description-price"
                  >
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)
                    }}
                  </div>
                  <router-link
                    :to="{ name: 'ProductDetail', params: { id: product.id } }"
                  >
                    <div
                      @click="isSearch = !isSearch"
                      class="modal-search__results-content-list-items-btn btn"
                    >
                      Chi Tiết
                    </div>
                  </router-link>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="content-like"
      style="
        position: fixed;
        width: 35%;
        top: 12.5%;
        height: 100vh;
        background: azure;
        z-index: 999;
        right: 0;
      "
      v-if="isLike === true"
    >
      <div class="modal-like__header">
        <div class="modal-like__header-title">Yêu Thích</div>
        <div
          class="modal-like__header-close modal-close"
          @click="getFavouries()"
        >
          <i class="ti-close" @click="isLike = !isLike"></i>
        </div>
      </div>
      <div class="modal-like__content">
        <div class="modal-like__content-wrap">
          <ul class="modal-like__list" style="height: 460px">
            <li
              class="modal-like-items"
              v-for="favourie in favouries"
              :key="favourie.id"
            >
              <div class="modal-like-items-content">
                <a href="" class="modal-like-items-link">
                  <div
                    class="modal-like-items-thumbnail"
                    style="
                      background-image: url('./asset/images/product/IMG_1134.jpg');
                    "
                  >
                    <img
                      style="width: 100px; height: 100px"
                      :src="favourie.image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="modal-like-items-description">
                  <a
                    href="./product-detail.html"
                    class="modal-like-items-description-name"
                    >{{ favourie.name }}</a
                  >
                  <div class="modal-like-items-description-price">
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(favourie.originalPrice)
                    }}
                  </div>
                  <router-link
                    @click="isLike = !isLike"
                    :to="{
                      name: 'ProductDetail',
                      params: { id: favourie.id },
                    }"
                    class="btn modal-like-items-description-view-detail"
                    >Chi Tiết</router-link
                  >
                  <div
                    @click="removeFavouries(favourie.id)"
                    style="margin-left: 15px"
                    class="btn modal-like-items-description-view-detail"
                  >
                    Xóa
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      isLike: false,
      isSearch: false,
      search: "",
      customerId: localStorage.getItem("userId"),
      favouries: [],
    };
  },
  watch: {
    search: {
      handler(val) {
        let newFilterProducts = [];
        if (val !== "") {
          newFilterProducts = this.products.filter((product) =>
            product.name.toLowerCase().includes(val.toLowerCase())
          );
        } else {
          newFilterProducts = JSON.parse(JSON.stringify(this.products));
        }
        this.setFilterProducts(newFilterProducts);
      },
      immediate: true,
    },
  },
  async created() {
    await this.getProducts;
    await this.getFavouries();
    await this.removeFavouries();
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  computed: {
    countFavouries() {
      return this.favouries.length;
    },
    user() {
      return this.$store.state.user;
    },
    ...mapGetters({
      getFilterProducts: "getFilterProducts",
    }),
    categories() {
      return this.$store.state.categories;
    },
    cartCount() {
      return this.$store.getters.cartItemCount;
    },
    products() {
      return this.$store.state.products;
    },
    // favouries() {
    //   return this.$store.state.favouries;
    // },
  },
  methods: {
    ...mapMutations({
      setFilterProducts: "SET_FILTER_PRODUCTS",
    }),
    handleInput(e) {
      this.search = e.target.value;
    },
    moveCategoryId(id) {
      this.$store.dispatch("getCategoryId", id);
    },
    getFavouries() {
      axios
        .get(
          `https://localhost:44309/api/Customer/GetFavoriteCustomer?customerId=${this.customerId}`
        )
        .then((response) => {
          // commit("SET_FAVOURIES", response.data);
          localStorage.setItem("favouries", JSON.stringify(response.data));
          this.favouries = response.data;
          // this.getFavouries();
        });
      // this.getFavouries();
      // this.$router.go();
    },
    removeFavouries(id) {
      axios
        .post(
          `https://localhost:44309/api/Customer/DeleteFavoriteProduct?productid=${id}&customeId=${this.customerId}`
        )
        .then((repon) => {
          console.log(repon.data);
          this.getFavouries();
        });
    },
    logout() {
      localStorage.clear();
      this.$store.state.user = null;
      this.$router.push("/login");
    },
    moveCartscrollTo() {
      window.scrollTo(0, 0);
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.ul {
  position: absolute;
  display: none;
  background: antiquewhite;
  left: -12%;
  width: 150px;
  border: 1px solid var(--border-color);
  box-shadow: 0 5px 20px rgb(0 0 0 / 15%);
  display: none;
  transition: all linear 0.3s;
  -webkit-animation: growDown 0.3s ease-in-out forwards;
  animation: growDown 0.3s ease-in-out forwards;
  transform-origin: top;
  background-color: rgba(255, 255, 255, 0.95);
}

.header-group-btn__list-items:hover ul {
  display: block;
}
.li {
  padding: 10px;
  font-size: 15px;
  color: black;
}
.li:hover,
.oder:hover {
  color: #ee4d2d;
}
.oder {
  color: black;
}
</style>
