import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let formValues;

try {
  formValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
  const { email, message } = form.elements;
  email.value = formValues.email || '';
  message.value = formValues.message || '';
} catch (error) {
  console.log(error.name);
}

function onInput(evt) {
  const { name, value } = evt.target;
  formValues[name] = value;
  setLocalStorage(formValues);
}

function setLocalStorage(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(formValues);
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formValues = {};
}
