'use strict';

function toggleMenu() {
  const menu = document.querySelector('.mobile-list-container');
  if (menu) {
    menu.classList.toggle('list-active');
  } else {
    console.error('Nav list not found!');
  }
}

document.addEventListener('click', function (event) {
  const menu = document.querySelector('.mobile-list-container');
  const sandwich = document.querySelector('.sandwichBar');
  if (!menu.contains(event.target) && !sandwich.contains(event.target)) {
    menu.classList.remove('list-active');
    sandwich.classList.remove('list-active');
  }
});

//Copy address function
function copyAddress() {
  const tokenAddress = document.querySelector('.token-address').textContent;

  const tempInput = document.createElement('textarea');
  tempInput.value = tokenAddress;

  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.append(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(tempInput.value)
    .then(() => {
      alert('Address copied :' + tempInput.value);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      alert('Failed to copy the address to clipboard');
    });

  document.body.removeChild(tempInput);
}

//Glassmorphism

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');

  if (window.scrollY > 100) {
    header.style.position = 'sticky';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  }

  if (this.window.scrollY <= 100) {
    header.style.backgroundColor = 'rgb(0, 0, 0)';
  }
});
