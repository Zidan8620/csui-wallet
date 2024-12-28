// admin-dashboard.js

document.getElementById("send-coins-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const walletAddress = document.getElementById("admin-wallet-address").value;
    const amount = document.getElementById("admin-amount").value;

    if (walletAddress && amount) {
        alert(`Successfully sent ${amount} $CSUI to ${walletAddress}`);
    } else {
        alert("Please fill in both fields.");
    }
});
