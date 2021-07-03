<template>
  <div class="app-container">
    <headline title="Admin panel">
      <user />
    </headline>
    <navigation></navigation>
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Section "About me"</div>
          <iconed-button
            type="iconed"
            v-if="emptyCatIsShown === false"
            @click="emptyCatIsShown = true"
            title="Add section"
          />
        </div>

        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category empty @remove="emptyCatIsShown = false"></category>
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category
              :title="category.category"
              :skills="category.skills"
            ></category>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "./components/headline";
import user from "./components/user";
import navigation from "./components/navigation";
import iconedButton from "./components/button";
import category from "./components/category";

export default {
  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
    };
  },

  created() {
    this.categories = require("./data/categories.json");
  },
  components: {
    headline,
    user,
    navigation,
    iconedButton,
    category,
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>
