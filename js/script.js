const heading = document.querySelector('#heading');

const keyframes = {
    opacity: [0, 1],
    borderRadius: [
        '20% 50% 50% 70%/50% 50% 70% 50%',
        '50% 20% 50% 50%/40% 40% 60% 60%',
        '50% 40% 20% 40%/40% 50% 50% 80%',
        '50% 50% 50% 20%/40% 40% 60% 60%',
    ],
};
const options = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};

heading.animate(keyframes, options);

// 監視対象が範囲内に現れたら実行する動作
const showPet = (entries) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
    };
    entries[0].target.animate(keyframes, 600);
};

// 監視ロボットの設定
const petObserver = new IntersectionObserver(showPet);

// #catを監視するよう指示
petObserver.observe(document.querySelector('#pet'));

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add your own logic here to handle the form submission
  console.log('Form submitted:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form
  contactForm.reset();
});

// main.js
const pageHeader = document.querySelector('.page-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    pageHeader.classList.add('scrolled');
  } else {
    pageHeader.classList.remove('scrolled');
  }
});

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('active');
});

