// Olaf Willner, 2019

function gcd(a, b) {
  while (b != 0) {
    a, b = b, a % b;
  }
  return a;
}

function multiplicative_inverse(e, phi){
    d = 0;
    x1 = 0;
    x2 = 1;
    y1 = 1;
    temp_phi = phi;

    while (e > 0:) {
        temp1 = temp_phi/e;
        temp2 = temp_phi - temp1 * e;
        temp_phi = e;
        e = temp2;

        x = x2- temp1* x1;
        y = d - temp1 * y1;

        x2 = x1;
        x1 = x;
        d = y1;
        y1 = y;
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
