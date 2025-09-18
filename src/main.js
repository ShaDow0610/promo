import { createApp, watch } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { i18n, setLocaleAsync } from "./i18n";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(i18n);
// charge au moins la langue par défaut avant le mount
setLocaleAsync("fr").then(() => {
  app.mount("#app");
});
