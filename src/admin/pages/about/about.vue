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
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
            ></category>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../../components/user";
import button from "../../components/button";
import category from "../../components/category";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      emptyCatIsShown: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
    }),
    async createSkill(skill, categoryId) {
      const newSkill = {
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);
      skill.title = "";
      skill.percent = "";
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    this.fetchCategoriesAction();
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
