<template>
  <div :class="['skill-add-line-component', { blocked: blocked }]">
    <div class="title">
      <app-input
        placeholder="Новый навык"
        :errorText="textInputError"
        v-model="skill"
      />
    </div>
    <div class="percent">
      <app-input
        v-model="percent"
        type="number"
        min="0"
        max="100"
        maxlength="3"
        :errorText="percentInputError"
      />
    </div>
    <div class="button">
      <round-button type="round" @click="onApprove" />
    </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
export default {
  data() {
    return {
      skill: "",
      percent: "",
      textInputError: "",
      percentInputError: "",
    };
  },

  props: {
    blocked: Boolean,
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  methods: {
    onApprove() {
      if (this.skill.trim() === "") {
        this.textInputError = "Field is empty";
      }
      if (this.percent.trim() === "") {
        this.percentInputError = "Field is empty";
      }
    },
  },
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>
