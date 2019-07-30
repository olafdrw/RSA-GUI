// Olaf Willner, 2019

var modInverse = function(a, b) {
    a %= b;
    for (var x = 1; x < b; x++) {
        if ((a*x)%b == 1) {
            return x;
        }
    }
}

function generate_keyPair() {
  var p = document.getElementById("num1").value;
  var q = document.getElementById("num2").value;
  var n = p*q;
  const e = Math.pow(2, 16) + 1;
  var phi = (p-1)*(q-1);
  var d = modInverse(e, phi);
  document.getElementById("output1").innerHTML = "Public Key = (<strong>" + n + "</strong>,<strong>" + e + "</strong>)";
  document.getElementById("output2").innerHTML = "Private Key = (<strong>" + d + "</strong>)";
  return n;
  return e;
}

function letterValue(str){
    if(str.length== 1) {
      if(str >= "a" && str <= "z")
        return str.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      else
        return '';
    }
    return str.split('').map(letterValue);
}

function encryptText(text) {
  var p = BigInt(document.getElementById("num1").value);
  var q = BigInt(document.getElementById("num2").value);
  var n = p*q;
  const e = 2n ** 16n + 1n;
  var c = letterValue(String(text));
  var ciphertext = c.map(el => (BigInt(el) ** e) % n);
  document.getElementById("output3").innerHTML = "Encrypted text = " + ciphertext;
}

console.log(encryptText("abc").map(e => e.toString()));
