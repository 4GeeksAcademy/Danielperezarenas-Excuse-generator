/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#newEx").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let who = ["My dog", "My cat", "My rabbit", "My bird"];
  let action = ["eat", "broke", "lost"];
  let thing = ["my homework", "my pants", "my food"];
  let when = ["yesterday", "today", "last night"];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let thinIndx = Math.floor(Math.random() * thing.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    thing[thinIndx] +
    " " +
    when[whenIndx]
  );
};
