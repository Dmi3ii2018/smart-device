const headerButton = document.getElementById('header-button');


const siteMap = {
  toggleButton: document.getElementById('footer-toggle'),
  siteMapList: document.querySelector('.site-map__list'),
  siteMapListLabel: document.querySelector('.footer__toggle-label'),
}

const footerAdress = {
  toggleButton: document.getElementById('adress-toggle'),
  siteMapList: document.querySelector('.footer__adress--description'),
  siteMapListLabel: document.querySelector('.adress-toggle--label'),
}

if(headerButton && document.documentElement.clientWidth < 768) {
  headerButton.textContent = "бесплатная консультация";
};

const onToggleButtonClick = ({toggleButton, siteMapList, siteMapListLabel}) => {
  if (toggleButton.checked) {
    siteMapList.style = 'display: block';
    siteMapListLabel.style = 'height: 2px; overflow: hidden'
  } else {
    siteMapList.style = 'display: none';
    siteMapListLabel.style = 'height: 17px'
  }
}

siteMap.toggleButton.addEventListener('change', () => {
  onToggleButtonClick(siteMap)
});

footerAdress.toggleButton.addEventListener('change', () => {
  onToggleButtonClick(footerAdress)
});
