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
  var d = modInverse(e, phi);

  // then this will be your private / public keys:
  const privateKey = {d, n};
  const publicKey = {e, n};
  document.getElementById("output1").innerHTML = "Public Key = (<strong>" + n + "</strong>,<strong>" + e + "</strong>)";
  document.getElementById("output2").innerHTML = "Private Key = (<strong>" + d + "</strong>)";
}

function encrypt(message) {
  let chars = message.split('');
  return chars.map(c => {
    let charValue = BigInt(c.charCodeAt(0));
    return (charValue ** publicKey.e) % publicKey.n;
  });
}

function decrypt(message) {
  return message.map(c => {
    let charCode = (c ** privateKey.d) % privateKey.n;
    return String.fromCharCode(Number(charCode));
  }).join('');
}

let message = "i love cookies";
let crypt = encrypt(message);
console.log("Encrypted: ", crypt.map(e => e.toString()));
console.log("Decrypted: ", decrypt(crypt));
