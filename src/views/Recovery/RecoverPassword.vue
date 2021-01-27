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
      <p class="title fs24 ls04 mb24">
        Введите почту чтобы восстановить пароль
      </p>
      <input
        v-model="getEmail"
        class="input"
        type="email"
        name="login_email"
        placeholder="Введите почту"
      />
      <button class="button fs17" @click.prevent="nextStep">
        Восстановить
      </button>
      <router-link class="link" to="/login">
        Вспомнил пароль
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "RecoverPassword",
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters({
      _getEmail: "getEmail"
    }),
    getEmail: {
      get() {
        return this._getEmail;
      },
      set(email) {
        this.setEmail({ email });
        this.email = email;
      }
    }
  },
  methods: {
    ...mapMutations({
      setEmail: "setEmail"
    }),
    nextStep() {
      this.$router.push("/send-off-message");
    },
    prevPage() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin-bottom: 24px;
}
</style>
