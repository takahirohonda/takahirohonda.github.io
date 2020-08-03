(function () {

  var navBurger = document.querySelector('.nav-square');
  var navPanelContainer = document.querySelector('.nav-panel-container');
  var darkBg = document.querySelector('.bg-dark');
  var transparentBg = document.querySelector('.bg-transparent');
  var tableOptionsSquare = document.querySelector('.table-options-square');
  var tableOptions = document.querySelector('.table-options');
  navBurger.addEventListener('click', () => {
    if (!navPanelContainer.classList.contains('active')) {
      navPanelContainer.classList.add('active');
    }
    if (!darkBg.classList.contains('active')) {
      darkBg.classList.add('active');
    }
  });

  darkBg.addEventListener('click', () => {
    if (navPanelContainer.classList.contains('active')) {
      navPanelContainer.classList.remove('active');
    }
    if (darkBg.classList.contains('active')) {
      darkBg.classList.remove('active');
    }
    if (tableOptions.classList.contains('active')) {
      tableOptions.classList.remove('active');
    }
    if (darkBg.classList.contains('active')) {
      darkBg.classList.remove('active');
    }
  });

  tableOptionsSquare.addEventListener('click', () => {
    if (!tableOptions.classList.contains('active')) {
      tableOptions.classList.add('active');
    }
    if (!darkBg.classList.contains('active')) {
      darkBg.classList.add('active');
    }
  });

})()