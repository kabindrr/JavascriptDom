// console.log("hehehe");
// alert("warning");
// const elmById = document.getElementById("first");
// console.log(elmById);

// const elmByClass = document.getElementsByClassName("first");
// console.log(elmByClass);

// const value = document.getElementById("first");
// const valueText = value.innerText;
// console.log(valueText);

// const value = document.querySelector(".first");
// // // console.log(value);
// // // const valueR = value.innerText;
// // const valueS = value.innerHTML;
// // // console.log(valueR);
// // console.log(valueS);
// document.write("hey adding new text from script");
// const valueR = value.innerHTML;
// console.log(valueR);

// const element = document.querySelector(".first");
// element.innerHTML = "<h1> Hey just got an updated message from script </h1>";

// const elm = document.querySelector("body");

// // const paraElm = document.createElement("p");
// // console.log(paraElm);
// // paraElm.innerText = "Hi this is the paragraph from script";

// // const textNode = document.createTextNode("Hi this is dynamic content");
// // elm.appendChild(textNode);

// // console.log(elm);

// elm.removeChild(document.querySelector([(href = "google.com")]));

const googleElm = document.querySelector("[href='google.com']");

googleElm.style.fontSize = "2rem";
googleElm.style.color = "red";
googleElm.style.textDecoration = "none";

///Attributes in DOM

const attbr = googleElm.getAttribute("style");
console.log(attbr);

document
  .querySelector(".display")
  .setAttribute(
    "style",
    "font-size:2rem;color:green;text-decoration:underline"
  );
