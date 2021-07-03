<template>
  <div class="headline-component">
    <div class="container headline-container">
      <slot />
      <div class="title">{{ title }}</div>
      <div class="buttons">
        <button type="button" class="btn">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Admin panel",
    },
  },
};
</script>

<style scoped lang="postcss" src="./headline.pcss"></style>
