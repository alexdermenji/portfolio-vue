<template>
  <div class="about-page-component">
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
            <category
              empty
              @remove="emptyCatIsShown = false"
              @approve="createCategory"
            ></category>
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
import user from "../../components/user";
import iconedButton from "../../components/button";
import category from "../../components/category";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // categories: [],
      emptyCatIsShown: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data,
    }),
  },
  created() {
    this.categories = require("../../data/categories.json");
  },
  components: {
    user,
    iconedButton,
    category,
  },
  methods: {
    createCategory(categoryTitle) {
      try {
        this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        console.log(error.message);
      }
    },

    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoryAction: "categories/fetch",
    }),
  },
};
</script>

<style scoped>
.header {
  display: flex;
  margin-bottom: 53px;
}

.about-page-component {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  padding: 60px 0 20px;
  background: url("../../../images/bg/admin.jpg") center center / cover
    no-repeat;
}

.title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: 700;
  color: #414c63;
}

.skills {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  width: calc(100% / 2 - 30px);
}
</style>
