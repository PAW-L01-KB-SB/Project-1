function myFunction() {
  document.getElementById("ex1_content").innerHTML = "0,1,2,3,4,5,6,7,8,9";
}

function validateNumber(number){
  if (number.length !== 9){
    return "Dlugosc numeru musi byc rowna 9";
  }

  if(/[a-zA-z]/.test(number)){
    return "Numer nie moze zawierac liter";
  }

  if(/[^0-9]/.test(number)){
    return "Numer nie moze zawierac znakow specjalnych";
  }

  return "Numer telefonu jest poprawny";
}