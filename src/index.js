module.exports = function getBase(base) {
  var copyBase;
  for (let i = 2; i < base; i++) {
    copyBase = +base;
    while (copyBase > i ) {
      if(copyBase % i != 1){
        break;
      }
      copyBase = Math.floor(copyBase / i);
    }
    if (copyBase <= i) {
      return i.toFixed();
    }
  }
}
