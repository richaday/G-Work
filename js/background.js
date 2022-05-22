const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//console.log(chosenImage);

//html에 img태그 추가하기
const bgImage = document.createElement("img");
bgImage.classList.add("bgImg");

bgImage.src = `images/${chosenImage}`; //경로 넣기

document.body.appendChild(bgImage); //append : body 맨 뒤에, prepend : body 맨 처음에!!