<template>
  <div class="dg gtr--r-3-1fr">
    <div class="df fdc jcc aic prel">
      <div class="navigation_bar w100">
        <img
          src="@/assets/svg/back-icon.svg"
          alt="back-icon"
          @click.prevent="prevPage"
        />
      </div>
      <picture class="icon s05">
        <img class="logo" src="@/assets/svg/logo_vitalem.svg" alt="logo" />
        <img class="inc" src="@/assets/svg/vitalem_text.svg" alt="inc" />
      </picture>
    </div>
    <div class="login__body df fdc aic p0--16">
      <p class="title fs24 ls04">
        Ваш новый пароль сохранен
      </p>
      <router-link class="link mt40" to="/login">
        Перейти на страницу авторизации
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessSavedMessage",
  methods: {
    prevPage() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped></style>
