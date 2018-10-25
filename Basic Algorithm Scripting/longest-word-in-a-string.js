function findLongestWordLength(str) {
  var longestLength = 0;
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++){
    if (words[i].length > longestLength){
      longestLength = words[i].length;
    }
  }

  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");