let preambule = document.querySelector(".preambule");
let test1 = document.querySelector(".test1");
let button = document.querySelector(".preambule__link");

button.addEventListener("click", function() {
    preambule.style.display = "none";
    test1.style.display = "block";

});