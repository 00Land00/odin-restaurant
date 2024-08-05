import "styles/about-page.css";

import Couple1 from "media/couple-1.webp";
import Couple2 from "media/couple-2.webp";
import Couple3 from "media/couple-3.webp";

const content = document.querySelector("#content");

const coupleObj = {
  curIndex: 0,
  couple: [
    {
      get img() {
        const c = new Image();
        c.src = Couple1;
        c.alt = "couple 1";
        return c;
      }
    },
    {
      get img() {
        const c = new Image();
        c.src = Couple2;
        c.alt = "couple 2";
        c.classList.add("invisible");
        return c;
      }
    },
    {
      get img() {
        const c = new Image();
        c.src = Couple3;
        c.alt = "couple 3";
        c.classList.add("invisible");
        return c;
      }
    }
  ]
}

const createLeftCol = () => {
  const leftCol = document.createElement("div");
  leftCol.classList.add("left-col");

  const title = document.createElement("h1");
  title.classList.add("about-title");
  title.innerHTML = `ABOUT US`;

  const desc = document.createElement("p");
  desc.innerHTML =
    "At <em>The Special</em>, we meticulously curate our menus to feature the finest ingredients, innovative recipes, and a touch of elegance in every dish. From the moment you walk through our doors, you’ll feel the warmth and inviting atmosphere we’ve carefully designed to reflect our commitment to exceptional service and attention to detail.";

  leftCol.appendChild(title);
  leftCol.appendChild(desc);

  return leftCol;
};

const createRightCol = () => {
  const rightCol = document.createElement("div");
  rightCol.classList.add("right-col");

  coupleObj.couple.forEach(c => {
    rightCol.appendChild(c.img);
  });

  setInterval(() => {
    rightCol.children[coupleObj.curIndex].classList.add("invisible");
    coupleObj.curIndex = (coupleObj.curIndex + 1) % coupleObj.couple.length;
    rightCol.children[coupleObj.curIndex].classList.remove("invisible");
  }, 5000);

  return rightCol;
};

const aboutpageComponent = () => {
  const leftCol = createLeftCol();
  const rightCol = createRightCol();

  content.appendChild(leftCol);
  content.appendChild(rightCol);
};

export { aboutpageComponent };
