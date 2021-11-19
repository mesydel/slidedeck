import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from "@/views/Base.vue";

Vue.use(VueRouter);

var base_title = "Mesydel Slidedeck :: ";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Base,
    meta: {
      title: "Welcome to ..."
    },
  },
  {
    path: "/base/",
    name: base_title + "Base slides ",
    component: Base,
  },
 


];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
  routes,
});

export default router;
