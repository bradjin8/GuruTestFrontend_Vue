import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/views/theme/Base"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/views/pages/Dashboard.vue")
        }
      ]
    },
      {
          path: "/",
          component: () => import("@/views/pages/auth/Auth"),
          children: [
              {
                  name: "login",
                  path: "/login",
                  component: () => import("@/views/pages/auth/Login")
              },
              {
                  name: "register",
                  path: "/register",
                  component: () => import("@/views/pages/auth/Register")
              }
          ]
      },
    {
      path: "*",
      redirect: "/404"
    },

    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/views/pages/error/Error-1.vue")
    }
  ]
});
