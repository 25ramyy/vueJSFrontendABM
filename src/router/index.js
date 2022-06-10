import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "Quienes Somos",
    //esta forma permite lazy-load es decir que la carga del html + el java script se cargue al
    //momento de llamar a la pagina, si lo hacemos como en Home, se carga al iniciar la aplicación
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/destino",
    name: "Donde Estamos",
    component: () => import("../views/Destino.vue")
  },
  {
    path: "/detalle/:id",
    name: "DetalleInstrumento",
    component: () => import("../views/DetalleInstrumento.vue")
  },
  {
    path: "/Suba",
    name: "Suba",
    component: () => import("../views/Suba.vue")
  },
  {
    path: "/Baja",
    name: "Baja",
    component: () => import("../views/Baja.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
