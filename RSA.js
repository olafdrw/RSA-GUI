// GENERATE KEYPAIRS

function generateKeyPair() {
  // choose two distinct primes: p, q
  const p = BigInt(document.getElementById("num1").value);
  const q = BigInt(document.getElementById("num2").value);
  const n = p * q;
  const phi = (p - 1n) * (q - 1n);

  // in non-mathematical terms:
  // choose two integer numbers e,d so that
  // gcd(e, phi) == 1
  // e != d
  // (e*d) % phi == 1
  const e = 3n;
  var d = 16971n;

  // then this will be your private / public keys:
  const publicKey = {e, n};
  const privateKey = {d, n};
  document.getElementById("output1").innerHTML = "Public Key = (<strong>" + e + "</strong>,<strong>" + n + "</strong>)";
  document.getElementById("output2").innerHTML = "Private Key = (<strong>" + d + "</strong>,<strong>" + n + "</strong>)";
}
