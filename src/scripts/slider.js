import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

new Vue({
  el: "#slider-component",
  components: {
    Swiper,
    SwiperSlide,
  },
  template: "#slider-container",
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
          480: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`).default;
        item.pic = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;
      switch (direction) {
        case "next":
          slider.slideNext();
          break;
        case "prev":
          slider.slidePrev();
          break;
      }
    },
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  },
});
