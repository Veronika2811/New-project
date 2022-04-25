import burgerSubscribe from "../../assets/js_modules/burger.js";
import { modalSubscribe } from "../../assets/js_modules/popup.js";
import paginationSubscribe from "../../assets/js_modules/paginationPets.js";

window.onload = () => {
  burgerSubscribe();
  modalSubscribe();
  paginationSubscribe();
};