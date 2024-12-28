// wallet.js

document.getElementById("create-wallet-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const walletName = document.getElementById("wallet-name").value;
    const password = document.getElementById("wallet-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (walletName && password) {
        alert(`Wallet '${walletName}' created successfully!`);
        // Simulate storing the wallet info (e.g., in localStorage, backend, etc.)
    } else {
        alert("Please fill in all the fields.");
    }
});
