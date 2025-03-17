import logo from "./images/logo.jpg";

let pageLoadFunc = function () {
  // Reset body bg color
  let body = document.querySelector("body");
  body.style.backgroundColor = "rgb(214, 151, 25)";

  let divContent = document.querySelector("#content");
  let restoName = document.createElement("h1");
  let para = document.createElement("p");
  para.id = "solgan";
  let image = document.createElement("img");
  image.id = "logo";
  image.src = logo;

  restoName.textContent = "Out-n-In";
  para.textContent = "The best burgers in town!";

  // Clear and append to divContent
  divContent.innerHTML = "";
  divContent.append(restoName, image, para);
};

export default pageLoadFunc;
