function getFirstSelector(selector){

  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  debugger
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var currentnumber;
  for (var i = 0; i < lis.length; i++) {
    currentnumber = parseInt(lis[i].innerHTML) + n

    lis[i].innerHTML = currentnumber;
  }

}
function deepestChild(){
  return document.querySelectorAll('#grand-node')
}
