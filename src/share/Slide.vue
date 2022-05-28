<template>
  <div class="app-slideshow">
    <div class="app-slideshow-wrap slideshow-wrap grid" style="height: 600px">
      <div
        v-if="slide === 1"
        class="app-slideshow-content__slides-img slideshow-content__slides-img"
      >
        <img
          src="/fontend/asset/images/product/IMG_0887.jpg"
          style="width: 100%"
          alt=""
        />
      </div>

      <div
        v-if="slide === 2"
        class="app-slideshow-content__slides-img slideshow-content__slides-img"
      >
        <img
          src="/fontend/asset/images/product/IMG_1134.jpg"
          style="width: 100%"
          alt=""
        />
      </div>

      <div
        v-if="slide === 3"
        class="app-slideshow-content__slides-img slideshow-content__slides-img"
      >
        <img
          src="/fontend/asset/images/product/IMG_3370.jpg"
          style="width: 100%"
          alt=""
        />
      </div>

      <div
        v-if="slide === 4"
        class="app-slideshow-content__slides-img slideshow-content__slides-img"
      >
        <img
          src="/fontend/asset/images/product/IMG_3242.jpg"
          style="width: 100%"
          alt=""
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
</template>

<script>
export default {
  name: "SlideComponent",
  data() {
    return {
      isShow: false,
      slide: 1,
      totalSlide: 3,
    };
  },
  methods: {
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
  },
};
</script>

<style scoped></style>
