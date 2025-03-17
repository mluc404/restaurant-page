import beesechurger from "./images/burger.jpeg";
import fries from "./images/animal_fries.jpg";
import shake from "./images/shake.jpeg";
let menuFunc = function () {
  let divContent = document.querySelector("#content");
  let body = document.querySelector("body");

  // Change body bg color
  //   body.style.backgroundColor = "rgb(98, 65, 0)";

  // Create Menu headline
  let menuHeadline = document.createElement("div");
  menuHeadline.className = "menuHeadline";
  menuHeadline.textContent = "Le Menu";

  // Create item 1
  let item1 = document.createElement("div");
  item1.className = "item";

  // Item 1 image
  let image1 = document.createElement("img");
  image1.src = beesechurger;

  // Create item1 1 name and info
  let item1Name = document.createElement("p");
  item1Name.className = "itemName";
  item1Name.textContent = "The Classic Beese Churger";

  let item1Info = document.createElement("p");
  item1Info.className = "itemInfo";
  item1Info.textContent = `Fresh Patty\nFake Cheese\nLettuce Sucks`;

  // Append elements to item1
  item1.append(item1Name, image1, item1Info);

  ///////////////////////////////////////////
  // Create item 2
  let item2 = document.createElement("div");
  item2.className = "item";

  // Item 2 image
  let image2 = document.createElement("img");
  image2.src = fries;

  // Create item2 name and info
  let item2Name = document.createElement("p");
  item2Name.className = "itemName";
  item2Name.textContent = "You Animals!";

  let item2Info = document.createElement("p");
  item2Info.className = "itemInfo";
  item2Info.textContent = `Potatoes\nGrilled Onions\nAwesome Sauce!!`;

  // Append elements to item2
  item2.append(item2Name, image2, item2Info);

  ///////////////////////////////////////////
  // Create item 3
  let item3 = document.createElement("div");
  item3.className = "item";

  // Item 3 image
  let image3 = document.createElement("img");
  image3.id = "image3";
  image3.src = shake;

  // Create item3 name and info
  let item3Name = document.createElement("p");
  item3Name.className = "itemName";
  item3Name.textContent = "Shake It!!!!!";

  let item3Info = document.createElement("p");
  item3Info.className = "itemInfo";
  item3Info.textContent = `Milk\nSugar\nIce Ice Baby`;

  // Append elements to item3
  item3.append(item3Name, image3, item3Info);

  ///////////////////////////////////////////////
  // Create a grid and append items
  let itemGrid = document.createElement("div");
  itemGrid.className = "itemGrid";
  itemGrid.append(item1, item2, item3);

  // Clear and append to divContent
  divContent.innerHTML = "";
  divContent.append(menuHeadline, itemGrid);
};

export default menuFunc;
