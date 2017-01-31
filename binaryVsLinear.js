// Untuk beberapa kasus tertentu (biasayanya dilihat dari banyaknya data), metode linear search unggul dibandingkan dengan binary search. Walaupun demikian, dari pengujuian efisiensi secara garis besar binary search memiliki keunggulan lebih baik O(log n) dibandingkan linear search O(n) (big-O notation)

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const linearSearch = (target, values) => {
  //write your code here
  let flag = false
  let i = 0
  while(!flag){
    if(target == values[i]){
      return values.indexOf(values[i])
      flag = true
    }else{
      i++
      if(i>values.length){
        return -1
      }
    }
  }
}

const binarySearch = (search, array) => {
  // Your code here
  let left = 0
  let right = array.length-1

  while(left<=right){

    let mid = Math.floor((left+right)/2)
    // console.log(left,right,mid);
    if(search > array[mid]){
      left = mid + 1
    }else if(search < array[mid]){
      right = mid - 1
    }else {
      return  mid
    }
  }
  return -1
}

let array_1000 = []
let array_10000 = []
let array_1000000 = []

for (var i=0; i<1000; i++){
  array_1000.push(i+1)
}

for (var i=0; i<10000; i++){
  array_10000.push(i+1)
}

for (var i=0; i<1000000; i++){
  array_1000000.push(i+1)
}


suite.add('linierSearch', function() {
  linearSearch(999,array_10000);
})
.add('binarySearch', function() {
  binarySearch(999,array_10000);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
