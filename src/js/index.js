import "styles/fonts.css";
import "styles/reset.css";
import "styles/header.css";

import {homepageComponent} from "js/home-page.js"

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const abtBtn = document.querySelector(".abt-btn");
let curTab = homeBtn;

const toggleFocus = (nextTab = curTab) => {
  curTab = nextTab;
  curTab.classList.toggle("focus");
};

window.addEventListener("DOMContentLoaded", () => {
  homeBtn.addEventListener("click", () => {
    toggleFocus();
    homepageComponent();
    toggleFocus(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    toggleFocus();
    toggleFocus(menuBtn);
  });

  abtBtn.addEventListener("click", () => {
    toggleFocus();
    toggleFocus(abtBtn);
  });

  toggleFocus(homeBtn);
  homepageComponent();
});