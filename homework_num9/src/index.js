import {newArr} from "./map.js";

console.log(newArr);

let insert = function () {
    const container = document.querySelector(".container");

    for (let item of newArr) {
        container.innerHTML += `<div class="list-item">${item}</div>`;
    }
}
insert();
