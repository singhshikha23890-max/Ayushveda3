// Firebase Config & Real SMS OTP Logic
const firebaseConfig = {
  apiKey: "AIzaSyBUgC79YqJiGipLVgMjR4rIoVXJ0B7nqZQ",
  authDomain: "ayurhveda.firebaseapp.com",
  projectId: "ayurhveda",
  storageBucket: "ayurhveda.firebasestorage.app",
  messagingSenderId: "770062639168",
  appId: "1:770062639168:web:8c68f895d7b60c17cc3fa5",
  measurementId: "G-H821QJTZ61"
};

// Initialize Firebase App
if (window.firebase && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let recaptchaVerifier = null;
let confirmationResult = null;
let pendingOrderData = null;

// Send Real SMS OTP Function
async function handleSendOrderSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("order-name").value.trim();
  const phone = document.getElementById("order-phone").value.trim().replace(/\D/g, "");
  const age = document.getElementById("order-age").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const pincode = document.getElementById("order-pincode").value.trim();

  const errorEl = document.getElementById("order-send-error");
  const submitBtn = document.getElementById("order-submit-btn");

  if (!name || !phone || !address) {
    if (errorEl) {
      errorEl.innerText = "कृपया सभी आवश्यक जानकारी दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
    return;
  }

  if (phone.length < 10) {
    if (errorEl) {
      errorEl.innerText = "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
    return;
  }

  if (errorEl) errorEl.classList.add("hidden");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>OTP भेजा जा रहा है...</span>`;
  }

  pendingOrderData = { name, phone, age, address, pincode };

  try {
    if (!recaptchaVerifier) {
      recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
        callback: function (response) {}
      });
    }

    const formattedPhone = phone.startsWith("91") && phone.length === 12 ? `+${phone}` : `+91${phone.slice(-10)}`;
    confirmationResult = await firebase.auth().signInWithPhoneNumber(formattedPhone, recaptchaVerifier);

    // Switch step to OTP Verification Form
    document.getElementById("cod-order-form").classList.add("hidden");
    document.getElementById("cod-otp-form").classList.remove("hidden");
    document.getElementById("order-form-title").innerText = "OTP सत्यापन (OTP Verification)";
    document.getElementById("order-form-subtitle").innerText = `आपके मोबाइल नंबर +91 ${phone.slice(-10)} पर 6-अंकों का SMS OTP भेजा गया है`;
    if (document.getElementById("order-header-icon")) {
      document.getElementById("order-header-icon").innerHTML = `<i data-lucide="key-round" class="w-6 h-6"></i>`;
      if (window.lucide) lucide.createIcons();
    }
  } catch (err) {
    console.error("Firebase Phone Auth error:", err);
    if (recaptchaVerifier) {
      try { recaptchaVerifier.clear(); } catch (e) {}
      recaptchaVerifier = null;
    }

    let errorMsg = "SMS OTP भेजने में समस्या आई।";
    if (err && err.code === "auth/quota-exceeded") {
      errorMsg = "Firebase Daily SMS Quota (10 SMS/day) पूरा हो गया है! Firebase Console में Test Phone Number जोड़ें या Billing ऑन करें।";
    } else if (err && err.code === "auth/invalid-app-credential") {
      errorMsg = "Firebase App Credential त्रुटि (App Check / Domain verification failed).";
    } else if (err && err.code === "auth/too-many-requests") {
      errorMsg = "इस मोबाइल नंबर पर अत्यधिक प्रयास किए गए हैं। कृपया थोड़ी देर बाद प्रयास करें।";
    } else if (err && err.message) {
      errorMsg = `Firebase त्रुटि (${err.code || "error"}): ${err.message}`;
    }

    if (errorEl) {
      errorEl.innerText = errorMsg;
      errorEl.classList.remove("hidden");
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>SEND ORDER</span>`;
    }
  }
}

// Verify 6-Digit SMS OTP Function
async function handleVerifyOtpSubmit(e) {
  e.preventDefault();

  const otpInput = document.getElementById("otp-input-field").value.trim();
  const errorEl = document.getElementById("otp-verify-error");
  const verifyBtn = document.getElementById("otp-verify-btn");

  if (!otpInput || otpInput.length < 6) {
    if (errorEl) {
      errorEl.innerText = "कृपया आपके मोबाइल पर प्राप्त 6 अंकों का SMS OTP दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
    return;
  }

  if (errorEl) errorEl.classList.add("hidden");
  if (verifyBtn) {
    verifyBtn.disabled = true;
    verifyBtn.innerHTML = `<span>सत्यापित किया जा रहा है...</span>`;
  }

  try {
    if (confirmationResult) {
      await confirmationResult.confirm(otpInput);
      
      // Submit order to process_order.php backend
      if (pendingOrderData) {
        const formData = new FormData();
        formData.append("name", pendingOrderData.name);
        formData.append("phone", pendingOrderData.phone);
        formData.append("age", pendingOrderData.age);
        formData.append("address", pendingOrderData.address);
        formData.append("pincode", pendingOrderData.pincode);

        try {
          await fetch("/process_order.php", {
            method: "POST",
            body: formData
          });
        } catch (fetchErr) {
          console.warn("Backend order log warning:", fetchErr);
        }
      }

      // Populate Success Screen
      document.getElementById("summary-name").innerText = pendingOrderData.name;
      document.getElementById("summary-phone").innerText = pendingOrderData.phone.slice(-10);
      document.getElementById("summary-address").innerText = pendingOrderData.address;
      document.getElementById("summary-pincode").innerText = pendingOrderData.pincode;

      document.getElementById("cod-otp-form").classList.add("hidden");
      document.getElementById("cod-success-screen").classList.remove("hidden");
    } else {
      if (errorEl) {
        errorEl.innerText = "सत्यापन सत्र समाप्त हो गया है। कृपया पुनः प्रयास करें।";
        errorEl.classList.remove("hidden");
      }
    }
  } catch (err) {
    console.error("OTP verification error:", err);
    if (errorEl) {
      errorEl.innerText = "गलत OTP! कृपया आपके मोबाइल पर प्राप्त 6 अंकों का SMS OTP दर्ज करें।";
      errorEl.classList.remove("hidden");
    }
  } finally {
    if (verifyBtn) {
      verifyBtn.disabled = false;
      verifyBtn.innerHTML = `<span>वेरीफाई और ऑर्डर कन्फर्म करें (Verify & Confirm)</span>`;
    }
  }
}

// Edit Form / Back button
function handleEditFormStep() {
  document.getElementById("cod-otp-form").classList.add("hidden");
  document.getElementById("cod-order-form").classList.remove("hidden");
  document.getElementById("order-form-title").innerText = "कैश ऑन डिलीवरी ऑर्डर फॉर्म";
  document.getElementById("order-form-subtitle").innerText = "नीचे दी गई जानकारी भरें और अपना ऑर्डर दर्ज करें";
  if (document.getElementById("order-header-icon")) {
    document.getElementById("order-header-icon").innerHTML = `<i data-lucide="shopping-bag" class="w-6 h-6"></i>`;
    if (window.lucide) lucide.createIcons();
  }
}

// Reset Order Form
function handleResetOrderForm() {
  document.getElementById("cod-success-screen").classList.add("hidden");
  document.getElementById("cod-order-form").classList.remove("hidden");
  document.getElementById("order-name").value = "";
  document.getElementById("order-phone").value = "";
  document.getElementById("order-age").value = "";
  document.getElementById("order-address").value = "";
  document.getElementById("order-pincode").value = "";
  document.getElementById("otp-input-field").value = "";
  confirmationResult = null;
  pendingOrderData = null;
  handleEditFormStep();
}
