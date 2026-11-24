// ==========================================================
// VENDRA — ORDER TRACKING PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const trackingContent =
    document.getElementById(
        "trackingContent"
    );


const trackingNotFound =
    document.getElementById(
        "trackingNotFound"
    );


const trackingOrderNumber =
    document.getElementById(
        "trackingOrderNumber"
    );


const trackingDate =
    document.getElementById(
        "trackingDate"
    );


const trackingItemsCount =
    document.getElementById(
        "trackingItemsCount"
    );


const trackingCurrentStatus =
    document.getElementById(
        "trackingCurrentStatus"
    );


const trackingProducts =
    document.getElementById(
        "trackingProducts"
    );


const trackingCustomer =
    document.getElementById(
        "trackingCustomer"
    );


const trackingAddress =
    document.getElementById(
        "trackingAddress"
    );


const trackingPhone =
    document.getElementById(
        "trackingPhone"
    );


const trackingPayment =
    document.getElementById(
        "trackingPayment"
    );


const trackingTotal =
    document.getElementById(
        "trackingTotal"
    );


const trackingSteps =
    document.querySelectorAll(
        ".tracking-step"
    );



// ==========================================================
// GET ORDERS
// ==========================================================

function getTrackingOrders() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "vendraOrders"
            )
            ||
            "[]"
        );

    } catch (error) {

        return [];

    }

}



// ==========================================================
// ORDER ID FROM URL
// ==========================================================

const trackingParams =
    new URLSearchParams(
        window.location.search
    );


const trackingOrderId =
    trackingParams.get(
        "order"
    );



// ==========================================================
// FIND ORDER
// ==========================================================

const trackingOrder =
    getTrackingOrders()
        .find(
            order =>
                order.id ===
                trackingOrderId
        );



// ==========================================================
// HELPERS
// ==========================================================

function formatTrackingDate(
    value
) {

    const date =
        new Date(
            value
        );


    return date.toLocaleDateString(
        "en-US",
        {
            year:
                "numeric",

            month:
                "long",

            day:
                "numeric"
        }
    );

}



function calculateTrackingTotal(
    order
) {

    return order.items.reduce(
        (total, item) => {

            return (
                total
                +
                Number(
                    item.price
                )
                *
                Number(
                    item.quantity
                )
            );

        },
        0
    );

}



// ==========================================================
// STATUS NORMALIZATION
// ==========================================================

function normalizeStatus(
    status
) {

    const value =
        (
            status ||
            "Processing"
        )
            .trim()
            .toLowerCase();


    if (
        value ===
        "delivered"
    ) {

        return "delivered";

    }


    if (
        value ===
        "out for delivery"
        ||
        value ===
        "out-for-delivery"
    ) {

        return "out-for-delivery";

    }


    if (
        value ===
        "shipped"
    ) {

        return "shipped";

    }


    return "processing";

}



// ==========================================================
// TIMELINE
// ==========================================================

function renderTimeline(
    status
) {

    const order =
        [
            "processing",
            "shipped",
            "out-for-delivery",
            "delivered"
        ];


    const normalizedStatus =
        normalizeStatus(
            status
        );


    const currentIndex =
        order.indexOf(
            normalizedStatus
        );



    trackingSteps.forEach(
        step => {


            const stepName =
                step.dataset.step;


            const stepIndex =
                order.indexOf(
                    stepName
                );


            step.classList.remove(
                "completed",
                "current"
            );


            if (
                stepIndex <
                currentIndex
            ) {

                step.classList.add(
                    "completed"
                );

            }


            if (
                stepIndex ===
                currentIndex
            ) {

                step.classList.add(
                    "current"
                );

            }

        }
    );

}



// ==========================================================
// RENDER PRODUCTS
// ==========================================================

function renderTrackingProducts(
    order
) {

    trackingProducts.innerHTML =
        "";


    order.items.forEach(
        item => {


            const lineTotal =
                Number(
                    item.price
                )
                *
                Number(
                    item.quantity
                );


            const productElement =
                document.createElement(
                    "article"
                );


            productElement.className =
                "tracking-product";


            productElement.innerHTML = `

                <div class="tracking-product-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="tracking-product-info">

                    <small>

                        ${item.store || "Vendra store"}

                    </small>


                    <strong>

                        ${item.name}

                    </strong>


                    <span>

                        Quantity: ${item.quantity}

                    </span>

                </div>


                <strong class="tracking-product-price">

                    $${lineTotal.toFixed(2)}

                </strong>

            `;


            trackingProducts.appendChild(
                productElement
            );

        }
    );

}



// ==========================================================
// RENDER ORDER
// ==========================================================

function renderTrackingOrder() {

    if (
        !trackingOrder
    ) {

        trackingNotFound.classList.remove(
            "d-none"
        );


        return;

    }



    trackingContent.classList.remove(
        "d-none"
    );



    // ------------------------------------------------------
    // BASIC ORDER INFO
    // ------------------------------------------------------

    trackingOrderNumber.textContent =
        "#" +
        trackingOrder.id;


    trackingDate.textContent =
        formatTrackingDate(
            trackingOrder.date
        );


    const itemCount =
        trackingOrder.items.reduce(
            (total, item) => {

                return (
                    total
                    +
                    Number(
                        item.quantity
                    )
                );

            },
            0
        );


    trackingItemsCount.textContent =
        itemCount +
        (
            itemCount === 1
                ? " item"
                : " items"
        );


    trackingCurrentStatus.textContent =
        trackingOrder.status ||
        "Processing";



    // ------------------------------------------------------
    // CUSTOMER
    // ------------------------------------------------------

    const customer =
        trackingOrder.customer ||
        {};


    trackingCustomer.textContent =
        [
            customer.firstName,
            customer.lastName
        ]
            .filter(Boolean)
            .join(" ")
        ||
        "Vendra customer";


    trackingAddress.textContent =
        [
            customer.address,
            customer.city
        ]
            .filter(Boolean)
            .join(", ")
        ||
        "Address not available";


    trackingPhone.textContent =
        customer.phone ||
        "Not available";



    // ------------------------------------------------------
    // PAYMENT
    // ------------------------------------------------------

    trackingPayment.textContent =

        trackingOrder.payment ===
        "card"

            ? "Credit / Debit card"

            : "Cash on delivery";



    // ------------------------------------------------------
    // TOTAL
    // ------------------------------------------------------

    trackingTotal.textContent =
        "$" +
        calculateTrackingTotal(
            trackingOrder
        ).toFixed(2);



    // ------------------------------------------------------
    // PRODUCTS
    // ------------------------------------------------------

    renderTrackingProducts(
        trackingOrder
    );



    // ------------------------------------------------------
    // TIMELINE
    // ------------------------------------------------------

    renderTimeline(
        trackingOrder.status
    );

}



// ==========================================================
// START
// ==========================================================

renderTrackingOrder();