let imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

let randomIndex = Math.floor(Math.random() * imageNames.length);

let randomImageName = imageNames[randomIndex];

let imageElement = document.createElement('img');

imageElement.src = 'images/' + randomImageName;

document.getElementById('imageContainer').appendChild(imageElement);