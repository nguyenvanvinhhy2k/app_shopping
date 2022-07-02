<template>
  <div class="app-container">
    <div class="app-breadcrumb">
      <div class="app-breadcrumb-wrap grid">
        <div class="app-breadcrumb-container row">
          <div class="col l-12 m-12 c-12">
            <div
              class="app-breadcrumb-content"
              style="
                background-image: url('/fontend/asset/images/source/o-BAKING-TOOLS-facebook.jpg');
              "
            >
              <div class="app-breadcrumb-content-title">
                <a class="app-breadcrumb-content-title-link">
                  <span>Trang Chủ</span>
                </a>
                <span class="app-breadcrumb-content-title-slash">/</span>
                <a class="app-breadcrumb-content-title-link">
                  <span>Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-cart">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-header-product-name">
                        Tên
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-header-product-price">
                        Giá
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-header-product-quantity">
                        Số Lượng
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-header-product-size">
                        Size
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col l-2 m-12 c-12">
                  <div class="app-cart-content-header-product-total">Xóa</div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="cart in carts"
                :key="cart.id"
              >
                <div class="app-cart-content-items-col col l-2 m-4 c-4">
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="cart.product.image"
                      alt=""
                    />
                  </div>
                </div>
                <div class="app-cart-content-items-col col l-8 m-8 c-8">
                  <div class="app-cart-content-items-col-row row">
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-name"
                        style="line-height: 20px"
                      >
                        <span>{{ cart.product.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-base">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(cart.product.price)
                        }}</span>
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(cart.product.originalPrice)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div class="app-cart-content-items-quantity-wrap">
                          <div class="app-cart-content-items-quantity-remove">
                            <i class="ti-minus" @click="muteQuantity(cart)"></i>
                          </div>
                          <!-- <div class="app-cart-content-items-quantity-minus"><i class="ti-minus"></i></div> -->
                          <div class="app-cart-content-items-quantity-label">
                            <span>{{ cart.quantity }}</span>
                          </div>
                          <div class="app-cart-content-items-quantity-plus">
                            <i @click="addQuantity(cart)" class="ti-plus"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-size">
                        <div class="app-cart-content-items-size-wrap">
                          <span>{{ cart.product.size }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="app-cart-content-items-col app-cart-content-items-col-total col l-2 m-12 c-12"
                >
                  <div class="app-cart-content-items-total">
                    <div class="app-cart-content-items-quantity-remove">
                      <i
                        class="ti-trash"
                        @click="$store.dispatch('remove_cart', cart)"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-cart-content-total col l-12 c-12 m-12">
              <div class="app-cart-content-total-wrap">
                <span class="app-cart-content-total-label">Thành Tiền:</span>
                <span class="app-cart-content-total-value">{{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalPrice)
                }}</span>
              </div>
            </div>
          </div>

          <div class="app-cart-order row">
            <div class="app-cart-order-form col l-6 c-12 m-12">
              <form action="" class="app-cart-order-form-content">
                <div class="app-cart-order-form-line">
                  <h3>Thông Tin Của Bạn</h3>
                </div>
                <div class="app-cart-order-form-line">
                  <label for="" class="app-cart-order-form-label"
                    >Tên Bạn <span>(*)</span></label
                  >
                  <input
                    @input="nameUser"
                    type="text"
                    :value="name"
                    class="app-cart-order-form-input"
                    @change="v$.name.$touch()"
                    @blur="v$.name.$touch()"
                  />
                  <div class="error">
                    <span v-if="v$.name.$error">Vui lòng nhập họ tên</span>
                  </div>
                </div>
                <div class="app-cart-order-form-line">
                  <label for="" class="app-cart-order-form-label"
                    >Số Điện Thoại <span>(*)</span></label
                  >
                  <input
                    @change="v$.phone.$touch()"
                    @blur="v$.phone.$touch()"
                    v-model="phone"
                    type="text"
                    class="app-cart-order-form-input"
                  />
                  <div class="error">
                    <span v-if="v$.phone.$error"
                      >Vui lòng nhập số điện thoại là số</span
                    >
                  </div>
                </div>
                <div class="app-cart-order-form-line">
                  <label for="" class="app-cart-order-form-label"
                    >Địa Chỉ <span>(*)</span></label
                  >

                  <input
                    @change="v$.address.$touch()"
                    @blur="v$.address.$touch()"
                    v-model="address"
                    type="text"
                    class="app-cart-order-form-input"
                  />
                  <div class="error">
                    <span v-if="v$.address.$error">Vui lòng nhập địa chỉ</span>
                  </div>
                </div>
                <div class="app-cart-order-form-line">
                  <label for="" class="app-cart-order-form-label"
                    >Ghi Chú <span>(*)</span></label
                  >
                  <textarea
                    @change="v$.note.$touch()"
                    @blur="v$.note.$touch()"
                    v-model="note"
                    type="text"
                    class="app-cart-order-form-textarea"
                  ></textarea>
                  <div class="error">
                    <span v-if="v$.note.$error">Vui lòng nhập ghi chú</span>
                  </div>
                </div>
                <div class="app-cart-order-form-line">
                  <button
                    @click.prevent="onSubmit"
                    class="app-cart-order-form-btn btn"
                  >
                    Đặt Hàng
                  </button>
                </div>
              </form>
            </div>
            <div class="app-cart-odder-contact col l-6 m-12 c-12">
              <div class="app-cart-odder-contact-wrap">
                <div class="app-cart-odder-contact-header">
                  <h3>Thông Tin Liên Hệ</h3>
                </div>
                <div class="app-cart-odder-contact-content">
                  <div class="app-cart-odder-contact-content-description">
                    <p>
                      Mọi ý kiến về đơn hàng vui lòng liên hệ với chúng tôi qua
                      số Điện Thoại: <span>097.279.0248</span>
                    </p>
                  </div>
                  <div class="app-cart-odder-contact-content-address">
                    <span class="app-cart-odder-contact-content-address-icon"
                      ><i class="ti-location-pin"></i
                    ></span>
                    <span class="app-cart-odder-contact-content-address"
                      >C28-TT6 KĐT Văn Quán, Phường Phúc La, Hà Đông,Hà
                      Nội</span
                    >
                  </div>
                  <div class="app-cart-odder-contact-content-phone">
                    <span class="app-cart-odder-contact-content-phone-icon"
                      ><i class="ti-mobile"></i
                    ></span>
                    <span class="app-cart-odder-contact-content-phone"
                      >097.279.0248</span
                    >
                  </div>
                  <div class="app-cart-odder-contact-content-email">
                    <span class="app-cart-odder-contact-content-email-icon"
                      ><i class="ti-email"></i
                    ></span>
                    <span class="app-cart-odder-contact-content-email"
                      >phamngochoan.it@gmail.com</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-maps" style="margin-top: 50px">
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
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
export default {
  name: "CartComponent",
  data() {
    return {
      v$: useValidate(),
      name: JSON.parse(localStorage.getItem("user")),
      phone: "",
      address: "",
      note: "",
    };
  },
  validations() {
    return {
      name: { required },
      phone: { required, numeric },
      address: { required },
      note: { required },
    };
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    totalPriceId() {
      return this.$store.getters.cartTotalPriceId;
    },
    cartTotalItems() {
      return this.$store.getters.cartTotalItem;
    },
  },

  methods: {
    addQuantity(product) {
      let i = this.carts.indexOf(product);

      {
        if (this.carts[i].id === product.id) {
          this.carts[i].quantity++;
        }
      }
    },
    muteQuantity(product) {
      let i = this.carts.indexOf(product);
      {
        if (this.carts[i].id === product.id && this.carts[i].quantity > 1) {
          this.carts[i].quantity--;
        }
      }
    },
    async onSubmit() {
      let checkuser = localStorage.getItem("user");
      let userId = localStorage.getItem("userId");
      console.log(userId);
      this.v$.$validate();
      if (checkuser) {
        if (!this.v$.$error) {
          await axios
            .post("https://localhost:44309/api/Order/CreateOrder", {
              customerID: userId,
              custemerName: this.name,
              custemerPhone: this.phone,
              custemerAddress: this.address,
              note: this.note,
              status: 2,
            })
            .then((response) => {
              let cart = localStorage.getItem("cart");
              let carts = JSON.parse(cart);
              if (cart) {
                for (let i = 0; i < carts.length; i++) {
                  let orderDetail = {
                    productID: carts[i].product.id,
                    orderID: response.data,
                    quantity: carts[i].quantity,
                    price: carts[i].product.price,
                    image: carts[i].product.image,
                  };
                  console.log("res", response.data);
                  localStorage.setItem("orderID", orderDetail.orderID);
                  axios
                    .post(
                      "https://localhost:44309/api/Order/CreateOrderDetail",
                      orderDetail
                    )
                    .then((response) => {
                      alert("Đặt hàng thành công");
                      this.$store.dispatch("remove_cart");
                      console.log(response);
                      this.$router.push("/");
                    });
                }
              }
            })
            .catch((error) => console.log(error.message));
        }
      } else {
        alert("Bạn cần đăng nhập trước khi mua hàng");
        this.$router.push("/login");
        window.scrollTo(0, 0);
      }
    },
    nameUser(e) {
      this.name = e.target.value;
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  padding: 5px;
}
</style>
