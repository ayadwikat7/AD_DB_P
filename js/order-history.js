// ==========================================================
// VENDRA — ORDER HISTORY PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const ordersList =
    document.getElementById(
        "ordersList"
    );


const ordersEmpty =
    document.getElementById(
        "ordersEmpty"
    );


const orderSearch =
    document.getElementById(
        "orderSearch"
    );


const orderStatusFilter =
    document.getElementById(
        "orderStatusFilter"
    );


const totalOrders =
    document.getElementById(
        "totalOrders"
    );


const processingOrders =
    document.getElementById(
        "processingOrders"
    );


const shippedOrders =
    document.getElementById(
        "shippedOrders"
    );


const deliveredOrders =
    document.getElementById(
        "deliveredOrders"
    );



// ==========================================================
// GET ORDERS
// ==========================================================

function getOrders() {

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
// CALCULATE ORDER TOTAL
// ==========================================================

function getOrderTotal(
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
// FORMAT DATE
// ==========================================================

function formatOrderDate(
    date
) {

    const parsedDate =
        new Date(
            date
        );


    return parsedDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

}



// ==========================================================
// STATUS CLASS
// ==========================================================

function getStatusClass(
    status
) {

    switch (
        status
    ) {

        case "Delivered":

            return "delivered";


        case "Shipped":

            return "shipped";


        case "Cancelled":

            return "cancelled";


        default:

            return "processing";

    }

}



// ==========================================================
// UPDATE STATS
// ==========================================================

function updateStats(
    orders
) {

    totalOrders.textContent =
        orders.length;


    processingOrders.textContent =
        orders.filter(
            order =>
                order.status ===
                "Processing"
        ).length;


    shippedOrders.textContent =
        orders.filter(
            order =>
                order.status ===
                "Shipped"
        ).length;


    deliveredOrders.textContent =
        orders.filter(
            order =>
                order.status ===
                "Delivered"
        ).length;

}



// ==========================================================
// RENDER ORDERS
// ==========================================================

function renderOrders() {

    const orders =
        getOrders();


    updateStats(
        orders
    );


    const searchValue =
        orderSearch.value
            .trim()
            .toLowerCase();


    const selectedStatus =
        orderStatusFilter.value;



    const filteredOrders =
        orders.filter(
            order => {


                const matchesSearch =
                    order.id
                        .toLowerCase()
                        .includes(
                            searchValue
                        );


                const matchesStatus =
                    selectedStatus ===
                    "all"
                    ||
                    order.status ===
                    selectedStatus;


                return (
                    matchesSearch
                    &&
                    matchesStatus
                );

            }
        );



    ordersList.innerHTML =
        "";



    // ------------------------------------------------------
    // Empty state
    // ------------------------------------------------------

    if (
        filteredOrders.length === 0
    ) {

        ordersEmpty.classList.remove(
            "d-none"
        );


        return;

    }


    ordersEmpty.classList.add(
        "d-none"
    );



    filteredOrders.forEach(
        order => {


            const orderTotal =
                getOrderTotal(
                    order
                );


            const orderElement =
                document.createElement(
                    "article"
                );


            orderElement.className =
                "order-history-card";


            const statusClass =
                getStatusClass(
                    order.status
                );



            const productImages =
                order.items
                    .slice(
                        0,
                        4
                    )
                    .map(
                        item => `

                            <div class="order-product-thumb">

                                <img
                                    src="${item.image}"
                                    alt="${item.name}"
                                >

                            </div>

                        `
                    )
                    .join("");



            const extraItems =
                order.items.length > 4

                    ? `

                        <div class="order-product-more">

                            +${order.items.length - 4}

                        </div>

                    `

                    : "";



            orderElement.innerHTML = `

                <div class="order-card-top">


                    <div>


                        <span class="order-number-label">

                            Order number

                        </span>


                        <h2>

                            #${order.id}

                        </h2>


                    </div>



                    <span class="order-status ${statusClass}">

                        ${order.status}

                    </span>


                </div>



                <div class="order-card-meta">


                    <div>

                        <i class="bi bi-calendar3"></i>

                        <span>

                            Ordered on

                            <strong>

                                ${formatOrderDate(
                                    order.date
                                )}

                            </strong>

                        </span>

                    </div>



                    <div>

                        <i class="bi bi-box-seam"></i>

                        <span>

                            ${order.items.length}

                            ${
                                order.items.length === 1
                                    ? "item"
                                    : "items"
                            }

                        </span>

                    </div>



                    <div>

                        <i class="bi bi-credit-card"></i>

                        <span>

                            ${
                                order.payment === "card"

                                    ? "Card payment"

                                    : "Cash on delivery"
                            }

                        </span>

                    </div>


                </div>



                <div class="order-card-products">


                    <div class="order-product-images">

                        ${productImages}

                        ${extraItems}

                    </div>



                    <div class="order-card-total">

                        <small>

                            Order total

                        </small>


                        <strong>

                            $${orderTotal.toFixed(2)}

                        </strong>

                    </div>


                </div>



                <div class="order-card-bottom">


                    <div class="order-delivery-address">

                        <i class="bi bi-geo-alt"></i>

                        <span>

                            ${
                                order.customer?.city
                                ||
                                "Delivery address"
                            }

                        </span>

                    </div>



                    <div class="order-actions">


                        <button
                            type="button"
                            class="order-details-btn"
                            data-order="${order.id}"
                        >

                            <i class="bi bi-eye"></i>

                            Details

                        </button>



                        <a
                            href="order-tracking.html?order=${encodeURIComponent(
                                order.id
                            )}"
                            class="order-track-btn"
                        >

                            Track order

                            <i class="bi bi-arrow-right"></i>

                        </a>


                    </div>


                </div>

            `;


            ordersList.appendChild(
                orderElement
            );

        }
    );

}



// ==========================================================
// SEARCH
// ==========================================================

orderSearch.addEventListener(
    "input",
    renderOrders
);



// ==========================================================
// FILTER
// ==========================================================

orderStatusFilter.addEventListener(
    "change",
    renderOrders
);



// ==========================================================
// DETAILS BUTTON
// ==========================================================

ordersList.addEventListener(
    "click",
    event => {


        const detailsButton =
            event.target.closest(
                ".order-details-btn"
            );


        if (!detailsButton) {

            return;

        }


        const id =
            detailsButton.dataset.order;


        const order =
            getOrders().find(
                item =>
                    item.id ===
                    id
            );


        if (!order) {

            return;

        }


        const names =
            order.items
                .map(
                    item =>
                        `${item.quantity} × ${item.name}`
                )
                .join(", ");


        showToast(
            names
        );

    }
);



// ==========================================================
// START
// ==========================================================

renderOrders();