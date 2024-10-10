function myFunction() {
  document.getElementById("ex1_content").innerHTML = "0,1,2,3,4,5,6,7,8,9";
}

function validateNumber(number) {
  const tempResponse = document.getElementById("ex2_content");
  if (number.length !== 9) {
    tempResponse.textContent = "Dlugosc numeru musi byc rowna 9";
    return;
  }

  if (/[a-zA-z]/.test(number)) {
    tempResponse.textContent = "Numer nie moze zawierac liter";
    return;
  }

  if (/[^0-9]/.test(number)) {
    tempResponse.textContent = "Numer nie moze zawierac znakow specjalnych";
    return;
  } else tempResponse.textContent = "Numer telefonu jest poprawny";
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
