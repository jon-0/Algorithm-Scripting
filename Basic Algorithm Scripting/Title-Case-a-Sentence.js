function titleCase(str) {
  var words = str.split(" ");
  var titleCase = [];

  for (var i = 0; i < words.length; i++) {
    var lowerCaseWord = words[i].toLowerCase();
    var titleCaseWord = 
      lowerCaseWord[0].toUpperCase() + lowerCaseWord.substring(1);

    titleCase.push(titleCaseWord); 
  }
  
  return titleCase.join(" ");
}

titleCase("I'm a little tea pot");