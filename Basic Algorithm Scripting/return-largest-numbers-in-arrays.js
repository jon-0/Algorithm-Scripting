function largestOfFour(arr) {
  // You can do this!
  var largestArr = [arr[0][0], arr[1][0], arr[2][0], arr[3][0]];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr[i].length; j++){
      if (arr[i][j] > largestArr[i]){
        largestArr[i] = arr[i][j];
      }
    }
  }
console.log(largestArr);
return largestArr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);