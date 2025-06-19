document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".loader");
    setTimeout(function () {
        e.style.display = "none";
    }, 5000);
});