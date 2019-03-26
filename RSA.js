// Olaf Willner, 2019

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

var p = document.getElementByName("num1")
var q = document.getElementByName("num2")

function phi(p,q) {
  phi = (p-1)(q-1);
  return phi;
}

function generate_keypair(p,q) {
  var n = p * q;
  var e = Math.floor((Math.random() * phi(p,q)) + 1);
  var k = 2
  var d = (k*phi(p,q) + 1) / e
  
  return
}
