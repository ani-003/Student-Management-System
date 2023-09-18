// login-script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const registrationContainer = document.getElementById("registration-container");
    const registerBtnLogin = document.getElementById("register-btn-login");
    const registerBtnRegistration = document.getElementById("register-btn-registration");
    const backToLoginBtn = document.getElementById("back-to-login-btn");

    registerBtnLogin.addEventListener("click", () => {
        loginContainer.style.display = "none";
        registrationContainer.style.display = "block";
        registrationContainer.style.left = "10%";
        registrationContainer.style.width = "30%";
        registrationContainer.style.height = "100%";
        registrationContainer.style.top = "0%";
        
        
    });


    backToLoginBtn.addEventListener("click", () => {
        registrationContainer.style.display = "none";
        loginContainer.style.display = "block"; // Show the login container again
    });
});
