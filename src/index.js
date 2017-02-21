module.exports = function getBase(base) {
  var copyBase;
  var reminder;
  var count;
  var j;
  for (let i = 2; i < base; i++) {
    copyBase = +base;
    reminder = [];
    count = 0;
    j = 0;
    while (copyBase > i ) {
      reminder[j] = copyBase % i;
      copyBase = Math.floor(copyBase / i);
      j++;
    }
    for (let ii = 0; ii < reminder.length; ii++) {
      if(reminder[ii] == 1){
        count++;
      }
    }
    if(reminder.length == count){
      return i.toString();
    }
  }
}
