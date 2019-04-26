// Olaf Willner, 2019

function generate_keyPair() {
  var p = document.getElementById("num1").value;
  var q = document.getElementById("num2").value;
  var n = p*q;
  const e = Math.pow(2,16) + 1;
  var phi = (p-1)*(q-1);
  var d = (Math.pow(e,-1)) % phi;
  document.getElementById("output1").innerHTML = "Public Key = (<strong>" + n + "</strong>,<strong>" + e + "</strong>)";
  document.getElementById("output2").innerHTML = "Private Key = (<strong>" + d + "</strong>)";
}

function encryptText() {
  var plaintext = document.getElementById("plaintext");
  
}
