$(window).on('load resize', function () {
  if (window.matchMedia('(min-width: 650px)').matches) {
    textHeight();
    textHeight2();
    textHeight3();
    textHeight4();
    textHeight5();
    textHeight6();
  }
});

// вирівнювання заголовків в карточках
function textHeight() {
  let title = document.querySelectorAll('.bbc1--title');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// вирівнювання тексту в карточках
function textHeight2() {
  let title = document.querySelectorAll('.bbc1--text');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// вирівнювання тексту в карточках секції goals
function textHeight3() {
  let title = document.querySelectorAll('.gb--title');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// вирівнювання тексту в карточках секції goals
function textHeight4() {
  let title = document.querySelectorAll('.gb--text');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// вирівнювання тексту в карточках секції recipes
function textHeight5() {
  let title = document.querySelectorAll('.rc--title');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// вирівнювання тексту в карточках секції recipes
function textHeight6() {
  let title = document.querySelectorAll('.rc--text');
  let titleLength = Array.from(title).map((e) => e.offsetHeight);
  let maxHeight = Math.max(...titleLength);

  for (let i = 0; i < title.length; i++) {
    title[i].style.minHeight = maxHeight + 'px';
  }
}

// Burger menu
const burgerMenu = document.querySelector('#showBtn');
const backdrop = document.querySelector('.backdrop');
const menuBody = document.getElementById('menu');
let clickCountMenu = 0;

burgerMenu.addEventListener('click', function () {
  clickCountMenu++;
  if (clickCountMenu % 2 !== 0) {
    backdrop.style.opacity = 1;
    backdrop.style.pointerEvents = 'all';
    menuBody.style.pointerEvents = 'all';
    menuBody.style.display = 'block';
  } else {
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
  console.log('click');
});

backdrop.addEventListener('click', function () {
  if (clickCountMenu % 2 !== 0) {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
});

const links = document.querySelectorAll('.nav-box--link');

links.forEach(function (el) {
  el.addEventListener('click', function () {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  });
});

// Плавна прокрутка до блоку
const anchors = document.querySelectorAll('a[href^="#s-"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');
    if (window.matchMedia('(min-width: 900px)').matches) {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

// Прокрутка до геро блока
const headerLink = document.querySelector('.header--logo');
headerLink.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Прокрутка до геро блока
const headerLink2 = document.querySelector('.fli--logo');
headerLink2.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
