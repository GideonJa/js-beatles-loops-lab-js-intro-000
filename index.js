function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var msg = '';
  for(var i = 0; i < musicians.length; i++){
    msg = musicians[i] + " plays " + instruments[i];
    arr.push(msg);
  }
return arr;
}

function johnLennonFacts(facts) {
  var arr =[];
  var i = 0;
  while(i < facts.length){
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}
function iLoveTheBeatles(n){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while(n < 15)
  return arr;
}
