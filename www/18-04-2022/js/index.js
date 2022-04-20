window.onload=function(){
  var tableLine = document.getElementsByTagName('th');
  var tableRows = document.getElementsByTagName('td');

  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.backgroundColor = (i % 2)?"black":'';
    tableRows[i].style.width = "2rem";
    tableRows[i].style.height = "2rem";
  }

  for (var i = 0; i < tableLine.length; i++) {
    tableLine[i].style.backgroundColor = !(i % 2)?"black":'';
    tableLine[i].style.height = "2rem";
    tableLine[i].style.width = "2rem";
  }
}