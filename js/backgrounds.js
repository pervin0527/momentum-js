const images = ["img01.jpg", "img02.jpg", "img03.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

// js에서 html을 제작하는 방법.
const bgImage =  document.createElement("img");
bgImage.src = `imgs/${chosenImage}`;
console.log(bgImage)

document.body.appendChild(bgImage)