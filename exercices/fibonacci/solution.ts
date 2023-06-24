// Given a number, n, return position of that number
// in the Fibonacci sequence
// [1,1,2,3,5,8,13...]

// Examples -
// fibonacci(6) => 8
// fibonacci(5) => 5
// Bonus - Use a memoize function to cache with recursion

// const fibonacci = memoize((n: number): number => {
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });

const fibonacci = memoize(async (n: number): Promise<number> => {
  if (n <= 2) return 1;
  const [prev1, prev2] = await Promise.all([fibonacci(n - 1), fibonacci(n - 2)]);
  return new Promise((resolve) => {
    setTimeout(() => resolve(prev1 + prev2));
  });
});

function memoize<Input, Result>(fn: (input: Input) => Result) {
  const memoMap = new Map<Input, Result>();
  return function (input: Input): Result {
    if (memoMap.has(input)) return memoMap.get(input)!;

    const result = fn(input);
    memoMap.set(input, result);
    return result;
  };
}

export default fibonacci;
