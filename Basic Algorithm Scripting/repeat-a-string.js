function repeatStringNumTimes(str, num) {
  var repeated = "";
  for (var i = 0; i < num; i++){
    repeated += str;
  }
  return repeated;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3); 
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2); 