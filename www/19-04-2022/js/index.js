window.onload=function(){
  var tableRows = document.getElementsByTagName('td');

  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.backgroundColor = 'white';

    tableRows[i].style.border = '1px solid black';
    
    tableRows[0].style.borderLeft = '0';
    tableRows[0].style.borderTop = '0';

    tableRows[1].style.borderTop = '0';

    tableRows[2].style.borderRight = '0';
    tableRows[2].style.borderTop = '0';

    tableRows[3].style.borderLeft = '0';

    tableRows[5].style.borderRight = '0';

    tableRows[6].style.borderLeft = '0';
    tableRows[6].style.borderBottom = '0';

    tableRows[7].style.borderBottom = '0';

    tableRows[8].style.borderRight = '0';
    tableRows[8].style.borderBottom = '0';

    tableRows[i].style.width = "4rem";
    tableRows[i].style.height = "4rem";
  }
}