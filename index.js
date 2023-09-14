// JavaScript Code
const counter = document.querySelector(".counter-number")
async function updateCounter() {
    let response = await fetch("https://jxdxvqu47ive4pvwl7nz7zpcfu0mbrth.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
