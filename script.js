// ========================================
// SK Travel&Tour Hatyai
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("SK Travel&Tour Hatyai");

    // ----------------------------------------
    // ปุ่มจองทัวร์
    // ----------------------------------------

    const bookingButtons = document.querySelectorAll(".booking-btn");

    bookingButtons.forEach((button) => {

        button.addEventListener("click", () => {

            window.location.href = "booking.html";

        });

    });


    // ----------------------------------------
    // ปุ่มดูแพ็กเกจทัวร์
    // ----------------------------------------

    const tourButtons = document.querySelectorAll(".tour-btn");

    tourButtons.forEach((button) => {

        button.addEventListener("click", () => {

            window.location.href = "tours.html";

        });

    });


    // ----------------------------------------
    // ปุ่มเข้าสู่ระบบ
    // ----------------------------------------

    const loginButtons = document.querySelectorAll(".login-btn");

    loginButtons.forEach((button) => {

        button.addEventListener("click", () => {

            window.location.href = "login.html";

        });

    });

});