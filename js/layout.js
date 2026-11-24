// ==========================================================
// VENDRA — SHARED NAVBAR & FOOTER
// ==========================================================


const SITE_NAVBAR = `

<header class="vx-header" id="vxHeader">

    <div class="vx-topbar">

        <div class="container">

            <span>
                <i class="bi bi-truck"></i>
                Free delivery on orders over $50
            </span>

            <span class="d-none d-md-inline">
                <i class="bi bi-shield-check"></i>
                Secure payment & easy returns
            </span>

        </div>

    </div>


    <nav class="navbar navbar-expand-lg vx-nav">

        <div class="container">


            <!-- Logo -->

            <a class="vx-brand"
               href="index.html"
               aria-label="Vendra home">

                <img
                    src="images/vendra-logo.svg"
                    alt="Vendra"
                >

            </a>



            <!-- Menu -->

            <div class="collapse navbar-collapse order-last order-lg-0"
                 id="vxMenu">

                <ul class="navbar-nav vx-links mx-lg-auto">

                    <li class="nav-item">

                        <a class="nav-link"
                           data-page="home"
                           href="index.html">

                            <i class="bi bi-house-door"></i>

                            Home

                        </a>

                    </li>


                    <li class="nav-item">

                        <a class="nav-link"
                           data-page="products"
                           href="products.html">

                            <i class="bi bi-grid"></i>

                            Products

                        </a>

                    </li>


                    <li class="nav-item">

                        <a class="nav-link"
                           data-page="stores"
                           data-section="stores"
                           href="index.html#stores">

                            <i class="bi bi-shop"></i>

                            Stores

                        </a>

                    </li>


                    <li class="nav-item">

                        <a class="nav-link"
                           data-page="how"
                           data-section="how"
                           href="index.html#how">

                            <i class="bi bi-lightning-charge"></i>

                            How it works

                        </a>

                    </li>

                </ul>



                <div class="vx-menu-actions">

                    <a href="products.html"
                       class="vx-icon-btn"
                       aria-label="Search"
                       title="Search">

                        <i class="bi bi-search"></i>

                        <span class="d-lg-none">
                            Search
                        </span>

                    </a>


                    <a href="#"
                       class="vx-icon-btn"
                       aria-label="Wishlist"
                       title="Wishlist">

                        <i class="bi bi-heart"></i>

                        <span class="d-lg-none">
                            Wishlist
                        </span>

                    </a>


                   <a href="login.html"
   class="vx-signin d-lg-none">

                        <i class="bi bi-person"></i>

                        Sign in

                    </a>

                </div>

            </div>



            <!-- Right side -->

            <div class="vx-right">


                <!-- Cart -->

                <a href="cart.html"
                   class="vx-icon-btn vx-cart"
                   aria-label="Cart"
                   title="Cart">

                    <i class="bi bi-bag"></i>

                    <span class="cart-count">
                        0
                    </span>

                </a>


                <span class="vx-divider d-none d-lg-block"></span>


                <!-- Login -->

               <a href="order-history.html"
   class="vx-signin d-none d-lg-inline-flex">

    <i class="bi bi-box-seam"></i>

    My Orders

</a>


                <!-- Mobile menu -->

                <button
                    class="vx-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#vxMenu"
                    aria-controls="vxMenu"
                    aria-expanded="false"
                    aria-label="Open menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>


        </div>

    </nav>

</header>

`;



// ==========================================================
// FOOTER
// ==========================================================

const SITE_FOOTER = `

<footer class="vendra-footer">

    <div class="container-fluid px-4 px-lg-5">

        <div class="footer-shell">


            <div class="footer-newsletter">

                <div>

                    <h3>
                        Get the best deals first
                    </h3>

                    <p>
                        Subscribe and receive weekly offers
                        from your favorite stores.
                    </p>

                </div>


                <form class="newsletter-form"
                      id="newsletterForm">

                    <input
                        type="email"
                        placeholder="Your email address"
                        required
                    >

                    <button type="submit">
                        Subscribe
                    </button>

                </form>

            </div>



            <div class="row g-4 footer-links">


                <div class="col-lg-4">

                    <a class="vendra-logo footer-logo"
                       href="index.html">

                        <span class="logo-mark">
                            V
                        </span>

                        Vendra

                    </a>


                    <p class="footer-about">

                        One marketplace that brings
                        trusted stores and happy shoppers
                        together.

                    </p>


                    <div class="footer-social">

                        <a href="#">
                            <i class="bi bi-instagram"></i>
                        </a>

                        <a href="#">
                            <i class="bi bi-facebook"></i>
                        </a>

                        <a href="#">
                            <i class="bi bi-twitter-x"></i>
                        </a>

                        <a href="#">
                            <i class="bi bi-tiktok"></i>
                        </a>

                    </div>

                </div>



                <div class="col-6 col-lg-2">

                    <h4>Shop</h4>

                    <ul>

                        <li>
                            <a href="products.html">
                                Products
                            </a>
                        </li>

                        <li>
                            <a href="index.html#stores">
                                Stores
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Deals
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                New arrivals
                            </a>
                        </li>

                    </ul>

                </div>



                <div class="col-6 col-lg-2">

                    <h4>Sell</h4>

                    <ul>

                        <li>
                            <a href="#">
                                Open a store
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Seller center
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Pricing
                            </a>
                        </li>

                    </ul>

                </div>



                <div class="col-6 col-lg-2">

                    <h4>Help</h4>

                    <ul>

                        <li>
                            <a href="#">
                                FAQ
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Shipping
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Returns
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Contact us
                            </a>
                        </li>

                    </ul>

                </div>



                <div class="col-6 col-lg-2">

                    <h4>Company</h4>

                    <ul>

                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Careers
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Privacy
                            </a>
                        </li>

                    </ul>

                </div>


            </div>



            <div class="footer-bottom">

                <span>
                    © 2026 Vendra.
                    All rights reserved.
                </span>

                <span>
                    Made with
                    <i class="bi bi-heart-fill"></i>
                    for shoppers
                </span>

            </div>


        </div>

    </div>

</footer>

`;



// ==========================================================
// INJECT NAVBAR + FOOTER
// ==========================================================

(function () {

    const navSlot =
        document.getElementById(
            "site-navbar"
        );


    const footerSlot =
        document.getElementById(
            "site-footer"
        );


    if (navSlot) {

        navSlot.outerHTML =
            SITE_NAVBAR;

    }


    if (footerSlot) {

        footerSlot.outerHTML =
            SITE_FOOTER;

    }



    const header =
        document.getElementById(
            "vxHeader"
        );


    if (!header) {

        return;

    }


    const links =
        header.querySelectorAll(
            ".vx-links .nav-link"
        );


    const page =
        document.body.dataset.page;



    // ------------------------------------------------------
    // Active menu
    // ------------------------------------------------------

    links.forEach(
        (link) => {

            if (
                link.dataset.page === page
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );



    // ------------------------------------------------------
    // Header scroll
    // ------------------------------------------------------

    const onScroll = () => {

        header.classList.toggle(

            "scrolled",

            window.scrollY > 20

        );

    };


    onScroll();


    window.addEventListener(
        "scroll",
        onScroll,
        {
            passive: true
        }
    );



    // ------------------------------------------------------
    // Home section highlighting
    // ------------------------------------------------------

    if (page === "home") {

        const sectionLinks =
            [...links].filter(
                link =>
                    link.dataset.section
            );


        window.addEventListener(
            "scroll",
            () => {

                let current =
                    "home";


                sectionLinks.forEach(
                    (link) => {

                        const section =
                            document.getElementById(
                                link.dataset.section
                            );


                        if (
                            section &&
                            window.scrollY >=
                            section.offsetTop - 140
                        ) {

                            current =
                                link.dataset.page;

                        }

                    }
                );


                links.forEach(
                    (link) => {

                        link.classList.toggle(

                            "active",

                            link.dataset.page ===
                            current

                        );

                    }
                );

            },
            {
                passive: true
            }
        );

    }



    // ------------------------------------------------------
    // Mobile menu close
    // ------------------------------------------------------

    const menu =
        document.getElementById(
            "vxMenu"
        );


    if (menu) {

        menu
            .querySelectorAll("a")
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            if (
                                menu.classList.contains(
                                    "show"
                                )
                                &&
                                window.bootstrap
                            ) {

                                bootstrap.Collapse
                                    .getOrCreateInstance(
                                        menu
                                    )
                                    .hide();

                            }

                        }
                    );

                }
            );

    }



    // ------------------------------------------------------
    // Newsletter
    // ------------------------------------------------------

    const form =
        document.getElementById(
            "newsletterForm"
        );


    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                showToast(
                    "Thanks for subscribing!"
                );


                form.reset();

            }
        );

    }

})();



// ==========================================================
// CART STORAGE
// ==========================================================

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "vendraCart"
            )
            || "[]"
        );

    } catch (error) {

        return [];

    }

}



function saveCart(cart) {

    localStorage.setItem(
        "vendraCart",
        JSON.stringify(cart)
    );


    updateCartCount();

}



function updateCartCount() {

    const count =
        document.querySelector(
            ".cart-count"
        );


    if (!count) {

        return;

    }


    const cart =
        getCart();


    const totalQuantity =
        cart.reduce(

            (total, item) => {

                return (
                    total +
                    Number(
                        item.quantity || 0
                    )
                );

            },

            0

        );


    count.textContent =
        totalQuantity;

}



function addToCart(product) {

    if (
        !product ||
        !product.name
    ) {

        return;

    }


    const cart =
        getCart();


    const existingItem =
        cart.find(

            item =>
                item.name ===
                product.name

        );


    const quantity =
        Number(
            product.quantity || 1
        );


    if (existingItem) {

        existingItem.quantity +=
            quantity;

    } else {

        cart.push({

            name:
                product.name,

            store:
                product.store || "",

            price:
                Number(
                    product.price || 0
                ),

            image:
                product.image || "",

            quantity:
                quantity

        });

    }


    saveCart(cart);



    const cartButton =
        document.querySelector(
            ".vx-cart"
        );


    if (cartButton) {

        cartButton.classList.remove(
            "bump"
        );


        void cartButton.offsetWidth;


        cartButton.classList.add(
            "bump"
        );

    }

}



// ==========================================================
// TOAST
// ==========================================================

function showToast(message) {

    let toast =
        document.querySelector(
            ".global-vendra-toast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );


        toast.className =
            "global-vendra-toast";


        Object.assign(
            toast.style,
            {
                position: "fixed",
                right: "24px",
                bottom: "24px",
                zIndex: "99999",
                padding: "14px 20px",
                borderRadius: "14px",
                background: "#1a1033",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "14px",
                boxShadow:
                    "0 15px 35px rgba(26,16,51,.25)",
                opacity: "0",
                transform:
                    "translateY(15px)",
                transition:
                    "all .3s ease"
            }
        );


        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.style.opacity =
        "1";


    toast.style.transform =
        "translateY(0)";


    clearTimeout(
        window.vendraToastTimer
    );


    window.vendraToastTimer =
        setTimeout(
            () => {

                toast.style.opacity =
                    "0";


                toast.style.transform =
                    "translateY(15px)";

            },
            2200
        );

}



// ==========================================================
// INITIAL CART COUNT
// ==========================================================

updateCartCount();