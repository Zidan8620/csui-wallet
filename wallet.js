document.addEventListener("DOMContentLoaded", function () {
    // Get URL parameter to decide which form to show
    const urlParams = new URLSearchParams(window.location.search);
    const viewOption = urlParams.get("view");

    const walletForm = document.getElementById("wallet-form");
    const existingWalletForm = document.getElementById("existing-wallet-form");
    const formTitle = document.getElementById("form-title");

    // Show the appropriate form based on the URL (Create or View)
    if (viewOption === "existing") {
        walletForm.style.display = "none";  // Hide the 'Create Wallet' form
        existingWalletForm.style.display = "block";  // Show the 'Existing Wallet' form
        formTitle.textContent = "View Existing Wallet";
    } else if (viewOption === "create") {
        walletForm.style.display = "block";  // Show the 'Create Wallet' form
        existingWalletForm.style.display = "none";  // Hide the 'Existing Wallet' form
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
            alert(`Wallet '${walletName}' created successfully!`);
            // You can save the wallet information here (e.g., using localStorage, or your backend logic)
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
            alert(`Wallet '${walletName}' accessed successfully!`);
            // You can verify the existing wallet details here (e.g
