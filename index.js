function getFirstSelector(selector){

  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){

  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var currentnumber;
  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);
    currentnumber = parseInt(lis[i].innerHTML) + n

    lis[i].innerHTML = currentnumber;
  }

}
function deepestChild(){
  //var lis = document.getElementById('app').querySelector('div#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
  debugger
  var lis = document.getElementById('app').querySelector('div#grand-node')
  do{

      lis = lis.querySelector('div')

  } while(lis.tagName === "DIV")

  return lis;

}
