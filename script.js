function keyPress(event) {
    if (event.keyCode == 13) is_prime();
}

function element_transform(color, fontSize, bg, border, padding) {
  document.getElementById("result").style.color = color;
  document.getElementById("result").style.fontSize = fontSize;
  document.getElementById("result").style.backgroundColor = bg;
  document.getElementById("result").style.border = border;
  document.getElementById("result").style.padding = padding;
}

function is_prime() {
  var n = document.getElementById("checkPrime");
  
  if (!n.checkValidity()) {
    element_transform("black", "18px", "white", "5px solid #835FB9", "12px");
    document.getElementById("result").innerHTML = n.validationMessage;
    return;
  }
  
  n = n.value;
  var status = true;
  if (n == 1 || n == 0) status = false;
  if (n == 2) status = true;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) { status = false; break; }
  }
  
  console.log(status);
  document.getElementById("result").innerHTML = status;
  if (status == true)
    element_transform("white", "30px", "#AED800", "5px solid #9CC100", "2px");
  if (status == false)
    element_transform("white", "30px", "#E30D4A", "5px solid #CC073F", "2px");
}
