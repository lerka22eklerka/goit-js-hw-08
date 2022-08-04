import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('textarea');
const inputRef = document.querySelector('input');

formRef.addEventListener('input', throttle(onTextAreaInput, 500));
formRef.addEventListener('submit', onFormSubmit);

if (localStorage.getItem('feedback-form-state')) {
  onSaveDataInfo();
}
let formData = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

function onTextAreaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const savesData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(savesData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onSaveDataInfo() {
  const saveFormData = localStorage.getItem('feedback-form-state');
  const parsData = JSON.parse(saveFormData);
  console.log(parsData);
  if (parsData) {
    inputRef.value = parsData.email ? parsData.email : ``;
    textAreaRef.value = parsData.message ? parsData.message : ``;
    // console.log(saveFormData);
  }
}



