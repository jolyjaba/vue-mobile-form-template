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
      <p class="fs24 ls04 mb24">
        Восстановление пароля
      </p>
      <input
        v-model="getNewPassword"
        class="input"
        type="password"
        placeholder="Придумайте новый пароль"
      />
      <input
        v-model="getNewPasswordRepeat"
        class="input"
        type="password"
        placeholder="Повторите пароль"
      />
      <button class="button fs17" @click.prevent="nextStep">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SetNewPassword",
  data() {
    return {
      newPassword: "",
      newPasswordRepeat: ""
    };
  },
  computed: {
    ...mapGetters({
      _getNewPassword: "getNewPassword",
      _getNewPasswordRepeat: "getNewPasswordRepeat"
    }),
    getNewPassword: {
      get() {
        return this._getNewPassword;
      },
      set(newPassword) {
        this.setNewPassword({ newPassword });
        this.newPassword = newPassword;
      }
    },
    getNewPasswordRepeat: {
      get() {
        return this._getNewPasswordRepeat;
      },
      set(newPasswordRepeat) {
        this.setNewPasswordRepeat({ newPasswordRepeat });
        this.newPasswordRepeat = newPasswordRepeat;
      }
    }
  },
  methods: {
    ...mapMutations({
      setNewPassword: "setNewPassword",
      setNewPasswordRepeat: "setNewPasswordRepeat"
    }),
    nextStep() {
      this.$router.push("/success-saved-message");
    },
    prevPage() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped></style>
