// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  var words = str.split(" ");
  var titleCase = [];
  for (var i = 0; i < words.length; i++) {
    var lowerCaseWord = words[i].toLowerCase();
    var titleCaseWord = lowerCaseWord[0].toUpperCase() + lowerCaseWord.substring(1);
    titleCase.push(titleCaseWord); 
  }
  return titleCase.join(" ");
}

titleCase("I'm a little tea pot");
titleCase("I'm a little tea pot") //should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") // should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return Here Is My Handle Here Is My Spout.