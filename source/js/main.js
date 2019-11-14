var headerButton = document.getElementById('header-button');
var callbackButton = document.querySelector('.modal-button');
var modalContainer = document.querySelector('.modal-form');
var modalCloseButton = document.querySelector('.modal-form__close-button');

var mainForm = document.querySelector('.main-form');
var mainName = document.getElementById('main-form-name');
var mainTel = mainForm.querySelector('[name=tel]');
var mainTextArea = mainForm.querySelector('[name=comment]');

var modalForm = document.querySelector('.modal-form');
var form = modalForm.querySelector('form');
var nameFooter = form.querySelector('[name=name-popup]');
var tel = form.querySelector('[name=tel]');
var textArea = form.querySelector('[name=comment]');

var footerRollBar = document.querySelectorAll('.roll-bar');
var footer = document.querySelector('.footer__wrapper');
var footerToggleButton = document.querySelectorAll('.footer__toggle');
var toggleTitle = document.querySelectorAll('.map__title');
var toggleLabel = document.querySelectorAll('.toggle-label');

var footerFeedback = document.querySelector('.feedback');

toggleLabel.forEach(function(it) {
  it.addEventListener('click', function(evt) {
      if(evt.target == it) {
        // evt.target.classList.add('toggle-label--open');
        evt.target.style.height = '2px';
        evt.target.style.overflow = 'hidden';
        evt.target.style.pointerEvents = 'none';
      } else {
        // evt.target.classList.remove('toggle-label--open');
        evt.target.style.height = '17px';
        evt.target.style.overflow = 'visible';
        evt.target.style.pointerEvents = 'auto';
      }
  })
})


if(headerButton && document.documentElement.clientWidth < 768) {
  headerButton.textContent = "бесплатная консультация";
};

headerButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainName.scrollIntoView({alignToTop: false, behavior: "smooth", block: "nearest", inline: "center"});
})

footerToggleButton.forEach(function(it) {
  it.addEventListener('change', function(evt) {
    evt.preventDefault();
    footerRollBar.forEach(function(bar) {
      if(bar.classList.contains('roll-bar--open')) {
        bar.classList.remove('roll-bar--open');
        // bar.classList.add('visually-hidden');
      } else {
        bar.classList.add('roll-bar--open');
        // bar.classList.remove('visually-hidden');
      }
    })
  })
})

// footer.addEventListener('click', function(evt) {
//   evt.preventDefault();

//   if (evt.target.contains('footer__toggle-label')) {
//     footerRollBar.forEach(function(it) {

//     })
//   }
// })


// var siteMap = {
//   toggleButton: document.getElementById('footer-toggle'),
//   siteMapList: document.querySelector('.site-map__list'),
//   siteMapListLabel: document.querySelector('.footer__toggle-label'),
// }

// var footerAdress = {
//   toggleButton: document.getElementById('adress-toggle'),
//   siteMapList: document.querySelector('.footer__adress-description'),
//   siteMapListLabel: document.querySelector('.adress-toggle-label'),
// }

// if(headerButton && document.documentElement.clientWidth < 768) {
//   headerButton.textContent = "бесплатная консультация";
// };

// var onToggleButtonClick = function(toggleButton, siteMapList, siteMapListLabel) {
//   if (toggleButton.checked) {
//     siteMapList.style = 'display: block';
//     siteMapListLabel.style = 'height: 2px; overflow: hidden'
//   } else {
//     siteMapList.style = 'display: none';
//     siteMapListLabel.style = 'height: 17px'
//   }
// }

// siteMap.toggleButton.addEventListener('change', function() {
//   onToggleButtonClick(siteMap.toggleButton, siteMap.siteMapList, siteMap.siteMapListLabel)
// });

// footerAdress.toggleButton.addEventListener('change', function() {
//   onToggleButtonClick(footerAdress.toggleButton, footerAdress.siteMapList, footerAdress.siteMapListLabel)
// });

var isStorageSupport = true;
var isStorageEmail = true;
var storage = "";
var telStorage = "";

var onModalOpen = function (evt) {
  evt.preventDefault();
  if (modalForm.classList.contains("modal-form--closed")){
    modalForm.classList.remove("modal-form--closed");

    if (storage && telStorage) {
      nameFooter.value = storage;
      tel.value = emailStorage;
      textArea.focus();
    } else if(storage) {
      nameFooter.value = storage;
      console.log(name);
      tel.focus();
    } else {
      nameFooter.focus();
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

callbackButton.addEventListener("click", onModalOpen);

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
