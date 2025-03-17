let contactFunc = function () {
  let divContent = document.querySelector("#content");

  // Create contact headline
  let contactHeadline = document.createElement("div");
  contactHeadline.className = "contactHeadline";
  contactHeadline.textContent = "Contact Us";

  // Create person 1
  let person1 = document.createElement("div");
  person1.className = "person";

  // Create person 1 name and info
  let personName = document.createElement("p");
  personName.className = "personName";
  personName.textContent = "Big Shot";

  let personInfo = document.createElement("p");
  personInfo.className = "personInfo";
  personInfo.textContent = `Manager\n555-555-5555\niamTheManager@gmail.com`;

  // Append elements to person1
  person1.append(personName, personInfo);

  // Clear and append to divContent
  divContent.innerHTML = "";
  divContent.append(contactHeadline, person1);
};

export default contactFunc;
