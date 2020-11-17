const arrayA = document.querySelectorAll("li a");


// sans la boucle 
// arrayA[0].onclick = function(event) {
// event.preventDefault();
// fable1.scrollIntoView({
// 	behavior: "smooth"
// 	});
// }
// arrayA[1].onclick = function(event) {
// 	event.preventDefault();
// 	fable2.scrollIntoView({
// 		behavior: "smooth"
// 		});
// 	}

// Avec la boucle


arrayA.forEach(element => element.onclick = function(event) {
	event.preventDefault();

	document.querySelector(this.getAttribute("href")).scrollIntoView({
		behavior: "smooth"
	});
});