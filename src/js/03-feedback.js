import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('.feedback-form [name="email"]');
const textAreaEl = document.querySelector('.feedback-form [name="message"]');

const STORAGE_KEY = "feedback-form-state";
const dataForm = {};

onDataPlaceholder()

feedbackFormEl.addEventListener('input', throttle(onDataForm, 500))
feedbackFormEl.addEventListener('submit', onSubmit)

function onDataForm(e) {
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
};

function onDataPlaceholder() {
    if (localStorage.getItem(STORAGE_KEY)) { 
        const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY))

        if (dataStorage.message) {
            textAreaEl.value = dataStorage.message;
            dataForm.message = textAreaEl.value;
        }

        if (dataStorage.email) {
            inputEmailEl.value = dataStorage.email;
            dataForm.email = inputEmailEl.value
        }
    }
};

function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
};
