// const slidesContainer = document.querySelector('.slideShow');
// const slides = document.querySelectorAll('.slide');
// const nextButton = document.querySelector('.next-right');

// nextButton.addEventListener('click', () => {
//     const activeSlide = document.querySelector('.slide.activi');
//     const nextSlide = activeSlide.nextElementSibling || slides[0];
  
//     activeSlide.classList.remove('activi');
//     nextSlide.classList.add('activi');
  
//     slidesContainer.style.transform = `translateX(-${nextSlide.offsetLeft}px)`;
// });

// // Ẩn các slide nếu cần thiết
// if (slides.length > 1) {
//   slides.forEach((slide, index) => {
//     if (index !== 0) {
//       slide.classList.add('hidden');
//     }
//   });
// }

// di chuyển các tin tức
// const newMove = document.querySelector(".new-move");
// const news = document.querySelectorAll(".new");
// let currentIndex =2;

// function slideRight() {
//   currentIndex = (currentIndex + 1) % news.length;
//   updateNewPosition();
// }

// function slideLeft() {
//   currentIndex = (currentIndex - 1 + news.length) % news.length;
//   updateNewPosition();
// }
// function updateNewPosition() {
//   const translateXValue = -currentIndex * 20;
//   newMove.style.transform = `translateX(${translateXValue}%)`;
// }
// // Gán sự kiện cho nút trượt qua lại
// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowRight") {
//       slideRight();
//     } else if (event.key === "ArrowLeft") {
//       slideLeft();
//     }
//   });
// });