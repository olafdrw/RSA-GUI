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

function letterValue(str){
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length== 1) return anum[str] || ' ';
    return str.split('').map(letterValue);
}

function encryptText() {
  var plaintext = document.getElementById("plaintext");
  var n = letterValue(plaintext)
  document.getElementById("output3").innerHTML = "Encrypted text = " + n ;
}
