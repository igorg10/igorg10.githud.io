const slideImg = document.querySelector('.header');
const slideText = document.querySelector('.header_left_title');

const photoArr = ['url(/img-med.jpg)','url(/img-business.jpg)', 'url(/img-engineering.jpg)', 'url(/img-it.jpg)', 'url(/img-aviation.jpg)', 'url(/img-other.jpg)']
const textArr = ['MEDICINA', 'BUSINESS', 'ENGINEERING', 'COMPUTER', 'AVIATION', 'OTHER']

let curentIndex = 0;
let curentIndexText = 0;

function nextIndex(derectionImg) {
    curentIndex += derectionImg;    
    if (curentIndex >= photoArr.length) {
        curentIndex = 0;
    } else if (curentIndex < 0) {
        curentIndex = photoArr.length - 1;
    }    
    slideImg.style.backgroundImage = photoArr[curentIndex];    
}

function nextIndexText(derectionText) {
    curentIndexText += derectionText;    
    if (curentIndexText >= textArr.length) {
        curentIndexText = 0;
    } else if (curentIndexText < 0) {
        curentIndexText = textArr.length - 1;
    }
    slideText.innerHTML = textArr[curentIndexText];
}
