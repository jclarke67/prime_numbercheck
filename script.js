function is_prime() {
  var n = document.getElementById("checkPrime").value;
  var status = true;
  if (n == 1) status = false;
  if (n == 2) status = true;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      status = false;
    }
  }
  console.log(status);
  window.alert(status);
}
