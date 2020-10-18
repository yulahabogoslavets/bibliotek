var number = document.querySelectorAll('.numbers'),
  numberTop = number[0].getBoundingClientRect().top,
  start = 0,
  end = number[0].dataset.num;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function() {
      ++start;
      number.forEach( (item,index) => (item.innerHTML = start));
      if (start == end) {
        clearInterval(interval);
      }
    }, 8);
    }
});