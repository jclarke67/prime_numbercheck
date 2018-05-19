function is_prime() {
  var n = document.getElementById("checkPrime");
    if (!n.checkValidity()) {
    document.getElementById("result").innerHTML = n.validationMessage;
    return;
  }
  n = n.value;
  var status = true;
  if (n == 1) status = false;
  if (n == 2) status = true;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      status = false;
      break;
    }
  }
  console.log(status);
  document.getElementById("result").innerHTML = status;
  if (status == true) {
    document.getElementById("result").style.backgroundColor = "#AED800";
    document.getElementById("result").style.border = "5px solid #9CC100";
  }
  else {
    document.getElementById("result").style.backgroundColor = "#E30D4A";
    document.getElementById("result").style.border = "5px solid #CC073F";
  }
}
