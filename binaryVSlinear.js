var Benchmark = require ('benchmark');
var suite     = new Benchmark.Suite;

//binary_search
function binary_search (search, array) {
  let min = 0
  let max = array.length-1

  while (min <= max ) {
    let midValue = Math.floor((min + max )/2)
    if (array[midValue] < search) {min = midValue +1
    }else if (array[midValue] > search) {max = midValue -1
    }else {return midValue}
  }
  return -1
}

//linearSearch
let linearSearch = (target, values) => {
  for (let i = 0; i < values.length; i++) {
    while (values.indexOf(target) == -1 || values.indexOf(target) >= 0) {
      return values.indexOf(target)
    }
  }
}

let arr_1000    = [],
    arr_10000   = [],
    arr_1000000 = [];

for(let i = 1, j = 1, k = 1; i <= 1000, j <= 10000, k <= 1000000; i++, j++, k++){
  arr_1000.push(i)
  arr_10000.push(j)
  arr_1000000.push(i)
}

//add tests
suite.add('binary_search', function() {binary_search(7000, arr_10000)})
.add('linearSearch', function() {linearSearch(700, arr_10000)})

// add listeners
.on('cycle', function(event) {console.log(String(event.target))})
.on('complete', function() {console.log('Fastest is ' + this.filter('fastest').map('name'))})
.run({ 'async': true });// run async
