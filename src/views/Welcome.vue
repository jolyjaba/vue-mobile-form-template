<template>
  <div class="welcome">
    <div class="df fdc jcc aic p16--16--0">
      <picture class="icon">
        <img class="logo" src="@/assets/svg/logo_vitalem.svg" alt="logo" />
        <img class="inc" src="@/assets/svg/vitalem_text.svg" alt="inc" />
      </picture>
      <p class="title fs24 ls04 fw500">Секреты Моего Здоровья</p>
    </div>
    <div class="welcome__footer df fdc aic p0--16--40">
      <p class="welcome__rules fs14">
        Нажимая Далее, вы соглашаетесь с
        <router-link class="link" to="/rule">правами</router-link> и
        <router-link class="link" to="/rule">
          пользовательским соглашением
        </router-link>
        нашего сервиса
      </p>
      <button class="button fs17" @click.prevent="nextStep">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    nextStep() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  display: grid;
  grid-template-rows: 1fr auto;
  &__rules {
    // text-indent: 15px;
    // margin: 0 4px;
    margin-bottom: 26px;
    max-width: 320px;
  }
}
</style>
