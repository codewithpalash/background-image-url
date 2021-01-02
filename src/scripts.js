// 1. Get the div element with id #main
const main = document.getElementById("main");

// 2. Get all CSS properties of above element
const styles = window.getComputedStyle(main);

// 3. Get backgroundImage property from it
const image = styles.backgroundImage;

// 4. Finally, extract backgroundImage URL
const url = image.slice(5, -2);
console.log(url);
