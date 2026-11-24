// ==========================================================
// VENDRA — PRODUCT DETAILS PAGE
// Dynamic product details + gallery + wishlist + cart
// ==========================================================


// ==========================================================
// PRODUCTS DATA
// ==========================================================

const PRODUCTS = {

    "Wireless Headphones": {
        name: "Wireless Headphones",
        store: "SoundHub",

        image: "images/headPhone.png",

        price: 79,
        oldPrice: 99,

        discount: "-20%",

        rating: 4.8,
        reviews: 214,

        category: "Electronics",

        stock: "In stock",

        description:
            "Enjoy immersive sound, comfortable ear cushions and long-lasting battery life. Designed for music, work and everyday listening with a clean modern style.",

        features: [
            {
                icon: "bi-bluetooth",
                text: "Bluetooth"
            },
            {
                icon: "bi-battery-charging",
                text: "30h Battery"
            },
            {
                icon: "bi-soundwave",
                text: "HD Sound"
            }
        ],

        specifications: {
            Connection: "Bluetooth 5.3",
            "Battery life": "Up to 30 hours",
            Charging: "USB-C",
            Microphone: "Built-in"
        }
    },


    "Classic Women Watch": {
        name: "Classic Women Watch",
        store: "Timeless Co.",

        image: "images/whtcheswoman.png",

        price: 129,
        oldPrice: null,

        discount: null,

        rating: 4.9,
        reviews: 98,

        category: "Accessories",

        stock: "In stock",

        description:
            "An elegant women's watch designed for everyday wear and special occasions, combining a timeless look with a refined modern finish.",

        features: [
            {
                icon: "bi-watch",
                text: "Elegant Design"
            },
            {
                icon: "bi-droplet",
                text: "Water Resistant"
            },
            {
                icon: "bi-gem",
                text: "Premium Finish"
            }
        ],

        specifications: {
            Style: "Classic",
            Strap: "Metal",
            Display: "Analog",
            Warranty: "1 Year"
        }
    },


    "Running Sneakers": {
        name: "Running Sneakers",
        store: "Stride",

        image: "images/choo.png",

        price: 95,
        oldPrice: null,

        discount: "New",

        rating: 4.7,
        reviews: 321,

        category: "Fashion",

        stock: "In stock",

        description:
            "Lightweight and comfortable sneakers made for everyday movement, workouts and casual wear.",

        features: [
            {
                icon: "bi-lightning-charge",
                text: "Lightweight"
            },
            {
                icon: "bi-wind",
                text: "Breathable"
            },
            {
                icon: "bi-shield-check",
                text: "Comfort Fit"
            }
        ],

        specifications: {
            Material: "Breathable Mesh",
            Sole: "Rubber",
            Fit: "Regular",
            Usage: "Running & Casual"
        }
    },


    "Summer Sunglasses": {
        name: "Summer Sunglasses",
        store: "Optica",

        image:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=85",

        price: 45,
        oldPrice: null,

        discount: null,

        rating: 4.6,
        reviews: 76,

        category: "Accessories",

        stock: "In stock",

        description:
            "Stylish sunglasses with a lightweight frame and comfortable fit, perfect for sunny days and everyday looks.",

        features: [
            {
                icon: "bi-sun",
                text: "UV Protection"
            },
            {
                icon: "bi-stars",
                text: "Modern Style"
            },
            {
                icon: "bi-feather",
                text: "Lightweight"
            }
        ],

        specifications: {
            Protection: "UV Protection",
            Frame: "Lightweight",
            Style: "Modern",
            Fit: "Universal"
        }
    },


    "Instant Camera": {
        name: "Instant Camera",
        store: "SnapShop",

        image:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&q=85",

        price: 110,
        oldPrice: null,

        discount: null,

        rating: 4.5,
        reviews: 142,

        category: "Electronics",

        stock: "In stock",

        description:
            "Capture your favorite moments and print them instantly with a compact camera designed for simple and fun photography.",

        features: [
            {
                icon: "bi-camera",
                text: "Instant Print"
            },
            {
                icon: "bi-lightning",
                text: "Built-in Flash"
            },
            {
                icon: "bi-image",
                text: "Easy Photos"
            }
        ],

        specifications: {
            Type: "Instant Camera",
            Flash: "Built-in",
            Power: "Battery",
            Format: "Instant Film"
        }
    },


    "Urban Backpack": {
        name: "Urban Backpack",
        store: "Urban Wear",

        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=85",

        price: 65,
        oldPrice: null,

        discount: null,

        rating: 4.7,
        reviews: 188,

        category: "Fashion",

        stock: "In stock",

        description:
            "A practical everyday backpack with modern styling and enough space for work, study or travel essentials.",

        features: [
            {
                icon: "bi-backpack",
                text: "Spacious"
            },
            {
                icon: "bi-laptop",
                text: "Laptop Pocket"
            },
            {
                icon: "bi-shield-check",
                text: "Durable"
            }
        ],

        specifications: {
            Material: "Polyester",
            Capacity: "Medium",
            Pockets: "Multiple",
            Usage: "Daily"
        }
    },


    "Pro Laptop": {
        name: "Pro Laptop",
        store: "TechZone",

        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=85",

        price: 1199,
        oldPrice: null,

        discount: null,

        rating: 4.9,
        reviews: 64,

        category: "Electronics",

        stock: "In stock",

        description:
            "A powerful laptop designed for productivity, study and professional work with a premium modern build.",

        features: [
            {
                icon: "bi-cpu",
                text: "Fast Performance"
            },
            {
                icon: "bi-laptop",
                text: "Full HD Display"
            },
            {
                icon: "bi-battery-charging",
                text: "Long Battery"
            }
        ],

        specifications: {
            Display: "Full HD",
            Storage: "SSD",
            Memory: "16 GB",
            Type: "Professional Laptop"
        }
    },


    "Floral Perfume": {
        name: "Floral Perfume",
        store: "Glow Beauty",

        image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=85",

        price: 58,
        oldPrice: 68,

        discount: "-15%",

        rating: 4.8,
        reviews: 230,

        category: "Beauty",

        stock: "In stock",

        description:
            "A soft floral fragrance with an elegant character, designed for a fresh and feminine everyday scent.",

        features: [
            {
                icon: "bi-flower1",
                text: "Floral Scent"
            },
            {
                icon: "bi-stars",
                text: "Elegant"
            },
            {
                icon: "bi-clock",
                text: "Long Lasting"
            }
        ],

        specifications: {
            Type: "Eau de Parfum",
            Scent: "Floral",
            Style: "Feminine",
            Usage: "Daily"
        }
    },


    "Wooden Chair": {
        name: "Wooden Chair",
        store: "HomeNest",

        image:
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=85",

        price: 149,
        oldPrice: null,

        discount: null,

        rating: 4.4,
        reviews: 51,

        category: "Home",

        stock: "In stock",

        description:
            "A clean modern wooden chair designed to add warmth and simplicity to dining, office or living spaces.",

        features: [
            {
                icon: "bi-house",
                text: "Modern Home"
            },
            {
                icon: "bi-tree",
                text: "Wood Finish"
            },
            {
                icon: "bi-shield-check",
                text: "Durable"
            }
        ],

        specifications: {
            Material: "Wood",
            Style: "Modern",
            Usage: "Indoor",
            Assembly: "Required"
        }
    },


    "Mini Plant": {
        name: "Mini Plant",
        store: "Green Corner",

        image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&q=85",

        price: 22,
        oldPrice: null,

        discount: null,

        rating: 4.6,
        reviews: 119,

        category: "Home",

        stock: "In stock",

        description:
            "A beautiful small indoor plant that adds a fresh green touch to desks, bedrooms and living spaces.",

        features: [
            {
                icon: "bi-flower2",
                text: "Indoor Plant"
            },
            {
                icon: "bi-sun",
                text: "Easy Care"
            },
            {
                icon: "bi-house-heart",
                text: "Home Decor"
            }
        ],

        specifications: {
            Type: "Indoor Plant",
            Size: "Mini",
            Care: "Easy",
            Pot: "Included"
        }
    },


    "Basic White Tee": {
        name: "Basic White Tee",
        store: "Urban Wear",

        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85",

        price: 19,
        oldPrice: null,

        discount: null,

        rating: 4.3,
        reviews: 402,

        category: "Fashion",

        stock: "In stock",

        description:
            "A simple everyday white T-shirt with a comfortable fit and versatile style for casual outfits.",

        features: [
            {
                icon: "bi-stars",
                text: "Basic Style"
            },
            {
                icon: "bi-wind",
                text: "Comfortable"
            },
            {
                icon: "bi-check-circle",
                text: "Everyday Fit"
            }
        ],

        specifications: {
            Material: "Cotton",
            Fit: "Regular",
            Color: "White",
            Style: "Basic"
        }
    },


    "Makeup Set": {
        name: "Makeup Set",
        store: "Glow Beauty",

        image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85",

        price: 39,
        oldPrice: null,

        discount: "New",

        rating: 4.7,
        reviews: 87,

        category: "Beauty",

        stock: "In stock",

        description:
            "A versatile makeup collection with essential products for creating simple everyday or more polished looks.",

        features: [
            {
                icon: "bi-stars",
                text: "Beauty Set"
            },
            {
                icon: "bi-palette",
                text: "Multiple Shades"
            },
            {
                icon: "bi-bag-heart",
                text: "Complete Kit"
            }
        ],

        specifications: {
            Type: "Makeup Kit",
            Pieces: "Multiple",
            Use: "Face & Eyes",
            Category: "Beauty"
        }
    }

};


// ==========================================================
// READ PRODUCT FROM URL
// ==========================================================

const params =
    new URLSearchParams(
        window.location.search
    );


const requestedProduct =
    params.get("product");


const product =
    PRODUCTS[requestedProduct]
    ||
    PRODUCTS["Wireless Headphones"];


// ==========================================================
// PAGE ELEMENTS
// ==========================================================

const mainImage =
    document.getElementById(
        "detailMainImage"
    );


const title =
    document.querySelector(
        ".details-product-title"
    );


const storeName =
    document.querySelector(
        ".details-store strong"
    );


const breadcrumbProduct =
    document.querySelector(
        ".product-breadcrumb span"
    );


const rating =
    document.querySelector(
        ".details-rating > strong"
    );


const ratingReviews =
    document.querySelector(
        ".details-rating > span:not(.details-divider):not(.stock-status)"
    );


const stock =
    document.querySelector(
        ".stock-status"
    );


const price =
    document.querySelector(
        ".details-price strong"
    );


const oldPrice =
    document.querySelector(
        ".details-price del"
    );


const saving =
    document.querySelector(
        ".details-price span"
    );


const description =
    document.querySelector(
        ".details-description"
    );


const badge =
    document.querySelector(
        ".details-sale-badge"
    );


const featuresBox =
    document.querySelector(
        ".details-features"
    );


const specificationGrid =
    document.querySelector(
        ".specifications-grid"
    );


const reviewScore =
    document.querySelector(
        ".review-score > strong"
    );


const reviewText =
    document.querySelector(
        ".review-score span"
    );


// ==========================================================
// RENDER PRODUCT DATA
// ==========================================================

function renderProduct() {


    // ------------------------------------------------------
    // PAGE TITLE
    // ------------------------------------------------------

    document.title =
        product.name +
        " — Vendra";


    // ------------------------------------------------------
    // IMAGE
    // ------------------------------------------------------

    if (mainImage) {

        mainImage.src =
            product.image;


        mainImage.alt =
            product.name;

    }


    // ------------------------------------------------------
    // TITLE
    // ------------------------------------------------------

    if (title) {

        title.textContent =
            product.name;

    }


    // ------------------------------------------------------
    // STORE
    // ------------------------------------------------------

    if (storeName) {

        storeName.textContent =
            product.store;

    }


    // ------------------------------------------------------
    // BREADCRUMB
    // ------------------------------------------------------

    if (breadcrumbProduct) {

        breadcrumbProduct.textContent =
            product.name;

    }


    // ------------------------------------------------------
    // RATING
    // ------------------------------------------------------

    if (rating) {

        rating.textContent =
            product.rating;

    }


    if (ratingReviews) {

        ratingReviews.textContent =
            product.reviews +
            " reviews";

    }


    // ------------------------------------------------------
    // STOCK
    // ------------------------------------------------------

    if (stock) {

        stock.innerHTML = `

            <i class="bi bi-check-circle-fill"></i>

            ${product.stock}

        `;

    }


    // ------------------------------------------------------
    // PRICE
    // ------------------------------------------------------

    if (price) {

        price.textContent =
            "$" +
            product.price.toLocaleString();

    }


    if (oldPrice) {

        if (product.oldPrice) {

            oldPrice.textContent =
                "$" +
                product.oldPrice.toLocaleString();


            oldPrice.style.display =
                "inline";

        } else {

            oldPrice.style.display =
                "none";

        }

    }


    // ------------------------------------------------------
    // SAVING
    // ------------------------------------------------------

    if (saving) {

        if (product.oldPrice) {

            const saved =
                product.oldPrice -
                product.price;


            saving.textContent =
                "Save $" + saved;


            saving.style.display =
                "inline-flex";

        } else {

            saving.style.display =
                "none";

        }

    }


    // ------------------------------------------------------
    // DESCRIPTION
    // ------------------------------------------------------

    if (description) {

        description.textContent =
            product.description;

    }


    // ------------------------------------------------------
    // DISCOUNT / NEW BADGE
    // ------------------------------------------------------

    if (badge) {

        if (product.discount) {

            badge.textContent =
                product.discount;


            badge.style.display =
                "inline-flex";

        } else {

            badge.style.display =
                "none";

        }

    }


    // ------------------------------------------------------
    // FEATURES
    // ------------------------------------------------------

    if (featuresBox) {

        featuresBox.innerHTML =
            product.features

                .map(
                    (feature) => `

                        <span>

                            <i class="bi ${feature.icon}"></i>

                            ${feature.text}

                        </span>

                    `
                )

                .join("");

    }


    // ------------------------------------------------------
    // SPECIFICATIONS
    // ------------------------------------------------------

    if (specificationGrid) {

        specificationGrid.innerHTML =
            Object.entries(
                product.specifications
            )

                .map(
                    ([key, value]) => `

                        <div>

                            <span>
                                ${key}
                            </span>

                            <strong>
                                ${value}
                            </strong>

                        </div>

                    `
                )

                .join("");

    }


    // ------------------------------------------------------
    // REVIEWS
    // ------------------------------------------------------

    if (reviewScore) {

        reviewScore.textContent =
            product.rating;

    }


    if (reviewText) {

        reviewText.textContent =
            `Based on ${product.reviews} reviews`;

    }


    // ------------------------------------------------------
    // MAIN THUMBNAIL
    // ------------------------------------------------------

    const firstThumb =
        document.querySelector(
            ".product-thumb"
        );


    if (firstThumb) {

        firstThumb.dataset.image =
            product.image;


        const thumbImage =
            firstThumb.querySelector(
                "img"
            );


        if (thumbImage) {

            thumbImage.src =
                product.image;


            thumbImage.alt =
                product.name;

        }

    }

}


// ==========================================================
// RUN PRODUCT RENDER
// ==========================================================

renderProduct();


// ==========================================================
// IMAGE GALLERY
// ==========================================================

const thumbnails =
    document.querySelectorAll(
        ".product-thumb"
    );


thumbnails.forEach(
    (thumb) => {

        thumb.addEventListener(
            "click",
            () => {

                thumbnails.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                thumb.classList.add(
                    "active"
                );


                if (!mainImage) {

                    return;

                }


                mainImage.style.opacity =
                    "0";


                mainImage.style.transform =
                    "scale(0.92)";


                setTimeout(
                    () => {

                        mainImage.src =
                            thumb.dataset.image;


                        mainImage.style.opacity =
                            "1";


                        mainImage.style.transform =
                            "scale(1)";

                    },
                    160
                );

            }
        );

    }
);


// ==========================================================
// WISHLIST
// ==========================================================

const wishButton =
    document.getElementById(
        "detailsWishBtn"
    );


if (wishButton) {

    wishButton.addEventListener(
        "click",
        () => {

            wishButton.classList.toggle(
                "active"
            );


            const icon =
                wishButton.querySelector(
                    "i"
                );


            if (icon) {

                icon.classList.toggle(
                    "bi-heart"
                );


                icon.classList.toggle(
                    "bi-heart-fill"
                );

            }


            if (
                wishButton.classList.contains(
                    "active"
                )
            ) {

                showToast(
                    product.name +
                    " added to wishlist"
                );

            } else {

                showToast(
                    product.name +
                    " removed from wishlist"
                );

            }

        }
    );

}


// ==========================================================
// COLOR SELECTION
// ==========================================================

const colorButtons =
    document.querySelectorAll(
        ".color-option"
    );


const selectedColor =
    document.getElementById(
        "selectedColor"
    );


colorButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                colorButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                if (selectedColor) {

                    selectedColor.textContent =
                        button.dataset.color;

                }

            }
        );

    }
);


// ==========================================================
// QUANTITY
// ==========================================================

const quantityMinus =
    document.getElementById(
        "quantityMinus"
    );


const quantityPlus =
    document.getElementById(
        "quantityPlus"
    );


const quantityValue =
    document.getElementById(
        "quantityValue"
    );


let quantity = 1;


if (quantityMinus) {

    quantityMinus.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;


                quantityValue.textContent =
                    quantity;

            }

        }
    );

}


if (quantityPlus) {

    quantityPlus.addEventListener(
        "click",
        () => {

            if (quantity < 10) {

                quantity++;


                quantityValue.textContent =
                    quantity;

            }

        }
    );

}


const addCartButton =
    document.getElementById(
        "detailsAddCart"
    );


if (addCartButton) {

    addCartButton.addEventListener(
        "click",
        () => {


            addToCart({

                name:
                    product.name,

                store:
                    product.store,

                price:
                    product.price,

                image:
                    product.image,

                quantity:
                    quantity

            });


            addCartButton.classList.add(
                "added"
            );


            addCartButton.innerHTML = `
                <i class="bi bi-check2"></i>
                Added to cart
            `;


            showToast(
                quantity +
                " × " +
                product.name +
                " added to cart"
            );


            setTimeout(() => {

                addCartButton.classList.remove(
                    "added"
                );


                addCartButton.innerHTML = `
                    <i class="bi bi-bag-plus"></i>
                    Add to cart
                `;

            }, 1500);

        }
    );

}


// ==========================================================
// PRODUCT INFORMATION TABS
// ==========================================================

const tabButtons =
    document.querySelectorAll(
        ".details-tab"
    );


const tabContents =
    document.querySelectorAll(
        ".details-tab-content"
    );


tabButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    button.dataset.tab;


                tabButtons.forEach(
                    (item) => {

                        item.classList.toggle(

                            "active",

                            item === button

                        );

                    }
                );


                tabContents.forEach(
                    (content) => {

                        content.classList.toggle(

                            "active",

                            content.id === target

                        );

                    }
                );

            }
        );

    }
);


// ==========================================================
// RELATED PRODUCTS — WISHLIST
// ==========================================================

document
    .querySelectorAll(
        ".related-products .wish-btn"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle(
                        "active"
                    );


                    const icon =
                        button.querySelector(
                            "i"
                        );


                    if (icon) {

                        icon.classList.toggle(
                            "bi-heart"
                        );


                        icon.classList.toggle(
                            "bi-heart-fill"
                        );

                    }

                }
            );

        }
    );

// ==========================================================
// RELATED PRODUCTS — ADD TO CART
// ==========================================================

document
    .querySelectorAll(
        ".related-products .add-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {


                    const card =
                        button.closest(
                            ".product-card"
                        );


                    if (!card) {

                        return;

                    }


                    const name =
                        card
                            .querySelector(
                                ".product-name"
                            )
                            ?.textContent
                            .trim();


                    const store =
                        card
                            .querySelector(
                                ".product-store"
                            )
                            ?.textContent
                            .trim();


                    const image =
                        card
                            .querySelector(
                                ".product-img img"
                            )
                            ?.src;


                    const priceText =
                        card
                            .querySelector(
                                ".product-price"
                            )
                            ?.childNodes[0]
                            ?.textContent
                            .trim();


                    const price =
                        Number(
                            (
                                priceText || "0"
                            )
                                .replace(
                                    "$",
                                    ""
                                )
                                .replace(
                                    ",",
                                    ""
                                )
                        );


                    addToCart({

                        name:
                            name,

                        store:
                            store,

                        price:
                            price,

                        image:
                            image,

                        quantity:
                            1

                    });


                    button.classList.add(
                        "added"
                    );


                    button.innerHTML =
                        '<i class="bi bi-check-lg"></i>';


                    showToast(
                        name +
                        " added to cart"
                    );


                    setTimeout(
                        () => {

                            button.classList.remove(
                                "added"
                            );


                            button.innerHTML =
                                '<i class="bi bi-plus-lg"></i>';

                        },
                        1200
                    );

                }
            );

        }
    );