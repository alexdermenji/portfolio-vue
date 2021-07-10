<template>
  <div class="login-page-component">
    <div class="content">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-title">Авторизация</div>
        <div class="row">
          <app-input
            title="Логин"
            v-model="user.name"
            icon="user"
            :errorText="validation.firstError('user.name')"
          />
        </div>
        <div class="row">
          <app-input
            title="Пароль"
            v-model="user.password"
            icon="key"
            type="password"
            :errorText="validation.firstError('user.password')"
          />
        </div>
        <div class="btn">
          <app-button :disabled="isSubmitDisabled" title="Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import $axios from "../../requests";

export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      isSubmitDisabled: false,
    };
  },
  components: { appButton, appInput },
  methods: {
    handleSubmit() {
      // this.$validate().then((isValid) => {
      //   if (isValid === false) return;
      // });
      this.isSubmitDisabled = true;
      $axios
        .post("/login", this.user)
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.$router.replace("/");
          console.log(token);
        })
        .catch((error) => {
          console.log(error.response.data.error);
        })
        .finally(() => {
          this.isSubmitDisabled = false;
        });
    },
  },
  mixins: [ValidatorMixin],
  validators: {
    "user.name": (value) => {
      return Validator.value(value).required("Enter login");
    },
    "user.passwword": (value) => {
      return Validator.value(value).required("Enter password ");
    },
  },
};
</script>

<style lang="postcss" scoped src="./login.pcss"></style>
