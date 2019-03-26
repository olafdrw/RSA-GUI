// Olaf Willner, 2019

function gcd(a, b) {
  while (b != 0) {
    var a, b = b, a % b;
  }
  return a;
}

function multiplicative_inverse(e, phi){
    var d = 0;
    var x1 = 0;
    var x2 = 1;
    var y1 = 1;
    var temp_phi = phi;

    while (e > 0:) {
        var temp1 = temp_phi/e;
        var temp2 = temp_phi - temp1 * e;
        var temp_phi = e;
        var e = temp2;

        var x = x2- temp1* x1;
        var y = d - temp1 * y1;

        var x2 = x1;
        var x1 = x;
        var d = y1;
        var y1 = y;
    }

    if (temp_phi == 1) {
        return d + phi;
    }
}

function is_prime(num){
    if (num == 2) {
        return True;
    }
    if (num < 2 or num % 2 == 0) {
        return False;
    }
    for (n in xrange(3, int(num**0.5)+2, 2)) {
        if (num % n == 0) {
            return False;
        }
    return True;
    }
}

function generate_keypair(p, q) {
    if (not (is_prime(p) and is_prime(q))) {
        raise ValueError('Both numbers must be prime.');
    }
    elif (p == q) {
        raise ValueError('p and q cannot be equal');
    }
    var n = p * q;

    var phi = (p-1) * (q-1);

    // Choose an integer e such that e and phi(n) are coprime
    var e = random.randrange(1, phi);

    // Use Euclid's Algorithm to verify that e and phi(n) are comprime
    var g = gcd(e, phi);
    while (g != 1) {
        var e = random.randrange(1, phi);
        var g = gcd(e, phi);
    }

    // Use Extended Euclid's Algorithm to generate the private key
    var d = multiplicative_inverse(e, phi);

    // Return public and private keypair
    // Public key is (e, n) and private key is (d, n)
    return ((e, n), (d, n));
}
