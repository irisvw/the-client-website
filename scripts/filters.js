// FILTERS
let buttons = document.querySelectorAll(".button-filter");

buttons.forEach(button => button.addEventListener("mouseenter", function () { applyFilter(button) }));
buttons.forEach(button => button.addEventListener("focus", function () { applyFilter(button) }));
buttons.forEach(button => button.addEventListener("mouseleave", removeDim));
buttons.forEach(button => button.addEventListener("blur", removeDim));

function applyFilter(button) {
    let category = button.innerHTML;
    if (category == "All Objects") return;

    let objects = document.querySelectorAll(`img:not([data-category="${category}"])`)
    objects.forEach(object => object.classList.add("dim"));
}

function removeDim() {
    let objects = document.querySelectorAll(`img`)
    objects.forEach(object => object.classList.remove("dim"));
}