function validateLoginForm(formData) {
    const errors = {};

    // Validate email
    if (!formData.email || formData.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    // Validate password
    if (!formData.password || formData.password.trim() === '') {
        errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// Usage example
const loginData = new FormData();
loginData.append('email', 'admin@gmail.com');
loginData.append('password', 'admin123');

const result = validateLoginForm(Object.fromEntries(loginData));
console.log(result);