const logo = document.getElementById('logo');
function updateLogo() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    logo.src = '/src/public/images/desktop-logo.svg';
  } else {
    logo.src = '/src/public/images/mobile-logo.svg';
  }
}

updateLogo();

window.addEventListener('resize', updateLogo);
