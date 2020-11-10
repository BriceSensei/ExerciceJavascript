const imageOne = document.getElementById('spiderman');

imageOne.onclick = function () {

    if (imageOne.src.match('assets/img/Cyberpunk-2077-Edition-Day-One-PS4.jpg') != null) {
        imageOne.src = '../Exo4/assets/img/index.jpg';
    } else {
        imageOne.src = 'assets/img/Cyberpunk-2077-Edition-Day-One-PS4.jpg'
    }

}

const image = document.getElementById('creed');

image.onclick = function () {

    if (image.src.match('assets/img/Aain-s-Creed-Valhalla-PS5.jpg') != null) {
        image.src = 'assets/img/Far-Cry-6.jpg';
    } else {
        image.src = 'assets/img/Aain-s-Creed-Valhalla-PS5.jpg';
    }

}

imageOne.onmouseover = function () {
    
    imageOne.style.width = '20rem' ;
}

imageOne.onmouseleave = function () {
    
    imageOne.style.width = '15rem' ;
}

image.onmouseover = function () {
    
    image.style.width = '25rem' ;

}

image.onmouseleave = function () {
    
    image.style.width = '20rem' ;
}