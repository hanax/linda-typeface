const randomLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

$(function() {
  const $m = $('#main-gif');
  let flag = false;

  $('body').on('keydown', (e) => {
    if (!flag) {
      if (e.which >= 65 && e.which <= 90) {
        $m.attr('src', 'assets/' + randomLetter[e.which - 65] +'present.jpg');
        flag = true;
      } else if (e.which == 190) {
        // .
        $m.attr('src', 'assets/blank.jpg');
        flag = true;
      } else if (e.which == 191) {
        console.log('?')
        // ?
        $m.attr('src', 'assets/' + randomLetter[parseInt(Math.random() * randomLetter.length)] + 'present.jpg');
        flag = true;
      } else if (e.which == 189) {
        // -
        // TODO: do something
        flag = true;
      } else if (e.which == 188) {
        // ,
        // TODO: do something
        flag = true;
      }
    }
  });

  $('body').on('keyup', (e) => {
    flag = false;
    $m.attr('src', 'assets/main.gif');
  });
});
