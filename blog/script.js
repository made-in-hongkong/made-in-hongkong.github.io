// Initialize EmailJS with your user ID
emailjs.init("info@made-in-hongkong.com");

// Add an event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send the form data using EmailJS
    emailjs.sendForm('service_62qai5b', 'template_tim2m1b', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            // Optionally, you can reset the form here
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});