// ==========================================================
// VENDRA — CHECKOUT PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );


const checkoutProducts =
    document.getElementById(
        "checkoutProducts"
    );


const checkoutSubtotal =
    document.getElementById(
        "checkoutSubtotal"
    );


const checkoutDiscount =
    document.getElementById(
        "checkoutDiscount"
    );


const checkoutTotal =
    document.getElementById(
        "checkoutTotal"
    );


const placeOrderButton =
    document.getElementById(
        "placeOrderButton"
    );


const cardPaymentFields =
    document.getElementById(
        "cardPaymentFields"
    );


const paymentInputs =
    document.querySelectorAll(
        'input[name="payment"]'
    );


const paymentOptions =
    document.querySelectorAll(
        ".payment-option"
    );


const successOverlay =
    document.getElementById(
        "orderSuccessOverlay"
    );


const successOrderNumber =
    document.getElementById(
        "successOrderNumber"
    );



// ==========================================================
// RENDER ORDER SUMMARY
// ==========================================================

function renderCheckout() {

    const cart =
        getCart();


    const discount =
        Number(
            localStorage.getItem(
                "vendraDiscount"
            ) || 0
        );


    // ------------------------------------------------------
    // Empty Cart
    // ------------------------------------------------------

    if (cart.length === 0) {

        window.location.href =
            "cart.html";


        return;

    }



    checkoutProducts.innerHTML =
        "";


    let subtotal = 0;


    cart.forEach(
        item => {


            const lineTotal =
                Number(
                    item.price
                )
                *
                Number(
                    item.quantity
                );


            subtotal +=
                lineTotal;



            const productElement =
                document.createElement(
                    "div"
                );


            productElement.className =
                "checkout-product-item";


            productElement.innerHTML = `

                <div class="checkout-product-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <span>

                        ${item.quantity}

                    </span>

                </div>


                <div class="checkout-product-info">

                    <strong>

                        ${item.name}

                    </strong>


                    <small>

                        ${item.store}

                    </small>

                </div>


                <strong class="checkout-product-price">

                    $${lineTotal.toFixed(2)}

                </strong>

            `;


            checkoutProducts.appendChild(
                productElement
            );

        }
    );



    const discountAmount =
        subtotal *
        discount;


    const total =
        subtotal -
        discountAmount;



    checkoutSubtotal.textContent =
        "$" +
        subtotal.toFixed(2);


    checkoutDiscount.textContent =
        discountAmount > 0

            ? "-$" +
              discountAmount.toFixed(2)

            : "$0";


    checkoutTotal.textContent =
        "$" +
        total.toFixed(2);

}



// ==========================================================
// PAYMENT METHOD
// ==========================================================

paymentInputs.forEach(
    input => {

        input.addEventListener(
            "change",
            () => {


                paymentOptions.forEach(
                    option => {

                        const optionInput =
                            option.querySelector(
                                'input[name="payment"]'
                            );


                        option.classList.toggle(

                            "active",

                            optionInput.checked

                        );

                    }
                );



                const cardSelected =
                    input.value ===
                    "card"
                    &&
                    input.checked;


                if (cardSelected) {

                    cardPaymentFields
                        .classList
                        .remove(
                            "d-none"
                        );

                } else if (
                    input.value ===
                    "cash"
                    &&
                    input.checked
                ) {

                    cardPaymentFields
                        .classList
                        .add(
                            "d-none"
                        );

                }

            }
        );

    }
);



// ==========================================================
// CARD NUMBER FORMAT
// ==========================================================

const cardNumber =
    document.getElementById(
        "cardNumber"
    );


if (cardNumber) {

    cardNumber.addEventListener(
        "input",
        event => {


            let value =
                event.target.value
                    .replace(
                        /\D/g,
                        ""
                    )
                    .slice(
                        0,
                        16
                    );


            value =
                value.replace(
                    /(.{4})/g,
                    "$1 "
                )
                .trim();


            event.target.value =
                value;

        }
    );

}



// ==========================================================
// EXPIRY FORMAT
// ==========================================================

const cardExpiry =
    document.getElementById(
        "cardExpiry"
    );


if (cardExpiry) {

    cardExpiry.addEventListener(
        "input",
        event => {


            let value =
                event.target.value
                    .replace(
                        /\D/g,
                        ""
                    )
                    .slice(
                        0,
                        4
                    );


            if (
                value.length > 2
            ) {

                value =
                    value.slice(
                        0,
                        2
                    )
                    +
                    "/"
                    +
                    value.slice(
                        2
                    );

            }


            event.target.value =
                value;

        }
    );

}



// ==========================================================
// PLACE ORDER
// ==========================================================

checkoutForm.addEventListener(
    "submit",
    event => {


        event.preventDefault();



        const cart =
            getCart();


        if (
            cart.length === 0
        ) {

            showToast(
                "Your cart is empty"
            );


            return;

        }



        const selectedPayment =
            document.querySelector(
                'input[name="payment"]:checked'
            );


        // --------------------------------------------------
        // Validate card fields
        // --------------------------------------------------

        if (
            selectedPayment &&
            selectedPayment.value ===
            "card"
        ) {


            const number =
                document.getElementById(
                    "cardNumber"
                ).value.trim();


            const expiry =
                document.getElementById(
                    "cardExpiry"
                ).value.trim();


            const cvv =
                document.getElementById(
                    "cardCvv"
                ).value.trim();


            if (
                !number ||
                !expiry ||
                !cvv
            ) {

                showToast(
                    "Please enter your card details"
                );


                return;

            }

        }



        // --------------------------------------------------
        // Create demo order
        // --------------------------------------------------

        const orderNumber =
            "VND-" +
            Date.now()
                .toString()
                .slice(
                    -6
                );



        const order = {

            id:
                orderNumber,

            date:
                new Date()
                    .toISOString(),

            customer: {

                firstName:
                    document.getElementById(
                        "firstName"
                    ).value,

                lastName:
                    document.getElementById(
                        "lastName"
                    ).value,

                email:
                    document.getElementById(
                        "email"
                    ).value,

                phone:
                    document.getElementById(
                        "phone"
                    ).value,

                address:
                    document.getElementById(
                        "address"
                    ).value,

                city:
                    document.getElementById(
                        "city"
                    ).value

            },

            payment:
                selectedPayment
                    ? selectedPayment.value
                    : "cash",

            items:
                cart,

            status:
                "Processing"

        };



        // --------------------------------------------------
        // Save order for Order History later
        // --------------------------------------------------

        const orders =
            JSON.parse(
                localStorage.getItem(
                    "vendraOrders"
                )
                ||
                "[]"
            );


        orders.unshift(
            order
        );


        localStorage.setItem(
            "vendraOrders",
            JSON.stringify(
                orders
            )
        );



        // --------------------------------------------------
        // Clear cart
        // --------------------------------------------------

        localStorage.removeItem(
            "vendraCart"
        );


        localStorage.removeItem(
            "vendraDiscount"
        );


        updateCartCount();



        // --------------------------------------------------
        // Show success
        // --------------------------------------------------

        successOrderNumber.textContent =
            "#" +
            orderNumber;


        successOverlay.classList.remove(
            "d-none"
        );


        document.body.style.overflow =
            "hidden";

    }
);



// ==========================================================
// START
// ==========================================================

renderCheckout();