
const topNavBar = document.querySelector('.top-nav-container');

window.addEventListener('scroll', () => {
  // console.log('scrolled, check scroll to top: ', window.scrollY)
  if (window.scrollY === 0) {
    removeActive(topNavBar);
  } else {
    addActive(topNavBar);
  }

  // text transition
  textTransition(bannerText1);
  textTransition(bannerText2);
  textTransition(bannerText3);
  textTransition(bannerText4);
  textTransition(bannerText5);

})

// initial style

const bannerText1 = document.querySelector('#banner-text-1');
const bannerText2 = document.querySelector('#banner-text-2');
const bannerText3 = document.querySelector('#banner-text-3');
const bannerText4 = document.querySelector('#banner-text-4');
const bannerText5 = document.querySelector('#banner-text-5');
const textTransition = (targetEl) =>  {
  const currentWindowScrollY = window.scrollY;
  if ((window.innerHeight + currentWindowScrollY) >= targetEl.offsetTop + 150
  && (window.innerHeight + currentWindowScrollY) < targetEl.offsetTop + 250) {
    targetEl.style.cssText = "transform: translate(0px, 22.873px) scale(1.09149, 1.09149); opacity: 0.2;"

  } 
  else if ((window.innerHeight + currentWindowScrollY) >= targetEl.offsetTop + 250) {
    targetEl.style.cssText = "transform: translate(0px, 0px) scale(1, 1); opacity: 1;";
  } else  {
    targetEl.style.cssText = "transform: translate(0px, 25px) scale(1.1, 1.1); opacity: 0.0"
  }
}

window.addEventListener('DOMContentLoaded', (e) => {
  const headerContainer = document.querySelector('.header-super-bold-container');
  if (!headerContainer.classList.contains('active')) {
    headerContainer.classList.add('active');
  } else  {
    headerContainer.classList.remove('active');
    headerContainer.classList.add('active');
  }

  const topIcon = document.querySelector('.top-icon');
  if(!topIcon.classList.contains('active')) {
    topIcon.classList.add('active');
  } else  {
    topIcon.classList.remove('active');
    topIcon.classList.add('active');
  }

  const appIconGroup = document.querySelector('.app-icon-group');
  if(!appIconGroup.classList.contains('active')) {
    appIconGroup.classList.add('active');
  } else  {
    appIconGroup.classList.remove('active');
    appIconGroup.classList.add('active');
  }
})

const removeActive = (targetEl) => {
  if(targetEl.classList.contains('active')){
    targetEl.classList.remove('active');
  }
}

const addActive = (targetEl) => {
  if(!targetEl.classList.contains('active')){
    targetEl.classList.add('active');
  }
}


const removeClass = (targetEl, className) => {
  if(targetEl.classList.contains(className)){
    targetEl.classList.remove(className);
  }
}

const addClass = (targetEl, className) => {
  if(!targetEl.classList.contains(className)){
    targetEl.classList.add(className);
  }
}
