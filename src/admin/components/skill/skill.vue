<template>
  <div class="skill-component" v-if="currentSkill.editmode === false">
    <div class="title">{{ skill.title }}</div>
    <div class="percent">{{ skill.percent }}</div>
    <div class="buttons">
      <icon
        symbol="pencil"
        class="btn"
        @click="currentSkill.editmode = true"
        grayscale
      />
      <icon
        symbol="trash"
        class="btn"
        @click="$emit('remove', skill.id)"
        grayscale
      />
    </div>
  </div>

  <div class="skill-component" v-else>
    <div class="title">
      <app-input
        noSidePaddings
        :errorText="errorTextTitle"
        v-model="currentSkill.title"
      />
    </div>
    <div class="percent">
      <app-input
        :errorText="errorTextPercent"
        v-model="currentSkill.percent"
        type="number"
        min="0"
        max="100"
        maxlength="3"
      />
    </div>
    <div class="buttons">
      <icon symbol="tick" class="btn" @click="onApprove" />
      <icon symbol="cross" class="btn" @click="currentSkill.editmode = false" />
    </div>
  </div>
</template>

<script>
import input from "../input";
import icon from "../icon";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      errorTextTitle: "",
      errorTextPercent: "",
      currentSkill: {
        id: this.skill.id,
        title: this.skill.title,
        percent: this.skill.percent,
        category: this.skill.category,
        editmode: false,
      },
    };
  },
  methods: {
    onApprove() {
      if (this.currentSkill.title.trim() === "") {
        this.errorTextTitle = "Please fill the field";
      }
      if (this.currentSkill.percent.trim() === "") {
        this.errorTextPercent = "nothing in the field";
      }
    },
  },
  components: {
    icon,
    appInput: input,
  },
};
</script>

<style lang="postcss" src="./skill.pcss" scoped></style>
