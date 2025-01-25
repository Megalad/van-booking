document.getElementById("loginBtn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close-arrow").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});
