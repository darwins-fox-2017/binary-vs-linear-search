'use strict'
var Benchmark = require('benchmark');


function binary_search(search, array) {
  // Your code here
  let minInd = 0;
  let maxInd = array.length - 1;
  let curInd = 0;
  let curEle = 0;
  while(minInd <= maxInd) {
    curInd = (minInd + maxInd) / 2 | 0;
    curEle = array[curInd];

    if(curEle < search)
      minInd = curInd + 1;
    else if (curEle > search)
      maxInd = curInd -1
    else
      return curInd;
  }
  return -1
}

let linearSearch = (target, values) => {
  //write your code here
  let nams = 0;
  for(let i=0; i<values.length; i++) {
    if(target === values[i]) {
      nams = i;
      break;
    }
    else
      nams = -1;
  }
  return nams;
}

let arr1000 = []
let arr10000 = []
let arr1000000 = []

for(let i=1; i<=1000; i++) {
  arr1000.push(i)
}
for(let i=1; i<=10000; i++) {
  arr10000.push(i)
}
for(let i=1; i<=1000000; i++) {
  arr1000000.push(i)
}

let tester = new Benchmark.Suite;

tester.add('BinarySearch', function() {
  binary_search(6754, arr10000)
})
.add('LinearSearch', function() {
  linearSearch(6754, arr10000)
})

.on('cycle', function(event) {
  console.log(String(event.target))
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})

.run({ 'async': true })
