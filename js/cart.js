// ==========================================================
// VENDRA — CART PAGE
// ==========================================================


const cartItemsContainer =
    document.getElementById(
        "cartItems"
    );

const cartEmpty =
    document.getElementById(
        "cartEmpty"
    );

const cartItemsCount =
    document.getElementById(
        "cartItemsCount"
    );

const cartSubtotal =
    document.getElementById(
        "cartSubtotal"
    );

const cartTotal =
    document.getElementById(
        "cartTotal"
    );

const discountValue =
    document.getElementById(
        "discountValue"
    );

const clearCartButton =
    document.getElementById(
        "clearCart"
    );

const checkoutButton =
    document.getElementById(
        "checkoutButton"
    );

const couponInput =
    document.getElementById(
        "couponInput"
    );

const applyCouponButton =
    document.getElementById(
        "applyCoupon"
    );

const couponMessage =
    document.getElementById(
        "couponMessage"
    );


let discount =
    Number(
        localStorage.getItem(
            "vendraDiscount"
        ) || 0
    );

// ==========================================================
// RENDER CART
// ==========================================================

function renderCart() {

    const cart =
        getCart();


    cartItemsContainer.innerHTML =
        "";


    // Empty cart
    if (cart.length === 0) {

        cartEmpty.classList.remove(
            "d-none"
        );

        clearCartButton.classList.add(
            "d-none"
        );

        checkoutButton.classList.add(
            "disabled"
        );


        cartItemsCount.textContent =
            "0";


        cartSubtotal.textContent =
            "$0";


        cartTotal.textContent =
            "$0";


        discountValue.textContent =
            "$0";


        updateCartCount();

        return;

    }


    cartEmpty.classList.add(
        "d-none"
    );

    clearCartButton.classList.remove(
        "d-none"
    );

    checkoutButton.classList.remove(
        "disabled"
    );


    let subtotal = 0;

    let totalQuantity = 0;


    cart.forEach(
        (item, index) => {


            subtotal +=
                item.price *
                item.quantity;


            totalQuantity +=
                item.quantity;


            const element =
                document.createElement(
                    "article"
                );


            element.className =
                "cart-product";


            element.innerHTML = `

                <div class="cart-product-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-product-info">

                    <span class="cart-product-store">

                        <i class="bi bi-patch-check-fill"></i>

                        ${item.store}

                    </span>


                    <h3>
                        ${item.name}
                    </h3>


                    <span class="cart-product-delivery">

                        <i class="bi bi-truck"></i>

                        Free delivery

                    </span>


                    <button
                        type="button"
                        class="cart-remove"
                        data-index="${index}"
                    >

                        <i class="bi bi-trash3"></i>

                        Remove

                    </button>

                </div>


                <div class="cart-product-right">

                    <strong class="cart-product-price">

                        $${item.price.toLocaleString()}

                    </strong>


                    <div class="cart-quantity">

                        <button
                            type="button"
                            data-action="minus"
                            data-index="${index}"
                        >

                            <i class="bi bi-dash"></i>

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            data-action="plus"
                            data-index="${index}"
                        >

                            <i class="bi bi-plus"></i>

                        </button>

                    </div>


                    <span class="cart-line-total">

                        $${(
                            item.price *
                            item.quantity
                        ).toLocaleString()}

                    </span>

                </div>

            `;


            cartItemsContainer.appendChild(
                element
            );

        }
    );


    const discountAmount =
        subtotal * discount;


    const total =
        subtotal -
        discountAmount;


    cartItemsCount.textContent =
        totalQuantity;


    cartSubtotal.textContent =
        "$" +
        subtotal.toLocaleString();


    discountValue.textContent =

        discountAmount > 0

            ? "-$" +
              discountAmount.toFixed(2)

            : "$0";


    cartTotal.textContent =
        "$" +
        total.toFixed(2);


    updateCartCount();

}


// ==========================================================
// CART ACTIONS
// ==========================================================

cartItemsContainer.addEventListener(
    "click",
    (event) => {


        const button =
            event.target.closest(
                "button"
            );


        if (!button) return;


        const index =
            Number(
                button.dataset.index
            );


        const cart =
            getCart();


        // Remove
        if (
            button.classList.contains(
                "cart-remove"
            )
        ) {

            cart.splice(
                index,
                1
            );


            saveCart(cart);

            renderCart();

            showToast(
                "Item removed from cart"
            );


            return;

        }


        // Quantity
        const action =
            button.dataset.action;


        if (action === "plus") {

            cart[index].quantity++;

        }


        if (action === "minus") {

            if (
                cart[index].quantity > 1
            ) {

                cart[index].quantity--;

            } else {

                cart.splice(
                    index,
                    1
                );

            }

        }


        saveCart(cart);

        renderCart();

    }
);


// ==========================================================
// CLEAR CART
// ==========================================================

clearCartButton.addEventListener(
    "click",
    () => {

        localStorage.removeItem(
            "vendraCart"
        );


        discount = 0;


        renderCart();


        showToast(
            "Cart cleared"
        );

    }
);


// ==========================================================
// COUPON
// ==========================================================

applyCouponButton.addEventListener(
    "click",
    () => {


        const code =
            couponInput.value
                .trim()
                .toUpperCase();


        /*
         Demo coupon for frontend only.
         Backend/database will validate later.
        */

    if (code === "VENDRA10") {

    discount = 0.10;

    localStorage.setItem(
        "vendraDiscount",
        discount
    );

    couponMessage.textContent =
        "10% discount applied";

    couponMessage.className =
        "coupon-success";

    renderCart();

} else {

    discount = 0;

    localStorage.removeItem(
        "vendraDiscount"
    );

    couponMessage.textContent =
        "Invalid promo code";

    couponMessage.className =
        "coupon-error";

    renderCart();

}

    }
);


// ==========================================================
// START
// ==========================================================

renderCart();