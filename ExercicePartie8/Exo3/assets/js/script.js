let fristParagraph = document.getElementById ("fristParagraph");
let secondParagraph = document.getElementById ("secondParagraph");
let paragraphs = document.getElementById("p");
let paragraphArray = [...paragraphs];

window.onscroll = () => {
paragraphArray.forEach(Element => {
    if (window.scrollY >= Element.getBoundingClientRect().top) {
        Element.style.visibility = 'visible';
    }
    });
}

// window.onscroll = function () {
//     if (window.scrollY) >= fristParagraph.getBoundingClientRect().top) {
//         fristParagraph.style.visibility = "visible";
//     }
//     if (window.scrollY) >= secondParagraph.getBoundingClientRect().top) {
//         secondParagraph.style.visibility = "visible";
//     }
// };

