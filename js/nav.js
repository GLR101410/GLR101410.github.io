"use strict";

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !isExpanded);
  
  // Toggle the visibility of the menu
  mobileMenu.classList.toggle('hidden');

  // Toggle the icons
  const svgOpen = menuButton.querySelector('svg.block');
  const svgClose = menuButton.querySelector('svg.hidden');
  svgOpen.classList.toggle('hidden');
  svgOpen.classList.toggle('block');
  svgClose.classList.toggle('hidden');
  svgClose.classList.toggle('block');
});

// make it appear that the section was scrolled to
//document.getElementById('contact').scrollIntoView();