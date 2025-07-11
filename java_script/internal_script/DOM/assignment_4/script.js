// Helper regex patterns
const alphaOnly    = /^[A-Za-z]+$/;
const phonePattern = /^\d{4}-\d{7}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const dobPattern   = /^(\d{2})\/(\d{2})\/(\d{4})$/;

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();                 // Stop default submit
  const errors = [];                  // Collect error messages
  const today  = new Date();          // For future‑date check

  // Grab field values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const first    = document.getElementById('firstName').value.trim();
  const last     = document.getElementById('lastName').value.trim();
  const dob      = document.getElementById('dob').value.trim();
  const email    = document.getElementById('email').value.trim();
  const phone    = document.getElementById('phone').value.trim();

  /* ---------- Validation rules ---------- */

  // Username / Password
  if (!username) errors.push('Username is required.');
  else if (username.length < 8)
    errors.push('Username has to be at least 8 characters.');

  if (!password) errors.push('Password is required.');
  else if (password.length < 8)
    errors.push('Password has to be at least 8 characters.');

  // First / Last Name
  if (!first) errors.push('First Name is required.');
  else if (!alphaOnly.test(first))
    errors.push(`${first} is not valid. Only letters allowed.`);

  if (!last) errors.push('Last Name is required.');
  else if (!alphaOnly.test(last))
    errors.push(`${last} is not valid. Only letters allowed.`);

  // Date of Birth
  if (!dob) {
    errors.push('Date of Birth is required.');
  } else {
    const match = dob.match(dobPattern);
    if (!match) {
      errors.push(`${dob} is not in DD/MM/YYYY format.`);
    } else {
      const day   = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1;
      const year  = parseInt(match[3], 10);
      const date  = new Date(year, month, day);

      const dateIsValid =
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day;

      if (!dateIsValid) {
        errors.push(`${dob} is not a valid date.`);
      } else if (date > today) {
        errors.push(`${dob} is in the future. Please enter a past date.`);
      }
    }
  }

  // Email
  if (!email) errors.push('Email is required.');
  else if (!emailPattern.test(email))
    errors.push(`${email} is not a valid email address.`);

  if (phone.length > 0 && !phonePattern.test(phone)) {
  errors.push(`${phone} is not a valid phone number (use XXXX-XXXXXXX).`);
}


  /* ---------- Display results ---------- */

  const errorBox = document.getElementById('errorMessages');
  if (errors.length > 0) {
    // Show each error on a new line
    errorBox.innerHTML = errors.join('<br>');
  } else {
    errorBox.innerHTML = ''; 
    alert('Registration successful!'); 
    this.reset();             
  }
});
