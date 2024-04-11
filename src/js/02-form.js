const form = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';
const savedInfo = JSON.parse(localStorage.getItem(localKey));
if (savedInfo) {
    form.elements.email.value = savedInfo.email || ``;
    form.elements.message.value = savedInfo.message || ``;
}
form.addEventListener(`input`, event => {
    const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
    };
localStorage.setItem(localKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    console.log(formData);
    localStorage.removeItem(localKey);
    form.reset();
});


