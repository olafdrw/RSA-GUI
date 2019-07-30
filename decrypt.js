// DECRYPT

function decrypt(message) {
  return message.map(c => {
    let charCode = (c ** privateKey.d) % privateKey.n;
    return String.fromCharCode(Number(charCode));
  }).join('');
}
