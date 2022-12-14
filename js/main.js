// swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  }
});

//tabs
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.working__tab-url').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click',function(event) {
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.working-slider__item').forEach(function(tabText) {
            tabText.classList.remove('working-slider__item--active');
        });
        document.querySelectorAll('.working__tab-url').forEach(function(tabActive) {
          tabActive.classList.remove('working__tab-url--active');
        });
        event.currentTarget.classList.add('working__tab-url--active');
        document.querySelector(`[data-target="${path}"]`).classList.add('working-slider__item--active');
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute('aria-selected', false));

  // Set this tab as selected
  target.setAttribute('aria-selected', true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')

  // Show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute('aria-controls')}`)
}

//accordeon
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false
  });
} );

//accordeon

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.burger').addEventListener('click', function(event) {
    document.querySelector('.burger').classList.toggle('header__burger--active');
    document.querySelector('.burger__item').classList.toggle('burger__item--active');
    document.querySelector('.nav').classList.toggle('header__nav--active');
  });
});
