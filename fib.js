import colors from 'colors'

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  console.log( colors.red(fib(5)) )