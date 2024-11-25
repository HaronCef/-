var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
breakpoints: {
    480: {
        slidesPerView: 1,
        spaceBetween: 150,
      },
  },

    speed: 800,
});

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.image-slider', {
    navigation: {
      nextEl: '.second-swiper-button-next',
      prevEl: '.second-swiper-button-prev',
    },
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: false, // высота слайдера автоматически подстраивается под контент
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 150,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});

 

const users = [
    { name: "Иван", age: 30 },
    { name: "Мария", age: 25 },
    { name: "Петр", age: 30 },
    { name: "Анна", age: 22 }
];

function filterUsersByAge(users, targetAge) {
    return users.filter(user => user.age === targetAge);
}

const retn = filterUsersByAge(users, 25);

console.log(retn);















































