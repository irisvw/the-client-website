// JS

/*
buttons = document.querySelectorAll(".filters>li>button");
buttons.forEach.addEventListener(mo)
- Add event listener to buttons (hover)
- get key of the button
- document.querySelector(`img[data-filter="${e.keyCode}"]`);
- focus, mouseover, mousedown
event.target

*/

let buttons = document.querySelectorAll(".button-filter");

buttons.forEach(button => button.addEventListener("mouseenter", (event) => {
    let cat = button.innerHTML;
    if (cat == "All Objects") return;

    let objects = document.querySelectorAll(`img:not([data-filter="${cat}"])`)
    objects.forEach(object => object.classList.add("dim"));
}));

buttons.forEach(button => button.addEventListener("mouseleave", (event) => {
    let objects = document.querySelectorAll(`img`)
    objects.forEach(object => object.classList.remove("dim"));
}));
