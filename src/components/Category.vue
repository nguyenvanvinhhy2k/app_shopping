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
                <a href="/" class="app-breadcrumb-content-title-link">
                  <span>Trang Chủ</span>
                </a>
                <span class="app-breadcrumb-content-title-slash">/</span>
                <a
                  href="./category.html"
                  class="app-breadcrumb-content-title-link"
                >
                  <span>Category</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-content">
      <div class="app_content-wrap grid wide">
        <div class="row app_content-wrap-container">
          <div class="col l-12 c-12 m-12">
            <div class="list-product__header col l-12 c-12 m-12">
              <div class="list-product__header-title">
                <h3>Mô hình</h3>
              </div>
            </div>
            <div class="list-product__body col l-12 c-12 m-12">
              <div class="row">
                <div
                  class="list-product__body-items col l-3 c-6 m-6"
                  v-for="categoryType in categoryTypes"
                  :key="categoryType.id"
                >
                  <div class="list-product__body-items-wrap">
                    <div class="list-product__body-items-thumbnail">
                      <a class="list-product__body-items-thumbnail-link">
                        <div class="list-product__body-items-thumbnail-img">
                          <img
                            style="width: 100%; height: 276px"
                            :src="categoryType.image"
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
                    <div
                      class="list-product__body-items-description"
                      style="line-height: 20px"
                    >
                      <router-link
                        :to="{
                          name: 'ProductDetail',
                          params: { id: categoryType.id },
                        }"
                      >
                        <a class="list-product__body-items-description-name">{{
                          categoryType.name
                        }}</a>
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
                            }).format(categoryType.originalPrice)
                          }}</span
                        >
                        <span
                          class="list-product__body-items-description-price-sale"
                          >{{
                            Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(categoryType.price)
                          }}</span
                        >
                      </div>
                    </div>
                    <div class="list-product__like list-product__like--active">
                      <div class="list-product__like-icon">
                        <i class="ti-heart"></i>
                      </div>
                    </div>
                    <!-- <div class="list-product__sale">
                      <span class="list-product__sale-label">-15%</span>
                    </div> -->
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

              <div class="col l-12 c-12 m-12">
                <div class="row">
                  <div class="list-product__header col l-12 c-12 m-12">
                    <div class="list-product__header-title">
                      <h3>Sản phẩm khác</h3>
                    </div>
                  </div>
                  <div class="list-product__body col l-12 c-12 m-12">
                    <div class="row">
                      <div
                        class="list-product__body-items col l-3 c-6 m-6"
                        v-for="categoryRelation in categoryRelations"
                        :key="categoryRelation.id"
                      >
                        <div class="list-product__body-items-wrap">
                          <div class="list-product__body-items-thumbnail">
                            <a class="list-product__body-items-thumbnail-link">
                              <div
                                class="list-product__body-items-thumbnail-img"
                              >
                                <img
                                  style="width: 100%; height: 270px"
                                  :src="categoryRelation.image"
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
                                <div
                                  class="list-product__actions-mobile-cart-icon"
                                >
                                  <i class="ti-shopping-cart"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="list-product__body-items-description">
                            <router-link
                              :to="{
                                name: 'ProductDetail',
                                params: { id: categoryRelation.id },
                              }"
                            >
                              <a
                                class="list-product__body-items-description-name"
                                >{{ categoryRelation.name }}</a
                              >
                            </router-link>
                            <div
                              class="list-product__body-items-description-price"
                            >
                              <span
                                class="list-product__body-items-description-price-base"
                                >{{ categoryRelation.originalPrice }}</span
                              >
                            </div>
                          </div>
                          <div class="list-product__like">
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
</template>

<script>
export default {
  name: "ProductComponent",
  data() {
    return {};
  },
  computed: {
    categoryTypes() {
      return this.$store.state.category;
    },
    categoryRelations() {
      return this.$store.state.categoryRelation;
    },
  },
};
</script>

<style scoped></style>
