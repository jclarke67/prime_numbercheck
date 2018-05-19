function is_prime() {
  var n = document.getElementById("checkPrime");
  
    if (!n.checkValidity()) {
      document.getElementById("result").style.width = "400px";
      document.getElementById("result").style.backgroundColor = "white";
      document.getElementById("result").style.fontSize = "18px";
      document.getElementById("result").style.color = "black";
      document.getElementById("result").style.padding = "12px";
      document.getElementById("result").style.border = "5px solid #835FB9";
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
    document.getElementById("result").style.color = "white";
    document.getElementById("result").style.fontSize = "30px";
    document.getElementById("result").style.backgroundColor = "#AED800";
    document.getElementById("result").style.border = "5px solid #9CC100";
    document.getElementById("result").style.padding = "2px";
    document.getElementById("result").style.width = "400px";
  }
  if (status == false) {
    document.getElementById("result").style.color = "white";
    document.getElementById("result").style.fontSize = "30px";
    document.getElementById("result").style.backgroundColor = "#E30D4A";
    document.getElementById("result").style.border = "5px solid #CC073F";
    document.getElementById("result").style.padding = "2px";
    document.getElementById("result").style.width = "400px";
  }
}
