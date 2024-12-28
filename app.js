// app.js

// Function to handle the Send transaction form
document.getElementById("send-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const walletAddress = document.getElementById("send-wallet-address").value;
    const amount = document.getElementById("send-amount").value;

    if (walletAddress && amount) {
        alert(`Successfully sent ${amount} $CSUI to ${walletAddress}`);
    } else {
        alert("Please fill in both fields.");
    }
});

// Function to copy wallet address (for the Receive option)
function copyAddress() {
    const walletAddress = document.getElementById("your-wallet-address").textContent;
    navigator.clipboard.writeText(walletAddress).then(() => {
        alert("Wallet address copied to clipboard!");
    });
}
