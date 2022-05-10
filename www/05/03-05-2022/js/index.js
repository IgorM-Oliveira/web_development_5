$(document).ready(function(){
  var td = $('td')
  var tam = td.length
  var cont = 10

  while(cont>10) {
    var i = random(tam)
  }
  console.log(td.length)
})

window.onload=function(){
  var tableRows = document.getElementsByTagName('td');

  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.backgroundColor = "black";
    tableRows[i].style.width = "2rem";
    tableRows[i].style.height = "2rem";
  }
}
