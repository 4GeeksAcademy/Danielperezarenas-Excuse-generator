window.onload = () => {
  let who = ["My dog", "My cat", "My rabbit", "My bird"];
  let action = ["eat", "broke", "lost"];
  let thing = ["my homework", "my pants", "my food"];
  let when = ["yesterday", "today", "last night"];
  //write your code here
  document.querySelector("#newEx").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse(
      who,
      action,
      thing,
      when
    );
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = (param1, param2, param3, param4) => {
  let whoIndx = Math.floor(Math.random() * param1.length);
  let actIndx = Math.floor(Math.random() * param2.length);
  let thinIndx = Math.floor(Math.random() * param3.length);
  let whenIndx = Math.floor(Math.random() * param4.length);
  return (
    param1[whoIndx] +
    " " +
    param2[actIndx] +
    " " +
    param3[thinIndx] +
    " " +
    param4[whenIndx]
  );
};
