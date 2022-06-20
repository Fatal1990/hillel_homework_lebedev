import data from "./MOCK_DATA.json" assert {type: "json"};

const b = data;

let insert = function () {
    const container = document.querySelector(".container");

    for (let item of b) {
        container.innerHTML += `<li>${item}</li>`;
        console.log(item);
    }
}

insert();