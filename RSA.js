// Olaf Willner, 2019

function multiplyInt() {
  var p = document.getElementById("num1").value;
  var q = document.getElementById("num2").value;
  var calc = p*q;
  document.getElementById("output").innerHTML = calc;
}













//function isPrime(num) {
  //for(var i = 2; i < num; i++) {
    //if(num % i === 0) return false;
  //}
  //return num > 1;
//}

//function phi(p,q) {
  //phi = (p-1)(q-1);
  //return phi;
//}

//function generate_keypair(p,q) {
  //var n = p * q;
  //var text = "";
  //var e = Math.floor((Math.random() * phi(p,q)) + 1);
  //var k = 2;
  //var d = (k*phi(p,q) + 1) / e;
  //return n;
  //document.write(generate_keypair(p,q)).innerText;
//}
