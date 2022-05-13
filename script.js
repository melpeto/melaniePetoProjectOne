const formElement = document.querySelector('.contactForm');

const handleSubmit = function(event) {
    event.preventDefault();
    const submissionMsgDiv = document.querySelector('.submissionMessage');
    submissionMsgDiv.textContent = `Thanks for contacting us! We do our best to respond within 24 hours.`;
    const nameElement = document.querySelector('input[type=text]');
    nameElement.value = "";
    const emailElement = document.querySelector('input[type=email]');
    emailElement.value = "";
    const messageElement = document.querySelector('textarea');
    messageElement.value = "";
}

formElement.addEventListener('submit', handleSubmit);