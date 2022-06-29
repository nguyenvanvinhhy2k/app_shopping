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
                  <span>Trạng thái đơn hàng</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="status_oder">
      <span @click="oderLoading(0)">
        <div
          class="status"
          :class="{ active: isActive ? steps === 1 : '' }"
          @click="steps1()"
        >
          Chờ xác nhận
        </div>
      </span>
      <span @click="oderLoading(1)">
        <div
          class="status"
          :class="{ active: isActive ? steps === 2 : '' }"
          @click="steps2()"
        >
          Chờ lấy hàng
          <!-- <span> ({{ productOderId ? total : 0 }}) </span> -->
        </div>
      </span>
      <span @click="oderLoading(2)">
        <div
          class="status"
          :class="{ active: isActive ? steps === 3 : '' }"
          @click="steps3()"
        >
          Đang Giao
        </div>
      </span>
      <span @click="oderLoading(3)">
        <div
          class="status"
          :class="{ active: isActive ? steps === 4 : '' }"
          @click="steps4()"
        >
          Đã giao
        </div>
      </span>
      <span @click="oderLoading(4)">
        <div
          class="status"
          :class="{ active: isActive ? steps === 5 : '' }"
          @click="steps5()"
        >
          Đã hủy
        </div>
      </span>
    </div>

    <div class="app-cart" v-if="steps === 1">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4" style="margin-left: 132px">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12" style="margin-left: 110px">
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
                  </div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="i in productOderId"
                :key="i.id"
              >
                <div
                  class="app-cart-content-items-col col l-2 m-4 c-4"
                  style="padding: 10px 176px"
                >
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="i.image"
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
                        <span>{{ i.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(i.price)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div
                          class="app-cart-content-items-quantity-wrap"
                          style="border: none"
                        >
                          <span>{{ i.quantity }}</span>
                        </div>
                      </div>
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
                  }).format(orderTotal)
                }}</span>
              </div>

              <div class="button_oder">
                <button @click="updateSatusCancel()" class="button_oder-1">
                  Hủy đơn hàng
                </button>
                <button class="button_oder-2">Chờ xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-cart" v-if="steps === 2">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4" style="margin-left: 132px">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12" style="margin-left: 110px">
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
                  </div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="i in productOderId"
                :key="i"
              >
                <div
                  class="app-cart-content-items-col col l-2 m-4 c-4"
                  style="padding: 10px 176px"
                >
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="i.image"
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
                        <span>{{ i.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(i.price)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div
                          class="app-cart-content-items-quantity-wrap"
                          style="border: none"
                        >
                          <span>{{ i.quantity }}</span>
                        </div>
                      </div>
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
                  }).format(orderTotal)
                }}</span>
              </div>

              <div class="button_oder">
                <button @click="updateSatusCancel()" class="button_oder-1">
                  Hủy đơn hàng
                </button>
                <button class="button_oder-1">Tiếp tục mua</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-cart" v-if="steps === 3">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4" style="margin-left: 132px">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12" style="margin-left: 110px">
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
                  </div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="i in productOderId"
                :key="i.id"
              >
                <div
                  class="app-cart-content-items-col col l-2 m-4 c-4"
                  style="padding: 10px 176px"
                >
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="i.image"
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
                        <span>{{ i.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(i.price)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div
                          class="app-cart-content-items-quantity-wrap"
                          style="border: none"
                        >
                          <span>{{ i.quantity }}</span>
                        </div>
                      </div>
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
                  }).format(orderTotal)
                }}</span>
              </div>

              <div class="button_oder">
                <button @click="updateSatusSuccess()" class="button_oder-1">
                  Đã nhận hàng
                </button>
                <button class="button_oder-1">Tiếp tục mua</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-cart" v-if="steps === 4">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4" style="margin-left: 132px">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12" style="margin-left: 110px">
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
                  </div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="i in productOderId"
                :key="i.id"
              >
                <div
                  class="app-cart-content-items-col col l-2 m-4 c-4"
                  style="padding: 10px 176px"
                >
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="i.image"
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
                        <span>{{ i.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(i.price)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div
                          class="app-cart-content-items-quantity-wrap"
                          style="border: none"
                        >
                          <span>{{ i.quantity }}</span>
                        </div>
                      </div>
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
                  }).format(orderTotal)
                }}</span>
              </div>

              <div class="button_oder">
                <button @click="removeOder()" class="button_oder-1">
                  Xóa đơn hàng
                </button>
                <button class="button_oder-1">Mua lại</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-cart" v-if="steps === 5">
      <div class="app-cart-wrap grid wide">
        <div class="app-cart-container">
          <div class="app-cart-content row">
            <div class="col l-12 c-12 m-12">
              <div class="app-cart-content-header row">
                <div class="col l-2 m-4 c-4" style="margin-left: 132px">
                  <div class="app-cart-content-header-product">Sản Phẩm</div>
                </div>
                <div class="col l-8 m-8 c-8">
                  <div class="row">
                    <div class="col l-3 m-6 c-12" style="margin-left: 110px">
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
                  </div>
                </div>
              </div>
              <div
                class="app-cart-content-items row"
                v-for="i in productOderId"
                :key="i.id"
              >
                <div
                  class="app-cart-content-items-col col l-2 m-4 c-4"
                  style="padding: 10px 176px"
                >
                  <div class="app-cart-content-items-img">
                    <img
                      style="width: 100%; height: 120px"
                      :src="i.image"
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
                        <span>{{ i.name }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div
                        class="app-cart-content-items-price app-cart-content-items-price-sale--active"
                      >
                        <span class="app-cart-content-items-price-sale">{{
                          Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(i.price)
                        }}</span>
                      </div>
                    </div>
                    <div class="col l-3 m-6 c-12">
                      <div class="app-cart-content-items-quantity">
                        <div
                          class="app-cart-content-items-quantity-wrap"
                          style="border: none"
                        >
                          <span>{{ i.quantity }}</span>
                        </div>
                      </div>
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
                  }).format(orderTotal)
                }}</span>
              </div>

              <div class="button_oder">
                <button class="button_oder-1">Mua lại</button>
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
export default {
  name: "OderCartComponent",
  data() {
    return {
      steps: 1,
      isActive: "active",
      productOderId: [],
      orderId: null,
      oderStatusCancel: 4,
      oderStatusSuccess: 3,
    };
  },
  mounted() {
    this.oderLoading();
  },
  computed: {
    total() {
      return this.productOderId.length;
    },
    orderTotal() {
      let total = 0;
      this.productOderId.forEach(
        (item) => (total += item.price * item.quantity)
      );
      return total;
    },
  },
  created() {
    const id = localStorage.getItem("orderID");
    this.$store.dispatch("getOrderDetailId", id);
  },
  methods: {
    oderLoading(status) {
      this.productOderId = [];
      const userId = localStorage.getItem("userId");
      axios
        .get(
          `https://localhost:44309/api/Customer/get-order-by-id?id=${userId}&orderStatus=${
            status ? status : 0
          }`
        )
        .then((res) => {
          res.data.map((item) => {
            this.orderId = item.orderId;
            this.productOderId = item.listOrderDetail;
          });
          console.log(this.orderId);
        });
    },
    updateSatusCancel() {
      if (confirm("Bạn chắc muốn hủy đơn hàng")) {
        axios
          .put(
            `https://localhost:44309/api/Order/UpdateOrderStatus/${this.orderId}`,
            { id: this.orderId, status: this.oderStatusCancel }
          )
          .then((response) => {
            console.log(response.data);
            alert("Hủy đơn hàng thành công");
            this.oderLoading();
          });
      }
    },
    updateSatusSuccess() {
      axios
        .put(
          `https://localhost:44309/api/Order/UpdateOrderStatus/${this.orderId}`,
          { id: this.orderId, status: this.oderStatusSuccess }
        )
        .then((response) => {
          console.log(response.data);
          alert("Xác nhận đã nhận hàng thành công");
          this.oderLoading();
        });
    },
    removeOder() {
      this.productOderId = [];
    },
    steps1() {
      this.steps = 1;
    },
    steps2() {
      this.steps = 2;
    },
    steps3() {
      this.steps = 3;
    },
    steps4() {
      this.steps = 4;
    },
    steps5() {
      this.steps = 5;
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
.b {
  background-color: red;
  color: white;
}
.button_oder-1:hover {
  background: yellow;
  color: red;
  transition: 0.5s;
}
.button_oder-1 {
  color: white;
  background: orange;
  cursor: pointer;
}
.button-oder-2 {
  background-color: #ccc;
  color: black;
}
.button_oder button {
  display: flex;
  border: none;
  outline: none;

  padding: 15px 30px;
  margin: 20px 10px;
  font-size: 16px;
  float: right;
}
.status_oder {
  width: 1180px;
  display: flex;
  height: 60px;
  margin: 0 auto;
  padding: 0 60px;
  box-shadow: 0 0 0 2px #f5f5f5;
  background: white;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
}
.status {
  font-size: 20px;
  position: relative;
  line-height: 60px;
  cursor: pointer;
}
.status:hover {
  color: #ee4d2d;
}
.status span {
  position: absolute;
  color: #ee4d2d;
  font-size: 15px;
  right: -20%;
  top: -9%;
}

.active {
  color: #ee4d2d;
}
</style>
