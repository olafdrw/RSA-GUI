// ENCRYPT

function encrypt(message) {
  // choose two distinct primes: p, q
  const p = BigInt(document.getElementById("num1").value);
  const q = BigInt(document.getElementById("num2").value);
  const n = p * q;
  const phi = (p - 1n) * (q - 1n);
  const e = 3n;
  var d = 16971n;

  // then this will be your private / public keys:
  const publicKey = {e, n};
  const privateKey = {d, n};

  message = document.getElementById("plaintext").value;
  let chars = message.split('');
  return chars.map(c => {
    let charValue = BigInt(c.charCodeAt(0));
    m = (charValue ** publicKey.e) % publicKey.n;
    return m;
  });
  document.getElementById("output3").innerHTML = "Encrypted text = " + m;
}
