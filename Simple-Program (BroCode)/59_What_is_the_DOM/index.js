/*
    DOM = DOCUMENT OBJECT MODEL
          Object{} that represents the page you see in the web browser
          and provides you with an API to interact with it.
          web browser constructs the DOM when it loads an HTML document,
          and structures all the elements in a tree-like representation.
          JavaScript can access the DOM to dynamically
          change the content, stucture, and style of a web page.
*/

document.title = "Hello AHAHAHAH";
document.body.style.backgroundColor = "hsl(0, 0%, 55%)";

console.dir(document);

const rawUsername = "UmiKitsune";
const username = rawUsername.endsWith("!") ? rawUsername : rawUsername + "!";
const welcome = document.getElementById("welcome-msg");

welcome.textContent += username === "!" ? "Guest!" : username;