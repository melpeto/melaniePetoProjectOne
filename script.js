const form = document.querySelector('.contactForm');
console.log(form);

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Thanks for contacting us! We do our best to respond within 24 hours.');
}

form.addEventListener('submit', handleSubmit);