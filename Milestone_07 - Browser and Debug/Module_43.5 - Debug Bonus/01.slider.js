const image = [
    'img/1.JPG',
    'img/2.JPG',
    'img/3.JPG',
    'img/4.JPG',
    'img/5.JPG',
    'img/6.JPG',
    'img/7.JPG',
    'img/8.JPG',
];

let imgIndex = 0
const img = document.getElementById('slider');
setInterval(() => {
    if (imgIndex >= image.length) {
        imgIndex = 0;
    }
    const imgUrl = image[imgIndex];
    img.setAttribute('src',imgUrl)
    imgIndex++;
},1000)