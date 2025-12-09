// Recharge Button Logic
document.addEventListener("DOMContentLoaded", () => {
  
  const btn = document.getElementById("rechargeBtn");
  const success = document.getElementById("successMsg");

  if (btn) {
    btn.addEventListener("click", () => {
      const mobile = document.getElementById("mobileInput").value;
      const operator = document.getElementById("operatorInput").value;
      const amount = document.getElementById("amountInput").value;

      if (mobile.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return;
      }

      if (!operator) {
        alert("Please select an operator");
        return;
      }

      if (amount < 10) {
        alert("Enter a valid amount");
        return;
      }

      success.classList.remove("hidden");
      setTimeout(() => success.classList.add("hidden"), 3000);
    });
  }

});
