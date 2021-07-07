<template>
  <div class="user-component">
    <avatar :size="'3'" :src="userPic" />
    <div class="username">Alex Dermenji</div>
  </div>
</template>

<script>
import avatar from "../avatar";
export default {
  components: { avatar },
  computed: {
    userPic() {
      return require("../../../images/content/alex.jpg").default;
    },
  },
};
</script>

<style>
.user-component {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}

.username {
  margin-left: 18px;
  color: #fff;
}
</style>
