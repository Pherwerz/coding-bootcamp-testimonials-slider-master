(function () {
  var images = document.querySelectorAll('.right__image--image');
  var text = document.querySelectorAll('.slide__content');
  var prev = document.querySelector('.prev, .prev *');
  var next = document.querySelector('.next, .next *');

  var slide = (n, p) => {
    images[n].classList.add('hidden');
    text[n].classList.add('hidden');
    images[p].classList.remove('hidden');
    text[p].classList.remove('hidden');
    images[p].style.animation = 'fade 1s';
    text[p].style.animation = 'fade 1s';
  };

  next.addEventListener('click', () => {
    slide(0, 1);
  });

  prev.addEventListener('click', () => {
    slide(1, 0);
  });
})();
