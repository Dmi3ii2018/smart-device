const headerButton = document.getElementById('header-button');
const callbackButton = document.querySelectorAll('.modal-button');
const modalContainer = document.querySelector('.modal-form');
const modalCloseButton = document.querySelector('.modal-form__close-button');

const mainForm = document.querySelector('.main-form').querySelector('form');
const mainName = mainForm.querySelector('[name=name]');
const mainTel = mainForm.querySelector('[name=tel]');
const mainTextArea = mainForm.querySelector('[name=comment]');

const modalForm = document.querySelector('.modal-form');
const form = modalForm.querySelector('form');
const name = form.querySelector('[name=name]');
const tel = form.querySelector('[name=tel]');
const textArea = form.querySelector('[name=comment]');


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

let isStorageSupport = true;
let isStorageEmail = true;
let storage = "";
let telStorage = "";

const onModalOpen = function (evt) {
  evt.preventDefault();
  if (modalForm.classList.contains("modal-form--closed")){
    modalForm.classList.remove("modal-form--closed");

    if (storage && telStorage) {
      name.value = storage;
      tel.value = emailStorage;
      textArea.focus();
    } else if(storage) {
      name.value = storage;
      console.log(name);
      tel.focus();
    } else {
      name.focus();
    }
  }
};

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  emailStorage = localStorage.getItem("tel");
} catch (err) {
  isStorageEmail = false;
}

for (var i = 0; i < callbackButton.length; i++) {
  callbackButton[i].addEventListener("click", onModalOpen);
}

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalForm.classList.add("modal-form--closed");
})

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains("modal-form--closed")) {
      evt.preventDefault();
      modalForm.classList.add("modal-form--closed");
    }
  }
});

const submitForm = (form, name, tel) => {
  form.addEventListener('submit', (evt) => {
    if (!name.value || !tel.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и телефон");
    } else {
      if(isStorageSupport && isStorageEmail) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("tel", tel.value);
      }
    }
  })
}

submitForm(form, name, tel);
submitForm(mainForm, mainName, mainTel);

modalForm.addEventListener("click", (evt) => {
  if (!evt.target.classList.contains("modal-form")) {
    console.log(1);
    return;
  }
  console.log(2);
  evt.preventDefault();
  modalForm.classList.add("modal-form--closed");
});
