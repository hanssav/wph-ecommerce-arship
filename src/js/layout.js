// HEADER
const logo = document.getElementById('logo');
function updateLogo() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    logo.src = './public/images/desktop-logo.svg';
  } else {
    logo.src = './public/images/mobile-logo.svg';
  }
}

updateLogo();

window.addEventListener('resize', updateLogo);

// FOOTER
const socialIcons = [
  { name: 'facebook', src: './public/icons/social-facebook.svg' },
  { name: 'twitter', src: './public/icons/social-instagram.svg' },
  { name: 'instagram', src: './public/icons/social-linkdin.svg' },
  { name: 'linkedin', src: './public/icons/social-tiktok.svg' },
];

const container = document.getElementById('social-logo');

socialIcons.forEach((icon) => {
  const wrapper = document.createElement('div');
  wrapper.className =
    'border border-neutral-300 rounded-full aspect-[1/1] h-10 w-10 p-2 flex items-center justify-center';

  const img = document.createElement('img');
  img.src = icon.src;
  img.alt = `social-${icon.name}`;

  wrapper.appendChild(img);

  container.appendChild(wrapper);
});

const eCommerceMenus = [
  'E-Commerce',
  'About Us',
  'Terms & Condition',
  'Privacy Policy',
  'Blog',
];

const helpMenus = [
  'Help',
  'How to Transact',
  'Payment Method',
  'How to Register',
];

const eCommerceSection = document.getElementById('e-commerce-section');
const helpSection = document.getElementById('help-section');

function mapingMenu(arr, target) {
  arr.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = item;
    div.className =
      'text-sm leading-[1.25rem] tracking-tightest text-neutral-950 lg:text-md lg:leading-md';

    if (index === 0) {
      div.classList.add('font-bold');
    } else {
      div.classList.add('font-normal');
    }

    target.appendChild(div);
  });
}

mapingMenu(eCommerceMenus, eCommerceSection);
mapingMenu(helpMenus, helpSection);
