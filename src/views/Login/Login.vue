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
      <p class="fs24 ls04 mb24">Войти</p>
      <input
        class="input"
        type="email"
        name="login_email"
        placeholder="Введите почту"
      />
      <input
        class="input"
        type="password"
        name="login_password"
        placeholder="Введите пароль"
      />
      <button class="button fs17" @click.prevent="nextStep">Войти</button>
      <router-link class="link" to="/recover-password">
        Забыли пароль?
      </router-link>
    </div>
    <div class="login__footer df fdc aic p0--16--40">
      <p>
        Нет аккаунта?
        <router-link class="link" to="/registration/1">
          Пройдите регистрацию
        </router-link>
      </p>
      <p class="guide fs12">
        Получите доступ к онлайн сервису у Вашего врача или позвоните
        <a class="link" href="tel:+7 (771) 762 7077">+7 (771) 762 7077</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    nextStep() {
      console.log("Успешная авторизация!");
    },
    prevPage() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.guide {
  margin-top: 24px;
}

.button {
  margin-bottom: 24px;
}

.login {
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__footer {
    justify-content: flex-end;
  }
}
</style>
