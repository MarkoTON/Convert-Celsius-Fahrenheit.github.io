function toCelsius() {
  let getCelsius = document.getElementById("celsius").value;
  
  let x = (5/9) * (getCelsius-32);
  x = x.toFixed(1);
  document.getElementById("demoCel").innerHTML = x + " &#x2103;";
}
// console.log(document.getElementById("celsius").value);

function toFah() {
  let getCelsius = document.getElementById("fahren").value;
  
  let x = 32 + (getCelsius * (9/5));
  x = x.toFixed(1);
  document.getElementById("demoFah").innerHTML = x + " &#x2109;";
}
// console.log(document.getElementById("celsius").value);