class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count += 1;
    }
    getValue() {
        return this.count;
    }
}
const title = document.querySelector("#title");
const count = document.querySelector("#counter");
const button = document.querySelector("#counter-button");
title.textContent = "TypeScript";
const counter = new Counter();
button.addEventListener("click", () => {
    counter.increment();
    count.textContent = String(counter.getValue());
}, false);
