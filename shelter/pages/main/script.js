import burgerSubscribe from "../../assets/js_modules/burger.js";
import { modalSubscribe } from "../../assets/js_modules/popup.js";
import slideSubscribe from "../../assets/js_modules/sliderMain.js";

window.onload = () => {
  burgerSubscribe();
  modalSubscribe();
  slideSubscribe();
};
