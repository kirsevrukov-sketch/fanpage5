  const carousel = document.getElementById('carousel');
    const indicators = document.querySelectorAll('#indicators span');
    const slideWidth = carousel.offsetWidth;
    const totalSlides = carousel.querySelectorAll('.photo').length;

    function scrollCarousel(direction) {
      const index = Math.round(carousel.scrollLeft / slideWidth);

      if (direction === 1 && index === totalSlides - 1) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === -1 && index === 0) {
        carousel.scrollTo({ left: (totalSlides - 1) * slideWidth, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
      }
    }

    function toggleContent(id) {
  const block = document.getElementById(id);
  block.classList.toggle("show");
}



    function updateIndicators() {
      const index = Math.round(carousel.scrollLeft / slideWidth);
      indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    carousel.addEventListener('scroll', updateIndicators);

     setInterval(() => {
      scrollCarousel(1);
    }, 2500);


    document.querySelector('#toTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

