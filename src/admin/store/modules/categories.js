export default {
  namespaced: true,
  state: {
    data: [],
  },

  actions: {
    create({ commit }, title) {
      try {
        this.$axios.post("/categories", { title }).then((response) => {
          commit("ADD_CATEGORY", response.data);
        });
      } catch (error) {
        throw new Error("Error");
        console.log(error);
      }
    },
    fetch({ commit }) {
      try {
        this.$axios.get("/categories/1").then((response) => {
          commit("SET_CATEGORIES", response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
  },
};
