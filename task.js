function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr);
  const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr);
  console.log(minSum, maxSum);
}
const arr = [1, 3, 5, 7, 9];
// miniMaxSum(arr);

function calculateRatios(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log((positiveCount / arr.length).toFixed(6));
  console.log((negativeCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

// calculateRatios([1, 1, 0, -1, -1]);
function permutationEquation(p) {
  // Write your code here

  // p.forEach((n) => {
  //   console.log(n);
  // });
  const n = p.length;
  let val = [];
  const lookup = {};
  for (let i = 1; i < n; i++) {
    lookup[p[i]] = i;
  }
  for (let x = 1; x <= n; x++) {
    // find the value of p(x)
    let px = p[x - 1];
    // find the value of p(p(y))
    let ppY = p[lookup[px - 1]];
    // find the value of y such that p(p(y)) = ppY
    let y = lookup[ppY] + 1;
    // let y = p.indexOf(ppy) + 1;
    val.push(y);
  }
  return val;
}
const num = [2, 3, 1];

// permutationEquation(num);
// console.log(permutationEquation([4, 3, 5, 1, 2]));
function diagonalDifference(arr) {
  let dx = 0;
  let dy = 0;
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    dx += arr[i][i];
    dy += arr[i][arr.length - i - 1];
  }
  return Math.abs(dx - dy);
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

// console.log(diagonalDifference(matrix)); // Output: 0
const a = [1, 2, 3];
const b = [3, 2, 1];
function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }

  return [alicePoints, bobPoints];
}

// console.log(compareTriplets(a, b));

let liveCves;
liveCves = yaml.load(fs.readFileSync(liveCvesPath, { encoding: "utf8" }));

for (const { cve } of liveCves) {
  console.log(cve.references.constructor.name, cve.references.map);
  const referenceUrls = cve.references.map((r) => r.url);
}
