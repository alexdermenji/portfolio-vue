<template>
  <div class="skill-component" v-if="editmode === false">
    <div class="title">{{ skill.title }}</div>
    <div class="percent">{{ skill.percent }}</div>
    <div class="buttons">
      <icon symbol="pencil" class="btn" @click="editmode = true" grayscale />
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
      <icon symbol="cross" class="btn" @click="editmode = false" />
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
      editmode: false,
      errorTextTitle: "",
      errorTextPercent: "",
      currentSkill: {
        id: 0,
        title: this.skill.title,
        percent: this.skill.percent,
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

      // if (this.value.trim() === "") {
      //   this.errorText = "Field is empty";
      // }
    },
  },
  components: {
    icon,
    appInput: input,
  },
};
</script>

<style lang="postcss" src="./skill.pcss" scoped></style>
