// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.


function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4]) // should return 10.
  sumAll([4, 1]) // should return 10.
  sumAll([5, 10]) // should return 45.
  sumAll([10, 5]) // should return 45.