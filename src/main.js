import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/styles.css";
// import './assets/main.css';

// fortawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab);


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Emitter Config

import mitt from "mitt";
const Emitter = mitt();
// vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

  import "./assets/css/animate.css";
  import WOW from "./assets/js/wow.min.js";
  
  //  Wow.js
  const wow = new WOW();
  wow.init();
  