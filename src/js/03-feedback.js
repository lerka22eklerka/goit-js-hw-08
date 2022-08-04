import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('textarea'); 
const inputRef = document.querySelector('input');

const formData = {};

formRef.addEventListener('input', throttle(onTextAreaInput, 500));
formRef.addEventListener('submit', onFormSubmit);

onSaveDataInfo();

function onTextAreaInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    // console.log(formData);
};

function onFormSubmit(event) {
    event.preventDafault();
    event.target.reset();

    localStorage.removeItem('feedback-form-state');
    

};

function onSaveDataInfo() {
    const saveFormData = localStorage.getItem('feedback-form-state');
    const parsData = JSON.parse(saveFormData);
    console.log(parsData);
    if (saveFormData) {
        textAreaRef.value = parsData.message;
        inputRef.value = parsData.email;
        // console.log(saveFormData);
    }

}


