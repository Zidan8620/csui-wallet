// admin.js

const correctPassword = "FAQu@123";  // The correct admin password

document.getElementById("admin-login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const enteredPassword = document.getElementById("admin-password").value;
    
    if (enteredPassword === correctPassword) {
        window.location.href = "admin-dashboard.html";  // Redirect to the admin panel/dashboard
    } else {
        document.getElementById("error-message").style.display = "block";  // Show error if password is incorrect
    }
});
