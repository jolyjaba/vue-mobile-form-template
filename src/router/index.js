import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "welcome-page" */ "../views/Welcome.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login-page" */ "../views/Login/Login.vue")
  },
  {
    path: "/recover-password",
    name: "recover_password",
    component: () =>
      import(
        /* webpackChunkName: "recover-page" */ "../views/Recovery/RecoverPassword.vue"
      )
  },
  {
    path: "/send-off-message",
    name: "send_off_message",
    component: () =>
      import(
        /* webpackChunkName: "send-off-message" */ "../views/Recovery/SendOffMessage.vue"
      )
  },
  {
    path: "/set-new-password",
    name: "set_new_password",
    component: () =>
      import(
        /* webpackChunkName: "set-new-password" */ "../views/Recovery/SetNewPassword.vue"
      )
  },
  {
    path: "/success-saved-message",
    name: "success_saved_message",
    component: () =>
      import(
        /* webpackChunkName: "success-saved-message" */ "../views/Recovery/SuccessSavedMessage.vue"
      )
  },
  {
    path: "/registration/:step",
    name: "registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/Registration/Registration.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.params?.step) {
    const { step } = to.params;
    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+step)) next(false);
    else next();
  } else {
    next();
  }
});

export default router;
