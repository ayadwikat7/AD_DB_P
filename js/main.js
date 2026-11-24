/* ==================================================
   VENDRA — Home page script
   (navbar, footer, cart & toast live in js/layout.js)
   ================================================== */

// Wishlist toggle
document.querySelectorAll(".wish-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const icon = btn.querySelector("i");
        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");
    });
});

// Add to cart
document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        addToCart();
        btn.classList.add("added");
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        setTimeout(() => {
            btn.classList.remove("added");
            btn.innerHTML = '<i class="bi bi-plus-lg"></i>';
        }, 1200);
    });
});
