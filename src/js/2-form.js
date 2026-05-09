const formText = document.querySelector(".feedback-form");
const formData = { 
    email: "", 
    message: "", 
};
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
const parsedData = JSON.parse(savedData);
formData.email = parsedData.email || '';
formData.message = parsedData.message || '';
formText.elements.email.value = formData.email;
formText.elements.message.value = formData.message;
}
formText.addEventListener('input', event => {
    const field = event.target.name;
    const value = event.target.value.trim();
    formData [field] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
formText.addEventListener('submit', event => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all firlds');
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formText.reset();
    formData.email = '';
    formData.message = '';
});




