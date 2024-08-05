import "styles/home-page.css";

import PastaImg from "media/pasta.webp";
import MacaronImg from "media/macaron.webp";
import OysterImg from "media/oyster.webp";
import SoupImg from "media/soup.webp";

const content = document.querySelector("#content");

const createLeftCol = () => {
  const leftCol = document.createElement("div");
  leftCol.classList.add("left-col");
  
  const pastaImg = new Image();
  pastaImg.src = PastaImg;
  pastaImg.alt = "pasta dish";

  const macaronImg = new Image();
  macaronImg.src = MacaronImg;
  macaronImg.alt = "macaron and coffee dish";

  leftCol.appendChild(pastaImg);
  leftCol.appendChild(macaronImg);

  return leftCol;
};

const createRightCol = () => {
  const rightCol = document.createElement("div");
  rightCol.classList.add("right-col");

  const oysterImg = new Image();
  oysterImg.src = OysterImg;
  oysterImg.alt = "oyster dish";

  const soupImg = new Image();
  soupImg.src = SoupImg;
  soupImg.alt = "soup dish";

  rightCol.appendChild(oysterImg);
  rightCol.appendChild(soupImg);

  return rightCol;
}

const homepageComponent = () => {
  const leftCol = createLeftCol();
  const rightCol = createRightCol();

  content.appendChild(leftCol);
  content.appendChild(rightCol);
};

export { homepageComponent };
