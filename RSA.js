// Olaf Willner, 2019

function generate_publicKey() {
  var p = document.getElementById("num1").value;
  var q = document.getElementById("num2").value;
  var n = p*q;
  var e = Math.pow(2,16) + 1;
  var phi = (p-1)*(q-1);
  var d = (Math.pow(e,-1)) % phi;
  document.getElementById("output").textContent = "Public Key = (" + n + "," + e + ")";
}
