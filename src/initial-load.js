import burgerImag from "./images/burger.jpeg";

let pageLoadFunc = function () {
  let divContent = document.querySelector("#content");
  let restoName = document.createElement("h1");
  let para = document.createElement("p");
  let image = document.createElement("img");
  image.src = burgerImag;

  restoName.textContent = "Out-n-In";
  para.textContent = "The best burgers in town!";

  // Clear and append to divContent
  divContent.innerHTML = "";
  divContent.append(restoName, image, para);
};

export default pageLoadFunc;
