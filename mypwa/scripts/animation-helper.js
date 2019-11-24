// nav burger animation
// Helper functions
const toggleNav = () => {
  var targetNavBurger = document.querySelector('.nav-burger');
  if (targetNavBurger.classList.contains('animate') && targetNavBurger.classList.contains('rotate')) {
    activateNav(targetNavBurger);
  } else {
    inactivateNav(targetNavBurger);
  }
};

const activateNav = (targetNavBurger) => {
  targetNavBurger.classList.remove('animate', 'rotate');
  targetNavBurger.classList.add('animate-reverse', 'rotate-reverse');
};

const inactivateNav = (targetNavBurger) => {
  targetNavBurger.classList.remove('animate-reverse', 'rotate-reverse');
  targetNavBurger.classList.add('animate', 'rotate');
};

const toggleActive = (targetEl) => {
  if (targetEl.classList.contains('active')) {
    targetEl.classList.remove('active');
  } else {
    targetEl.classList.add('active')
  }
}

document.querySelector('.navbar-toggle').addEventListener('click', () => {
  toggleNav();

  // toggle active
  const navBarRight = document.querySelector('.nav-bar-right');
  toggleActive(navBarRight);

  // toggle nav menu background
  const navMenuBg = document.querySelector('.nav-menu-bg');
  toggleActive(navMenuBg);

  // toggle search input z-index
  const searchInput = document.querySelector('.search-input-field');
  toggleActive(searchInput);
});

document.querySelector('.nav-menu-bg').addEventListener('click', () => {
  toggleNav();

  // toggle active
  const navBarRight = document.querySelector('.nav-bar-right');
  toggleActive(navBarRight);

  // toggle nav menu background
  const navMenuBg = document.querySelector('.nav-menu-bg');
  toggleActive(navMenuBg);
  // toggle search input z-index
  const searchInput = document.querySelector('.search-input-field');
  toggleActive(searchInput);
});