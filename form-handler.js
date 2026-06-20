document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('responsive-form');
    const successBanner = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard form reload sequence
        
        // Target DOM Elements
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isFormValid = true;

        // 1. Validation Logic Helper Function
        const validateField = (inputEl, errorId, condition) => {
            const errorEl = document.getElementById(errorId);
            if (condition) {
                errorEl.style.display = 'none';
                inputEl.style.borderColor = '#ccc';
            } else {
                errorEl.style.display = 'block';
                inputEl.style.borderColor = '#df4759';
                isFormValid = false;
            }
        };

        // 2. Execute Validation Conditions
        validateField(firstName, 'first-name-error', firstName.value.trim() !== '');
        validateField(lastName, 'last-name-error', lastName.value.trim() !== '');
        
        // Email standard regular expression format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(email, 'email-error', emailRegex.test(email.value.trim()));
        
        validateField(message, 'message-error', message.value.trim() !== '');

        // 3. Action Block if Form Passes All Controls
        if (isFormValid) {
            // Log target values safely to console
            console.log("Form Submitted Successfully:", {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                subject: document.getElementById('subject').value,
                message: message.value
            });

            // Trigger success indicator banner and reset form fields
            successBanner.style.display = 'block';
            form.reset();

            // Auto-dismiss the confirmation message banner after a delay
            setTimeout(() => {
                successBanner.style.display = 'none';
            }, 4000);
        }
    });
});