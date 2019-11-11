var headerButton = document.getElementById('header-button');
var callbackButton = document.querySelectorAll('.modal-button');
var modalContainer = document.querySelector('.modal-form');
var modalCloseButton = document.querySelector('.modal-form__close-button');

var mainForm = document.querySelector('.main-form').querySelector('form');
var mainName = mainForm.querySelector('[name=name]');
var mainTel = mainForm.querySelector('[name=tel]');
var mainTextArea = mainForm.querySelector('[name=comment]');

var modalForm = document.querySelector('.modal-form');
var form = modalForm.querySelector('form');
var name = form.querySelector('[name=name]');
var tel = form.querySelector('[name=tel]');
var textArea = form.querySelector('[name=comment]');


var siteMap = {
  toggleButton: document.getElementById('footer-toggle'),
  siteMapList: document.querySelector('.site-map__list'),
  siteMapListLabel: document.querySelector('.footer__toggle-label'),
}

var footerAdress = {
  toggleButton: document.getElementById('adress-toggle'),
  siteMapList: document.querySelector('.footer__adress-description'),
  siteMapListLabel: document.querySelector('.adress-toggle-label'),
}

if(headerButton && document.documentElement.clientWidth < 768) {
  headerButton.textContent = "бесплатная консультация";
};

var onToggleButtonClick = function(toggleButton, siteMapList, siteMapListLabel) {
  if (toggleButton.checked) {
    siteMapList.style = 'display: block';
    siteMapListLabel.style = 'height: 2px; overflow: hidden'
  } else {
    siteMapList.style = 'display: none';
    siteMapListLabel.style = 'height: 17px'
  }
}

siteMap.toggleButton.addEventListener('change', function() {
  onToggleButtonClick(siteMap.toggleButton, siteMap.siteMapList, siteMap.siteMapListLabel)
});

footerAdress.toggleButton.addEventListener('change', function() {
  onToggleButtonClick(footerAdress.toggleButton, footerAdress.siteMapList, footerAdress.siteMapListLabel)
});

var isStorageSupport = true;
var isStorageEmail = true;
var storage = "";
var telStorage = "";

var onModalOpen = function (evt) {
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

modalCloseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add("modal-form--closed");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!modalForm.classList.contains("modal-form--closed")) {
      evt.preventDefault();
      modalForm.classList.add("modal-form--closed");
    }
  }
});

var submitForm = function(form, name, tel) {
  form.addEventListener('submit', function(evt) {
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

modalForm.addEventListener("click", function(evt) {
  if (!evt.target.classList.contains("modal-form")) {
    console.log(1);
    return;
  }
  console.log(2);
  evt.preventDefault();
  modalForm.classList.add("modal-form--closed");
});
