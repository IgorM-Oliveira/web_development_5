$(document).ready(function() {
  var column = document.getElementsByClassName('column');
  var columnGold = new Array(column.length);
  var checkerClick = new Array(column.length);

  var clickField = document.getElementById('cont');
  var quantityClick;
  var i = 0;

  function fillGold(optionSelect) {
    quantityClick = 0;
    clickField.innerHTML = quantityClick;

    for (i = 0; i < column.length; i++) {
      column[i].innerHTML = " ";
    }i = 0;

    for (i = 0; i < columnGold.length; i++) {
      columnGold[i] = 0;
    }i = 0;

    for (i = 0; i < checkerClick.length; i++) {
      checkerClick[i] = 0;
    }i = 0;

    var raffle;
    if (optionSelect === 1) {
      raffle = new Array(100);
    } else if (optionSelect === 2) {
      raffle = new Array(50);
    } else if (optionSelect === 3) {
      raffle = new Array(25);
    }

    for (i = 0; i < raffle.length; i++) {
      var randomNumber = Math.trunc(Math.random() * (200));

      while (raffle.includes(randomNumber)) {
        randomNumber = Math.trunc(Math.random() * (200));
      }

      raffle[i] = randomNumber;
    }i = 0;

    for (i = 0; i < raffle.length; i++) {
      columnGold[raffle[i]] = 1;
    }i = 0;

    for (i = 0; i < column.length; i++) {
      $(column[i]).on('click', function (evento) {
        $(this).off('click');

        if (columnGold[evento.target.id] === 1) {
          this.innerHTML = '<div class="col column win">O</div>';
        } else {
          this.innerHTML = '<div class="col column lose">X</div>';
        }

        if (checkerClick[evento.target.id] === 0) {
          quantityClick++;
          clickField.innerHTML = quantityClick;
        }

        checkerClick[evento.target.id] = 1;
      });
    }i = 0;
  }

  $("#difficulty").on('change', function () {
    var index = document.getElementById('difficulty').options.selectedIndex;

    fillGold(index);
  });
});
