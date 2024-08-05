import "styles/fonts.css";
import "styles/reset.css";
import "styles/header.css";

import { homepageComponent } from "js/home-page.js";
import { menupageComponent } from "js/menu-page";
import { aboutpageComponent } from "js/about-page";

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const abtBtn = document.querySelector(".abt-btn");
let curFocus = { curBtn: homeBtn, curName: "home" };

const toggleFocus = (nextTab = curFocus.curBtn, tabName = curFocus.curName) => {
  curFocus.curBtn = nextTab;
  curFocus.curName = tabName;

  curFocus.curBtn.classList.toggle("focus");
  content.classList.toggle(curFocus.curName);
};

window.addEventListener("DOMContentLoaded", () => {
  homeBtn.addEventListener("click", () => {
    toggleFocus();
    content.innerHTML = ``;
    homepageComponent();
    toggleFocus(homeBtn, "home");
  });

  menuBtn.addEventListener("click", () => {
    toggleFocus();
    content.innerHTML = ``;
    menupageComponent();
    toggleFocus(menuBtn, "menu");
  });

  abtBtn.addEventListener("click", () => {
    toggleFocus();
    content.innerHTML = ``;
    aboutpageComponent();
    toggleFocus(abtBtn, "about");
  });

  toggleFocus();
  homepageComponent();
});
