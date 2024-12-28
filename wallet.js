// wallet.js

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const isExistingWallet = urlParams.get("view") === "existing";

    const walletForm = document.getElementById("wallet-form");
    const existingWalletForm = document.getElementById("existing-wallet-form");
    const formTitle = document.getElementById("form-title");

    // Show the appropriate form based on the URL
    if (isExistingWallet) {
        walletForm.style.display = "none";
        existingWalletForm.style.display = "block";
        formTitle.textContent = "View Existing Wallet";
    } else {
        walletForm.style.display = "block";
        existingWalletForm.style.display = "none";
        formTitle.textContent = "Create a New Wallet";
    }

    // Handle Create New Wallet form submission
    walletForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const walletName = document.getElementById("wallet-name").value;
        const password = document.getElementById("wallet-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (walletName && password) {
            // Simulate storing the wallet info (e.g., in localStorage, backend, etc.)
            alert(`Wallet '${walletName}' created successfully!`);
        } else {
            alert("Please fill in all the fields.");
        }
    });

    // Handle Existing Wallet form submission
    existingWalletForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const walletName = document.getElementById("existing-wallet-name").value;
        const password = document.getElementById("existing-wallet-password").value;

        if (walletName && password) {
            // Simulate retrieving the wallet info (e.g., from localStorage, backend, etc.)
            alert(`Wallet '${walletName}' accessed successfully!`);
        } else {
            alert("Please fill in all the fields.");
        }
    });
});
