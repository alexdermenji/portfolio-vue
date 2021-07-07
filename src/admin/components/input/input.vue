<template>
  <label
    class="input"
    v-if="fieldType === 'input'"
    :class="[
      { input_labeled: !!title, 'no-side-paddings': noSidePaddings },
      iconClass,
      { error: !!errorText && !inputValue },
    ]"
  >
    <div class="title" v-if="title">{{ title }}</div>

    <input
      class="input__elem field__elem"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-model="inputValue"
    />
    <div class="input__error-tooltip">
      <tooltip :text="errorText"> </tooltip>
    </div>
  </label>
  <label
    class="textarea"
    v-else-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :class="{ error: !!errorMessage }"
  >
    <div class="title" v-if="title">{{ title }}</div>
    <textarea
      class="textarea__elem field__elem"
      :value="value"
      :class="{ error: !!errorMessage }"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <div class="input__error-tooltip">
      <tooltip :text="errorMessage"></tooltip>
    </div>
  </label>
</template>

<script>
import { Validator } from "simple-vue-validator";

export default {
  data() {
    return {
      inputValue: this.value,
    };
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    value(value) {
      return Validator.value(value).required(this.errorText);
    },
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    noSidePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input",
    },
    value: String | Number,
    icon: {
      type: String,
      default: "",
      validator: (value) => ["", "user", "key"].includes(value),
    },
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    },
  },
  components: {
    tooltip: () => import("components/tooltip"),
  },
};
</script>

<style lang="postcss" scoped src="./input.pcss"></style>
