// Check if a value is classified as a boolean primitive. 
// Return true or false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool == typeof true;
}

booWho(null);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");