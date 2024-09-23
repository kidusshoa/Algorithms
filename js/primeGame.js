function isWinner(x, nums) {
  if (!nums || x < 1) return null;
  const maxN = Math.max(...nums);
  const sieve = new Array(maxN + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= maxN; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= maxN; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= maxN; i++) {
    if (sieve[i]) primes.push(i);
  }

  let mariaWins = 0;
  let benWins = 0;

  for (let i = 0; i < x; i++) {
    const n = nums[i];
    let primeCount = 0;

    for (const prime of primes) {
      if (prime > n) break;
      primeCount++;
    }

    if (primeCount % 2 === 1) {
      mariaWins++;
    } else {
      benWins++;
    }
  }

  if (mariaWins > benWins) {
    return "Maria";
  } else if (benWins > mariaWins) {
    return "Ben";
  } else {
    return null;
  }
}

const x = 3;
const nums = [4, 5, 1];
console.log(isWinner(x, nums));
