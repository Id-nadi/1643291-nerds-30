const writeUsLink = document.querySelector('.write-us-button');
const popup = document.querySelector('.modal-login');
const close = document.querySelector('.modal-close');
const user = popup.querySelector('[name=user]');
const writeUsEmail = popup.querySelector('.user-email');
const writeUsForm = popup.querySelector('.login-form');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
};

writeUsLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    user.value = storage;
    writeUsEmail.focus();
  }else {
    user.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function(evt) {
  if (!user.value||!writeUsEmail.value) {
    evt.preventDefault();
     popup.classList.remove('modal-error');
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add('modal-error');
  }else {
    if (isStorageSupport) {
      localStorage.setItem('login', user.value);
    };
  };
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault ();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    };
  };
});
