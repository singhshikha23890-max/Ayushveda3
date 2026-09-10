// Direct COD Order Submission (OTP Verification Removed)
async function handleSendOrderSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("order-name").value.trim();
  const phone = document.getElementById("order-phone").value.trim().replace(/\D/g, "");
  const age = document.getElementById("order-age").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const pincode = document.getElementById("order-pincode").value.trim();

  const errorEl = document.getElementById("order-send-error");
  const submitBtn = document.getElementById("order-submit-btn");

  if (!name || !phone || !address || !pincode) {
    if (errorEl) {
      errorEl.innerText = "कृपया सभी आवश्यक जानकारी दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
    return;
  }

  if (phone.length !== 10) {
    if (errorEl) {
      errorEl.innerText = "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
    return;
  }

  if (errorEl) errorEl.classList.add("hidden");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>ऑर्डर दर्ज किया जा रहा है...</span>`;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("age", age);
  formData.append("address", address);
  formData.append("pincode", pincode);

  try {
    await fetch("/process_order.php", {
      method: "POST",
      body: formData
    });

    // Populate Success Screen
    if (document.getElementById("summary-name")) document.getElementById("summary-name").innerText = name;
    if (document.getElementById("summary-phone")) document.getElementById("summary-phone").innerText = phone.slice(-10);
    if (document.getElementById("summary-address")) document.getElementById("summary-address").innerText = address;
    if (document.getElementById("summary-pincode")) document.getElementById("summary-pincode").innerText = pincode;

    document.getElementById("cod-order-form").classList.add("hidden");
    document.getElementById("cod-success-screen").classList.remove("hidden");
  } catch (err) {
    console.error("Order submission error:", err);
    if (errorEl) {
      errorEl.innerText = "ऑर्डर दर्ज करने में समस्या आई। कृपया पुनः प्रयास करें।";
      errorEl.classList.remove("hidden");
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>SEND ORDER</span>`;
    }
  }
}

// Reset Order Form
function handleResetOrderForm() {
  const successScreen = document.getElementById("cod-success-screen");
  const orderForm = document.getElementById("cod-order-form");
  if (successScreen) successScreen.classList.add("hidden");
  if (orderForm) orderForm.classList.remove("hidden");

  if (document.getElementById("order-name")) document.getElementById("order-name").value = "";
  if (document.getElementById("order-phone")) document.getElementById("order-phone").value = "";
  if (document.getElementById("order-age")) document.getElementById("order-age").value = "";
  if (document.getElementById("order-address")) document.getElementById("order-address").value = "";
  if (document.getElementById("order-pincode")) document.getElementById("order-pincode").value = "";
}
