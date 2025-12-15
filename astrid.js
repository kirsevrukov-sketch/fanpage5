function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

let currentIndex = 0;
let images = [];

function openModal(img) {
  images = Array.from(document.querySelectorAll(".carousel img"));
  currentIndex = images.indexOf(img);

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
}


function showBlock(id) {
  const block = document.getElementById(id);

  
  if (block.classList.contains("show")) {
    block.classList.remove("show");
    return;
  }


  const blocks = document.querySelectorAll(".content-block");
  blocks.forEach(b => b.classList.remove("show"));


  block.classList.add("show");
}


document.querySelector('#toTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const trackFourth = document.querySelector('.carousel-track-fourth');
const itemsFourth = document.querySelectorAll('.carousel-item-fourth');
const prevBtnFourth = document.querySelector('.prev-fourth');
const nextBtnFourth = document.querySelector('.next-fourth');

let indexFourth = 0;
const intervalTimeFourth = 3000; 
let slideIntervalFourth;

function showSlideFourth(i) {
  trackFourth.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlideFourth() {
  indexFourth = (indexFourth + 1) % itemsFourth.length;
  showSlideFourth(indexFourth);
}

function prevSlideFourth() {
  indexFourth = (indexFourth - 1 + itemsFourth.length) % itemsFourth.length;
  showSlideFourth(indexFourth);
}

nextBtnFourth.addEventListener('click', () => {
  nextSlideFourth();
  resetIntervalFourth();
});

prevBtnFourth.addEventListener('click', () => {
  prevSlideFourth();
  resetIntervalFourth();
});


function startIntervalFourth() {
  slideIntervalFourth = setInterval(nextSlideFourth, intervalTimeFourth);
}

function resetIntervalFourth() {
  clearInterval(slideIntervalFourth);
  startIntervalFourth();
}

startIntervalFourth();


const modalFourth = document.getElementById("modal-fourth");
const modalImgFourth = document.getElementById("modal-img-fourth");
const captionTextFourth = document.getElementById("caption-fourth");
const closeBtnFourth = document.querySelector(".close-fourth");
const prevModalFourth = document.querySelector(".prev-modal-fourth");
const nextModalFourth = document.querySelector(".next-modal-fourth");

let currentModalIndexFourth = 0;

itemsFourth.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalFourth.style.display = "block";
    modalImgFourth.src = item.src;
    captionTextFourth.innerHTML = item.alt;
    currentModalIndexFourth = i;
  });
});

closeBtnFourth.onclick = function() {
  modalFourth.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalFourth) {
    modalFourth.style.display = "none";
  }
};


function showModalImageFourth(i) {
  modalImgFourth.src = itemsFourth[i].src;
  captionTextFourth.innerHTML = itemsFourth[i].alt;
}

prevModalFourth.addEventListener("click", () => {
  currentModalIndexFourth = (currentModalIndexFourth - 1 + itemsFourth.length) % itemsFourth.length;
  showModalImageFourth(currentModalIndexFourth);
});

nextModalFourth.addEventListener("click", () => {
  currentModalIndexFourth = (currentModalIndexFourth + 1) % itemsFourth.length;
  showModalImageFourth(currentModalIndexFourth);
});


const trackSecond = document.querySelector('.carousel-track-second');
const itemsSecond = document.querySelectorAll('.carousel-item-second');
const prevBtnSecond = document.querySelector('.prev-second');
const nextBtnSecond = document.querySelector('.next-second');

let indexSecond = 0;
const intervalTimeSecond = 3000; 
let slideIntervalSecond;

function showSlideSecond(i) {
  trackSecond.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlideSecond() {
  indexSecond = (indexSecond + 1) % itemsSecond.length;
  showSlideSecond(indexSecond);
}

function prevSlideSecond() {
  indexSecond = (indexSecond - 1 + itemsSecond.length) % itemsSecond.length;
  showSlideSecond(indexSecond);
}

nextBtnSecond.addEventListener('click', () => {
  nextSlideSecond();
  resetIntervalSecond();
});

prevBtnSecond.addEventListener('click', () => {
  prevSlideSecond();
  resetIntervalSecond();
});


function startIntervalSecond() {
  slideIntervalSecond = setInterval(nextSlideSecond, intervalTimeSecond);
}

function resetIntervalSecond() {
  clearInterval(slideIntervalSecond);
  startIntervalSecond();
}

startIntervalSecond();


const modalSecond = document.getElementById("modal-second");
const modalImgSecond = document.getElementById("modal-img-second");
const captionTextSecond = document.getElementById("caption-second");
const closeBtnSecond = document.querySelector(".close-second");
const prevModalSecond = document.querySelector(".prev-modal-second");
const nextModalSecond = document.querySelector(".next-modal-second");

let currentModalIndex = 0;

itemsSecond.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalSecond.style.display = "block";
    modalImgSecond.src = item.src;
    captionTextSecond.innerHTML = item.alt;
    currentModalIndex = i;
  });
});

closeBtnSecond.onclick = function() {
  modalSecond.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalSecond) {
    modalSecond.style.display = "none";
  }
};


function showModalImage(i) {
  modalImgSecond.src = itemsSecond[i].src;
  captionTextSecond.innerHTML = itemsSecond[i].alt;
}

prevModalSecond.addEventListener("click", () => {
  currentModalIndex = (currentModalIndex - 1 + itemsSecond.length) % itemsSecond.length;
  showModalImage(currentModalIndex);
});

nextModalSecond.addEventListener("click", () => {
  currentModalIndex = (currentModalIndex + 1) % itemsSecond.length;
  showModalImage(currentModalIndex);
});



const trackThird = document.querySelector('.carousel-track-third');
const itemsThird = document.querySelectorAll('.carousel-item-third');
const prevBtnThird = document.querySelector('.prev-third');
const nextBtnThird = document.querySelector('.next-third');

let indexThird = 0;
const intervalTimeThird = 3000; 
let slideIntervalThird;

function showSlideThird(i) {
  trackThird.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlideThird() {
  indexThird = (indexThird + 1) % itemsThird.length;
  showSlideThird(indexThird);
}

function prevSlideThird() {
  indexThird = (indexThird - 1 + itemsThird.length) % itemsThird.length;
  showSlideThird(indexThird);
}

nextBtnThird.addEventListener('click', () => {
  nextSlideThird();
  resetIntervalThird();
});

prevBtnThird.addEventListener('click', () => {
  prevSlideThird();
  resetIntervalThird();
});


function startIntervalThird() {
  slideIntervalThird = setInterval(nextSlideThird, intervalTimeThird);
}

function resetIntervalThird() {
  clearInterval(slideIntervalThird);
  startIntervalThird();
}

startIntervalThird();


const modalThird = document.getElementById("modal-third");
const modalImgThird = document.getElementById("modal-img-third");
const captionTextThird = document.getElementById("caption-third");
const closeBtnThird = document.querySelector(".close-third");
const prevModalThird = document.querySelector(".prev-modal-third");
const nextModalThird = document.querySelector(".next-modal-third");

let currentModalIndexThird = 0;

itemsThird.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalThird.style.display = "block";
    modalImgThird.src = item.src;
    captionTextThird.innerHTML = item.alt;
    currentModalIndexThird = i;
  });
});

closeBtnThird.onclick = function() {
  modalThird.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalThird) {
    modalThird.style.display = "none";
  }
};


function showModalImageThird(i) {
  modalImgThird.src = itemsThird[i].src;
  captionTextThird.innerHTML = itemsThird[i].alt;
}

prevModalThird.addEventListener("click", () => {
  currentModalIndexThird = (currentModalIndexThird - 1 + itemsThird.length) % itemsThird.length;
  showModalImageThird(currentModalIndexThird);
});

nextModalThird.addEventListener("click", () => {
  currentModalIndexThird = (currentModalIndexThird + 1) % itemsThird.length;
  showModalImageThird(currentModalIndexThird);
});



