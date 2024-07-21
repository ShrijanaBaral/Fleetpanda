document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearAlert();
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var contactNo = document.getElementById('contactNo').value.trim();
    var password = document.getElementById('password').value.trim();
    var feedback = document.getElementById('feedback').value.trim();

    if (username === '') {
        displayAlert('Please enter your username');
        return;
    }

    if (email === '' || !isValidEmail(email)) {
        displayAlert('Please enter a valid email address');
        return;
    }

    if (contactNo === '') {
        displayAlert('Please enter your contact number');
        return;
    }

    if (password === '') {
        displayAlert('Please enter your password');
        return;
    }

    if (feedback === '') {
        displayAlert('Please provide your feedback');
        return;
    }
    alert('Logged In Successfully');
    document.getElementById('feedbackForm').reset();
});

function isValidEmail(email) {
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayAlert(message) {
    var alertBox = document.getElementById('alertBox');
    var alertMsg = document.createElement('div');
    alertMsg.classList.add('alert');
    alertMsg.textContent = message;
    alertBox.appendChild(alertMsg);
}

function clearAlert() {
    var alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = '';
}
