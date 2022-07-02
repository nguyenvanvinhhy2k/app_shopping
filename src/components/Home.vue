<template>
  <div class="app-container">
    <div class="app-slideshow">
      <div class="app-slideshow-wrap slideshow-wrap grid">
        <div
          v-if="slide === 1"
          class="app-slideshow-content__slides-img slideshow-content__slides-img"
        >
          <img
            src="/fontend/asset/images/slides/slide2.jpg"
            style="width: 100%; height: 450px"
          />
        </div>

        <div
          v-if="slide === 2"
          class="app-slideshow-content__slides-img slideshow-content__slides-img"
        >
          <img
            src="/fontend/asset/images/slides/slide1.jpg"
            style="width: 100%; height: 450px"
          />
        </div>

        <div
          v-if="slide === 3"
          class="app-slideshow-content__slides-img slideshow-content__slides-img"
        >
          <img
            src="/fontend/asset/images/slides/slide4.jpg"
            style="width: 100%; height: 450px"
          />
        </div>

        <div
          v-if="slide === 4"
          class="app-slideshow-content__slides-img slideshow-content__slides-img"
        >
          <img
            src="/fontend/asset/images/slides/slide3.jpg"
            style="width: 100%; height: 450px"
          />
        </div>

        <div
          class="app-slideshow__control-prev slideshow__control-prev"
          @click="prevSlide"
        >
          <i class="ti-angle-left"></i>
        </div>
        <div
          class="app-slideshow__control-next slideshow__control-next"
          @click="nextSlide"
        >
          <i class="ti-angle-right"></i>
        </div>
      </div>
    </div>

    <div class="app-content">
      <div class="app_content-wrap grid wide">
        <div class="row app_content-wrap-container">
          <div class="col l-12 c-12 m-12">
            <div class="row">
              <div class="list-product__header col l-12 c-12 m-12">
                <div class="list-product__header-title">
                  <h3>MÔ HÌNH TRANG TRÍ</h3>
                </div>
              </div>
              <div class="list-product__body col l-12 c-12 m-12">
                <div class="row">
                  <div
                    class="list-product__body-items col l-3 c-6 m-6"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="list-product__body-items-wrap">
                      <div class="list-product__body-items-thumbnail">
                        <a class="list-product__body-items-thumbnail-link">
                          <div class="list-product__body-items-thumbnail-img">
                            <img
                              style="width: 100%; height: 282px"
                              :src="product.image"
                              alt=""
                            />
                          </div>
                        </a>

                        <div class="list-product__actions">
                          <div
                            class="list-product__actions-view"
                            @click="isShow = !isShow"
                          >
                            <div class="list-product__actions-view-title">
                              Xem Nhanh
                            </div>
                            <div
                              @click="showProduct(product.id)"
                              class="list-product__actions-view-icon btn-modal-active"
                              data-modal="quickview"
                            >
                              <i class="ti-eye"></i>
                            </div>
                          </div>
                          <div
                            class="list-product__actions-cart"
                            @click="isCart = !isCart"
                          >
                            <div class="list-product__actions-cart-tilte">
                              Mua Hàng
                            </div>
                            <div
                              @click="addToCart(product)"
                              class="list-product__actions-cart-icon btn-modal-active"
                              data-modal="cart"
                            >
                              <i class="ti-shopping-cart"></i>
                            </div>
                          </div>
                        </div>
                        <div class="list-product__actions-mobile">
                          <div class="list-product__actions-mobile-view">
                            <div
                              class="list-product__actions-mobile-view-icon btn-modal-active"
                              data-modal="quickview"
                            >
                              <i class="ti-eye"></i>
                            </div>
                          </div>
                          <div
                            class="list-product__actions-mobile-cart btn-modal-active"
                            data-modal="cart"
                          >
                            <div class="list-product__actions-mobile-cart-icon">
                              <i class="ti-shopping-cart"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="list-product__body-items-description"
                        style="line-height: 20px"
                      >
                        <router-link
                          :to="{
                            name: 'ProductDetail',
                            params: { id: product.id },
                          }"
                        >
                          <a
                            class="list-product__body-items-description-name"
                            >{{ product.name }}</a
                          >
                        </router-link>
                        <div
                          class="list-product__body-items-description-price list-product__body-items-description-price-sale--active"
                        >
                          <span
                            class="list-product__body-items-description-price-base"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(product.price)
                            }}</span
                          >
                          <span
                            class="list-product__body-items-description-price-sale"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(product.originalPrice)
                            }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="list-product__like list-product__like--active"
                      >
                        <div
                          class="list-product__like-icon"
                          @click="addFavory(product.id)"
                        >
                          <i class="ti-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-product__footer col l-12 c-12 m-12">
                <div class="list-product__footer-content">
                  <a class="btn list-product__footer-content-load-move"
                    >Xem Thêm</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-news">
      <div class="app-news-wrap grid wide">
        <div class="row">
          <div class="app-news-header col c-12 l-12 m-12">
            <div class="app-news-header-title">
              <h3>Tin Tức</h3>
            </div>
          </div>
        </div>
        <div class="app-news-list row">
          <div class="app-news-list-items col l-4 m-4 c-12">
            <a href="./news-detail.html" class="app-news-list-items-thumbnail">
              <div
                class="app-news-list-items-thumbnail-img"
                style="
                  background-image: url('/fontend/asset/images/slides/slide1.jpg');
                "
              ></div>
              <div class="app-news-list-items-thumbnail-date">18/06</div>
            </a>
            <div class="app-news-list-items-description">
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-name"
              >
                Bộ 9 nhân vật Dragon Ball - hiệu ứng - Figure Dragon Ball
                Effect!!
              </a>
              <div class="app-news-list-items-description-content">
                <span
                  >Ciper Shop hiện tại đang có rất nhiều chương trình khuyến mại
                  ……</span
                >
              </div>
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-read-more"
              >
                Xem Thêm...
              </a>
            </div>
          </div>
          <div class="app-news-list-items col l-4 m-4 c-12">
            <a href="./news-detail.html" class="app-news-list-items-thumbnail">
              <div
                class="app-news-list-items-thumbnail-img"
                style="
                  background-image: url('/fontend/asset/images/slides/slide3.jpg');
                "
              ></div>
              <div class="app-news-list-items-thumbnail-date">18/06</div>
            </a>
            <div class="app-news-list-items-description">
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-name"
              >
                Bộ 9 nhân vật Dragon Ball - hiệu ứng - Figure Dragon Ball
                Effect!!
              </a>
              <div class="app-news-list-items-description-content">
                <span
                  >Ciper Shop hiện tại đang có rất nhiều chương trình khuyến mại
                  ……</span
                >
              </div>
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-read-more"
              >
                Xem Thêm...
              </a>
            </div>
          </div>
          <div class="app-news-list-items col l-4 m-4 c-12">
            <a href="./news-detail.html" class="app-news-list-items-thumbnail">
              <div
                class="app-news-list-items-thumbnail-img"
                style="
                  background-image: url('/fontend/asset/images/slides/slide2.jpg');
                "
              ></div>
              <div class="app-news-list-items-thumbnail-date">18/06</div>
            </a>
            <div class="app-news-list-items-description">
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-name"
              >
                Bộ 9 nhân vật Dragon Ball - hiệu ứng - Figure Dragon Ball
                Effect!!
              </a>
              <div class="app-news-list-items-description-content">
                <span
                  >Ciper Shop hiện tại đang có rất nhiều chương trình khuyến mại
                  ……</span
                >
              </div>
              <a
                href="./news-detail.html"
                class="app-news-list-items-description-read-more"
              >
                Xem Thêm...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-maps">
      <div class="app-maps-container grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5751160153172!2d105.78721831490384!3d20.969571286030543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad1efccf9677%3A0xbc67cd671314e5d1!2sHTBakery!5e0!3m2!1svi!2s!4v1623925136041!5m2!1svi!2s"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  <!-- XEM NHANH SP-->
  <div
    class="modal-quickview-wrap vvv"
    v-if="isShow === true"
    style="background: beige"
  >
    <div class="modal-quickview__header-close modal-close">
      <i class="ti-close" @click="isShow = !isShow"></i>
    </div>
    <div class="modal-quickview__content row">
      <div class="col l-6 m-6 c-12">
        <div class="modal-quickview-slide">
          <div class="modal-quickview-slide-wrap slideshow-wrap">
            <img
              class="app-slideshow-content__slides-img slideshow-content__slides-img"
              style="width: 100%"
              :src="productDetail.image"
              alt=""
            />
            <div class="modal-quickview-slide__sale">
              <span>-15%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col l-6 m-6 c-12">
        <div class="modal-quickview-description">
          <div
            class="modal-quickview-description-name"
            style="line-height: 20px"
          >
            <span class="modal-quickview-description-name-label">Tên:</span>
            <h3 style="line-height: 22px">{{ productDetail.name }}</h3>
          </div>
          <div
            class="modal-quickview-description-price modal-quickview-description-price-sale--active"
          >
            <span class="modal-quickview-description-price-label">Giá:</span>
            <span class="modal-quickview-description-price-base">{{
              Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(productDetail.price)
            }}</span>
            <span class="modal-quickview-description-price-sale">{{
              Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(productDetail.originalPrice)
            }}</span>
          </div>
          <div
            class="modal-quickview-description-content"
            style="padding-left: 56px"
          >
            <p v-html="productDetail.description"></p>
          </div>
          <div
            class="modal-quickview-description-size"
            style="padding-left: 36px; padding-top: 10px"
          >
            <span class="modal-quickview-description-size-label"
              >Kích Thước:</span
            >
            <div
              class="modal-quickview-description-size-check"
              style="padding-left: 36px"
            >
              <input
                type="radio"
                name="quickview-description-size-check"
                class="modal-quickview-description-size-check-input"
                checked
              />
              <label for="" class="modal-quickview-description-size-check-label"
                >S</label
              >
            </div>
            <div class="modal-quickview-description-size-check">
              <input
                type="radio"
                name="quickview-description-size-check"
                class="modal-quickview-description-size-check-input"
              />
              <label for="" class="modal-quickview-description-size-check-label"
                >M</label
              >
            </div>
            <div class="modal-quickview-description-size-check">
              <input
                type="radio"
                name="quickview-description-size-check"
                class="modal-quickview-description-size-check-input"
              />
              <label for="" class="modal-quickview-description-size-check-label"
                >L</label
              >
            </div>
          </div>
          <div
            class="modal-quickview-description-quantity-cart"
            style="padding-left: 36px; padding-top: 10px"
          >
            <span class="modal-quickview-description-quantity-cart-label"
              >Số Lượng:</span
            >
            <div class="modal-quickview-description-quantity">
              <div class="modal-quickview-description-quantity-minus">
                <i class="ti-minus" @click="removeQuantitys()"></i>
              </div>
              <div class="modal-quickview-description-quantity-label">
                <span>{{ quantity }}</span>
              </div>
              <div class="modal-quickview-description-quantity-plus">
                <i class="ti-plus" @click="addQuantitys()"></i>
              </div>
            </div>
          </div>
          <div
            class="btn modal-quickview-description-add-cart"
            style="margin-top: 10px; margin-left: 100px"
            @click="addToCart(productDetail)"
          >
            <span @click="isShow = !isShow">Thêm Vào Giỏ Hàng</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- XEM NHANH CART-->
  <div
    v-if="isCart === true"
    class="modal-cart__content"
    style="
      width: 25%;
      float: right;
      position: fixed;
      top: 90px;
      right: 0;
      z-index: 999;
      background: beige;
    "
  >
    <div class="modal-cart__content-wrap">
      <div class="modal-cart__empty">
        <!-- add class .modal-cart__empty--avtive nếu ko có sản phẩm -->
        <div class="modal-cart__empty-content-img"></div>

        <a href="" class="modal-cart__empty-content-btn btn">Tới Mua Hàng</a>
      </div>
      <div class="modal-cart__item">
        <div class="modal-cart__item-header">
          <h3 v-if="carts.length > 0">Sản Phẩm Đã Thêm</h3>
          <h3 v-if="carts.length === 0">Bạn Chưa Có Sản Phẩn Nào</h3>
        </div>

        <div class="modal-cart__item-content">
          <ul class="modal-cart__item-content-list">
            <li
              class="modal-cart__item-content-list-items"
              v-for="cart in carts"
              :key="cart.id"
            >
              <div class="modal-cart__item-content-list-items-content">
                <a class="modal-cart__item-content-list-items-content-link">
                  <div
                    class="modal-cart__item-content-list-items-content-thumbnail"
                  >
                    <img
                      style="width: 100%; height: 100px"
                      :src="cart.product.image"
                      alt=""
                    />
                  </div>
                </a>
                <div
                  class="modal-cart__item-content-list-items-content-description"
                >
                  <a class="modal-cart__item-content-list-items-content-link">
                    <div
                      class="modal-cart__item-content-list-items-content-description-name"
                    >
                      {{ cart.product.name }}
                    </div>
                  </a>
                  <div
                    class="modal-cart__item-content-list-items-content-description-price"
                  >
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(cart.product.originalPrice)
                    }}
                  </div>
                  <div
                    class="modal-cart__item-content-list-items-content-description-quantity"
                  >
                    <div
                      class="modal-cart__item-content-list-items-content-description-quantity-minus"
                    >
                      <i class="ti-minus"></i>
                      <i
                        @click="$store.dispatch('remove_cart', cart)"
                        class="ti-trash"
                      ></i>
                    </div>
                    <div
                      class="modal-cart__item-content-list-items-content-description-quantity-label"
                    >
                      {{ cart.quantity }}
                    </div>
                    <div
                      class="modal-cart__item-content-list-items-content-description-quantity-plus"
                    >
                      <i @click="addQuantity(cart)" class="ti-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="modal-cart__item-into-memory">
          <div class="modal-cart__item-into-memory-title">Thành Tiền:</div>
          <div class="modal-cart__item-into-memory-label">
            {{
              Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalPrice)
            }}
          </div>
        </div>
        <div
          class="modal-cart__item-action"
          v-if="carts.length === 0"
          @click="isCart = !isCart"
        >
          <a class="btn modal-cart__item-action-detail-cart">Tới mua hàng</a>
        </div>
        <div class="modal-cart__item-action" v-if="carts.length > 0">
          <router-link :to="{ name: 'Cart' }">
            <a
              @click="moveCartscrollTo()"
              class="btn modal-cart__item-action-detail-cart"
              >Chi Tiết Giỏ Hàng</a
            >
          </router-link>
        </div>
        <div class="modal-cart__item-action">
          <a
            class="btn modal-cart__item-action-detail-cart"
            @click="isCart = !isCart"
            >Thoát</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {formatPrice} from "../utils"
// import Pagination from "vue-pagination-2";
import axios from "axios";
export default {
  name: "MasterSSS",
  // components: { Pagination },
  data() {
    return {
      productDetail: {},
      isSearch: false,
      isShow: false,
      isCart: false,
      slide: 1,
      totalSlide: 3,
      quantity: 1,
      pageIndex: 1,
      pageSize: 4,
      customerId: localStorage.getItem("userId"),
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    carts() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    addToCart(product) {
      alert("Đã thêm vào giỏ hàng");
      this.$store.dispatch("addToCart", { product, quantity: this.quantity });
    },
    addFavory(productID) {
      axios
        .post(
          `https://localhost:44309/api/Customer/FavoriteProduct?productId=${productID}&customeId=${this.customerId}`
        )
        .then((response) => {
             console.log(response.data);
          alert("Đã thêm vào yêu thích");
          this.$router.go(); 
        });
    },
    addQuantitys() {
      this.quantity++;
    },
    removeQuantitys() {
      this.quantity--;
    },
    addQuantity(pro) {
      let i = this.carts.indexOf(pro);
      this.carts[i].quantity++;
    },
    removeCart(id) {
      let index = this.carts.indexOf(id);
      this.carts.splice(index, 1);
    },
    showProduct(id) {
      this.productDetail = this.products.find((pro) => pro.id === id);
    },
    nextSlide() {
      if (this.slide <= this.totalSlide) {
        this.slide++;
      } else {
        this.slide = 1;
      }
    },
    prevSlide() {
      if (this.slide >= 2) {
        this.slide--;
      } else {
        this.slide = 4;
      }
    },
    moveCartscrollTo() {
      window.scrollTo(0, 0);
      this.$router.push("/cart");
    },
    //  getPage(pageIndex) {
    //   // we simulate an api call that fetch the records from a backend
    //   this.products = [];
    //   const startIndex = this.pageSize * (pageIndex - 1) + 1;
    //   const endIndex = startIndex + this.pageSize - 1;
    //   for (let i = startIndex; i <= endIndex; i++) {
    //     this.loadListItem(this.products.push(`Item ${i}`));
    //   }
    // },
  },
};
</script>

<style scoped>
.vvv {
  width: 65%;
  border-radius: 2px solid red;
  left: 20%;
  background-color: var(--while-color);
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
.ti-heart:hover {
  color: #ee4d2d;
}
</style>
