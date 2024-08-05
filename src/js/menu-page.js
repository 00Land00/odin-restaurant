import "styles/menu-page.css";

import PastaImg from "media/pasta.webp";
import MacaronImg from "media/macaron.webp";
import OysterImg from "media/oyster.webp";
import SoupImg from "media/soup.webp";
import UpIcon from "media/chevron-up.svg";
import DownIcon from "media/chevron-down.svg";

const content = document.querySelector("#content");

const menuObj = {
  curItem: 0,
  menu: [
    {
      title: "Pancetta with Truffles and Bacon",
      price: 22.99,
      get img() {
        const pastaImg = new Image();
        pastaImg.src = PastaImg;
        pastaImg.alt = "pasta dish";
        return pastaImg;
      },
      desc: "Crispy golden fries topped with rich truffle oil, wild mushrooms, crispy pancetta, and a creamy garlic aioli, garnished with fresh parsley.",
    },
    {
      title: "Macaron and Coffee",
      price: 12.99,
      get img() {
        const macaronImg = new Image();
        macaronImg.src = MacaronImg;
        macaronImg.alt = "macaron dish";
        return macaronImg;
      },
      desc: "Whether you're enjoying a leisurely afternoon or a sophisticated evening, our Macaron and Coffee combination promises an unforgettable experience of culinary delight.",
    },
    {
      title: "Steamed Oyster in White Wine Sauce",
      price: 20.99,
      get img() {
        const oysterImg = new Image();
        oysterImg.src = OysterImg;
        oysterImg.alt = "oyster dish";
        return oysterImg;
      },
      desc: "Freshly steamed clams simmered in a delicate white wine and garlic broth, finished with a squeeze of lemon and garnished with fresh parsley. Served with rustic bread for dipping.",
    },
    {
      title: "Carrot and Coconut Curry",
      price: 15.99,
      get img() {
        const oysterImg = new Image();
        oysterImg.src = SoupImg;
        oysterImg.alt = "soup dish";
        return oysterImg;
      },
      desc: "A velvety blend of roasted carrots and creamy coconut milk, infused with aromatic curry spices and garnished with fresh cilantro and golden raisins. Served with a side of crusty bread for a hearty and comforting meal.",
    },
  ],
};

const prevEH = () => {
  menuObj.curItem = ((menuObj.curItem - 1) + menuObj.menu.length) % menuObj.menu.length;
  populateMenuPageComponent();
};

const nextEH = () => {
  menuObj.curItem = (menuObj.curItem + 1) % menuObj.menu.length;
  populateMenuPageComponent();
};

const populateMenuPageComponent = () => {
  const curMenu = menuObj.menu[menuObj.curItem];

  const leftCol = document.querySelector(".left-col");
  leftCol.innerHTML = ``;
  leftCol.appendChild(curMenu.img);

  const itemTitle = document.querySelector(".item-title");
  itemTitle.innerHTML = curMenu.title;
  itemTitle.setAttribute("data-price", `($${curMenu.price})`);
  const itemDesc = document.querySelector(".item-desc");
  itemDesc.innerHTML = curMenu.desc;
};

const createLeftCol = () => {
  const curMenu = menuObj.menu[menuObj.curItem];

  const leftCol = document.createElement("div");
  leftCol.classList.add("left-col");
  leftCol.appendChild(curMenu.img);

  return leftCol;
};

const createRightCol = () => {
  const curMenu = menuObj.menu[menuObj.curItem];

  const rightCol = document.createElement("div");
  rightCol.classList.add("right-col");

  const upSvg = new Image();
  upSvg.src = UpIcon;
  upSvg.alt = "up";
  upSvg.classList.add("prev-menu");
  upSvg.addEventListener("click", prevEH);

  const itemContainer = document.createElement("div");
  const itemTitle = document.createElement("h1");
  itemTitle.classList.add("item-title");
  itemTitle.innerHTML = curMenu.title;
  itemTitle.setAttribute("data-price", `($${curMenu.price})`);
  const itemDesc = document.createElement("p");
  itemDesc.classList.add("item-desc");
  itemDesc.innerHTML = curMenu.desc;
  itemContainer.appendChild(itemTitle);
  itemContainer.appendChild(itemDesc);

  const downSvg = new Image();
  downSvg.src = DownIcon;
  downSvg.alt = "down";
  downSvg.classList.add("next-menu");
  downSvg.addEventListener("click", nextEH);

  rightCol.appendChild(upSvg);
  rightCol.appendChild(itemContainer);
  rightCol.appendChild(downSvg);

  return rightCol;
};

const menupageComponent = () => {
  const leftCol = createLeftCol();
  const rightCol = createRightCol();

  content.appendChild(leftCol);
  content.appendChild(rightCol);
};

export { menupageComponent };
