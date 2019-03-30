// Olaf Willner, 2019

function multiply() {
  var p = document.getElementsById("num1").value;
  var q = document.getElementsById("num2").value;
  document.getElementById("output").innerHTML = p * q;
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
