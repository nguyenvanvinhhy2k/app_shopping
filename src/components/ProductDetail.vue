/* eslint-disable */
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
                  <span>MÔ HÌNH TRANG TRÍ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-product-detail">
      <div class="app-product-detail-wrap grid wide">
        <div class="app-product-detail-container row">
          <div class="col l-6 m-6 c-12">
            <div class="app-product-detail-slide" style="padding: 42.5%">
              <div class="app-product-detail-slide-wrap slideshow-wrap">
                <img
                  style="width: 588px; height: 500px"
                  :src="productDetail.image"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col l-6 m-6 c-12">
            <div class="app-product-detail-description">
              <div
                class="app-product-detail-description-name"
                style="line-height: 20px"
              >
                <span class="app-product-detail-description-name-label"
                  >Tên:</span
                >
                <h3 style="font-weight: bold">{{ productDetail.name }}</h3>
              </div>
              <div
                class="app-product-detail-description-price app-product-detail-description-price-sale--active"
              >
                <span class="app-product-detail-description-price-label"
                  >Giá:</span
                >
                <span class="app-product-detail-description-price-base">{{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productDetail.price)
                }}</span>
                <span class="app-product-detail-description-price-sale">{{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productDetail.originalPrice)
                }}</span>
              </div>
              <div class="app-product-detail-description-content">
                <p v-html="productDetail.description"></p>
              </div>
              <div class="app-product-detail-description-size">
                <span class="app-product-detail-description-size-label"
                  >Kích Thước:</span
                >
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                    checked
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >S</label
                  >
                </div>
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >M</label
                  >
                </div>
                <div class="app-product-detail-description-size-check">
                  <input
                    type="radio"
                    name="product-detail-description-size-check"
                    class="app-product-detail-description-size-check-input"
                  />
                  <label
                    for=""
                    class="app-product-detail-description-size-check-label"
                    >L</label
                  >
                </div>
              </div>
              <div class="app-product-detail-description-quantity-cart">
                <span class="app-product-detail-description-quantity-cart-label"
                  >Số Lượng:</span
                >
                <div class="app-product-detail-description-quantity">
                  <div class="app-product-detail-description-quantity-minus">
                    <i class="ti-minus" @click="removeQuantity()"></i>
                  </div>
                  <div class="app-product-detail-description-quantity-label">
                    <span>{{ quantity }}</span>
                  </div>
                  <div class="app-product-detail-description-quantity-plus">
                    <i class="ti-plus" @click="addQuantity()"></i>
                  </div>
                </div>
              </div>
              <div
                class="btn app-product-detail-description-add-cart"
                @click="addToCart(productDetail)"
              >
                Thêm Vào Giỏ Hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-container" style="position: relative">
      <div class="" style="margin-bottom: 15px"><h1>Bình luận</h1></div>
      <div class="">
        <img
          style="
            width: 30px;
            heght: 30px;
            position: absolute;
            top: 11.8%;
            left: 23.5%;
            border-radius: 50%;
          "
          :src="dataComments.photoURL"
          alt=""
        />
      </div>
      <input
        v-model="dataComments.comment"
        placeholder="Nhập..."
        v-on:keyup.enter="submitComment"
        type="text"
        class="input"
        v-if="dataComments.userID"
      />
      <div class="" v-if="!dataComments.userID" style="position: relative">
        <div class="aaa" />
        <p class="ppp">
          You need
          <router-link class="next-login" to="/login">Login</router-link>
          to comment
        </p>
      </div>
      <div class="comments">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <div class="img">
            <img
              style="width: 100%; heght: 100%; border-radius: 50%"
              :src="comment.photoURL"
              alt=""
            />
          </div>
          <div class="title">
            <p>{{ comment.userName }}</p>
            <div class="">
              {{ comment.comment }}
            </div>
          </div>
          <div class="date-time">
            {{ calculateCreatedTime(comment.create_at) }}
          </div>
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
                  <h3>Sản phẩm liên quan</h3>
                </div>
              </div>
              <div class="list-product__body col l-12 c-12 m-12">
                <div class="row">
                  <div
                    class="list-product__body-items col l-3 c-6 m-6"
                    v-for="productRelation in productRelations"
                    :key="productRelation.id"
                  >
                    <div class="list-product__body-items-wrap">
                      <div class="list-product__body-items-thumbnail">
                        <a class="list-product__body-items-thumbnail-link">
                          <div class="list-product__body-items-thumbnail-img">
                            <img
                              style="width: 100%"
                              :src="productRelation.image"
                              alt=""
                            />
                          </div>
                        </a>

                        <div class="list-product__actions">
                          <div class="list-product__actions-view">
                            <div class="list-product__actions-view-title">
                              Xem Nhanh
                            </div>
                            <div
                              class="list-product__actions-view-icon btn-modal-active"
                              data-modal="quickview"
                            >
                              <i class="ti-eye"></i>
                            </div>
                          </div>
                          <div class="list-product__actions-cart">
                            <div class="list-product__actions-cart-tilte">
                              Mua Hàng
                            </div>
                            <div
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
                      <div class="list-product__body-items-description">
                        <a
                          href="./product-detail.html"
                          class="list-product__body-items-description-name"
                          >{{ productRelation.name }}</a
                        >
                        <div
                          class="list-product__body-items-description-price list-product__body-items-description-price-sale--active"
                        >
                          <span
                            class="list-product__body-items-description-price-base"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(productRelation.originalPrice)
                            }}</span
                          >
                          <span
                            class="list-product__body-items-description-price-sale"
                            >{{
                              Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(productRelation.price)
                            }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="list-product__like list-product__like--active"
                      >
                        <div class="list-product__like-icon">
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
  </div>
</template>

<script>
import { commentsColRef } from "../servies/firebase";
import { addDoc, getDocs, query, where } from "firebase/firestore";
// import { database, ref, push, onValue } from "../servies/firebase";
export default {
  name: "ProductComponent",
  data() {
    return {
      comments: [],
      dataComments: {
        comment: "",
        userName: JSON.parse(localStorage.getItem("user")),
        photoURL: JSON.parse(localStorage.getItem("photoURL")),
        ProductID: this.$route.params.id,
        userID: JSON.parse(localStorage.getItem("userID")),
        create_at: Date.now(),
      },
      id: this.$route.params.id,
      quantity: 1,
    };
  },
  mounted() {
    this.getComments(this.$route.params.id);
    this.submitComment(this.$route.params.id);
    window.scrollTo(0, 0);
    this.$store.dispatch("getProduct", this.id);
    this.calculateCreatedTime();
  },
  computed: {
    productDetail() {
      return this.$store.state.product;
    },
    productRelations() {
      return this.$store.state.productRelation;
    },
  },
  methods: {
    // async submitComment(e) {
    //   if (e.keyCode === 13) {
    //     await push(ref(database, "commentss"), this.dataComments);
    //     this.dataComments.comment = "";
    //   }
    // },
    // getComments() {
    //   onValue(ref(database, "commentss"), (data) => {
    //     data.forEach((comment) => {
    //       this.comments.push(comment.val());
    //       // const q = listComment.filter(
    //       //   (comment) => comment.ProductID === this.id
    //       // );
    //       // this.comments = q;
    //       console.log("comment", this.comments);
    //     });
    //   });
    // },
    async submitComment(e) {
      if (e.keyCode === 13) {
        const addedDoc = await addDoc(commentsColRef, this.dataComments);
        this.dataComments.comment = "";
        this.getComments();
        console.log(addedDoc);
      }
    },
    async getComments() {
      const q = query(
        commentsColRef,
        where("ProductID", "==", this.dataComments.ProductID)
      );
      const querySnapshot = await getDocs(q);
      const commentList = [];
      querySnapshot.forEach((doc) => {
        commentList.push(doc.data());
        this.comments = commentList;
      });
    },
    removeQuantity() {
      this.quantity--;
    },
    addQuantity() {
      this.quantity++;
    },
    addToCart(product) {
      alert("Đã thêm vào giỏ hàng");
      this.$store.dispatch("addToCart", { product, quantity: this.quantity });
    },
    calculateCreatedTime(value) {
      let periods = {
        year: 365 * 30 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
      };

      let diff = Date.now() - value;

      for (const key in periods) {
        if (diff >= periods[key]) {
          let result = Math.floor(diff / periods[key]);
          return `${result} ${result === 1 ? key : key + "s"} ago`;
        }
      }
      return "Just now";
    },
  },
};
</script>

<style scoped>
.comment-container {
  padding: 10px 60px;
  width: 80%;
  margin: 30px auto;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.comment {
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 20px 0;
}
.input {
  width: 60%;
  height: 40px;
  border-radius: 30px;
  padding-left: 40px;
  font-size: 18px;
}
.ppp {
  font-size: 14px;
}
.next-login {
  color: aqua;
  margin: 0 3px;
}
.aaa {
  width: 60%;
  margin: 0 auto;
  height: 40px;
  border: 1px solid black;
  border-radius: 30px;
  padding-left: 15px;
  font-size: 18px;
}
.ppp {
  position: absolute;
  top: 0px;
  left: 22%;
}
.img {
  margin-right: 10px;
  margin-top: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
p {
  font-weight: 700;
  margin-bottom: 20px;
}
.input:focus {
  outline: none;
}
.comments {
  height: 350px;
  overflow-y: auto;
}
.date-time {
  margin-left: 10px;
  margin-bottom: 20px;
  font-weight: 100;
  color: #808080;
}
</style>
