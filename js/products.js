// ==========================================================
// VENDRA — PRODUCTS PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const grid =
    document.getElementById(
        "productsGrid"
    );


const items =
    Array.from(
        document.querySelectorAll(
            ".product-item"
        )
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const searchClear =
    document.getElementById(
        "searchClear"
    );


const chips =
    document.querySelectorAll(
        ".cat-chip"
    );


const minPrice =
    document.getElementById(
        "minPrice"
    );


const maxPrice =
    document.getElementById(
        "maxPrice"
    );


const pricePills =
    document.querySelectorAll(
        ".price-pill"
    );


const ratingInputs =
    document.querySelectorAll(
        'input[name="rating"]'
    );


const storeChecks =
    document.getElementById(
        "storeChecks"
    );


const saleOnly =
    document.getElementById(
        "saleOnly"
    );


const sortSelect =
    document.getElementById(
        "sortSelect"
    );


const viewBtns =
    document.querySelectorAll(
        ".view-btn"
    );


const activeBox =
    document.getElementById(
        "activeFilters"
    );


const filterBadge =
    document.getElementById(
        "filterBadge"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


const loadMoreWrap =
    document.getElementById(
        "loadMoreWrap"
    );


const loadMoreBtn =
    document.getElementById(
        "loadMore"
    );



// ==========================================================
// STATE
// ==========================================================

const PAGE_SIZE = 9;


const state = {

    search: "",

    category: "all",

    min: null,

    max: null,

    rating: 0,

    stores: new Set(),

    sale: false,

    limit: PAGE_SIZE

};


const categoryNames = {

    electronics:
        "Electronics",

    fashion:
        "Fashion",

    beauty:
        "Beauty",

    home:
        "Home",

    accessories:
        "Accessories"

};



// ==========================================================
// STORE FILTERS
// ==========================================================

const storeNames =
    [
        ...new Set(
            items.map(
                item =>
                    item.dataset.store
            )
        )
    ].sort();


if (storeChecks) {

    storeChecks.innerHTML =
        storeNames

            .map(
                store => {

                    const count =
                        items.filter(
                            item =>
                                item.dataset.store ===
                                store
                        ).length;


                    return `

                        <label class="store-check">

                            <input
                                type="checkbox"
                                value="${store}"
                            >

                            <span class="check-box">
                                <i class="bi bi-check"></i>
                            </span>

                            <span class="store-check-name">
                                ${store}
                            </span>

                            <span class="store-check-count">
                                ${count}
                            </span>

                        </label>

                    `;

                }
            )

            .join("");

}



// ==========================================================
// CATEGORY COUNTS
// ==========================================================

chips.forEach(
    chip => {

        const category =
            chip.dataset.category;


        const count =
            category === "all"

                ? items.length

                : items.filter(
                    item =>
                        item.dataset.category ===
                        category
                ).length;


        const countElement =
            chip.querySelector(
                ".chip-count"
            );


        if (countElement) {

            countElement.textContent =
                count;

        }

    }
);



// ==========================================================
// MATCH FILTERS
// ==========================================================

function matches(item) {

    const data =
        item.dataset;


    const price =
        Number(
            data.price
        );


    const text =
        (
            data.name +
            " " +
            data.store
        ).toLowerCase();


    return (

        text.includes(
            state.search
        )

        &&

        (
            state.category === "all"
            ||
            data.category ===
            state.category
        )

        &&

        (
            state.min === null
            ||
            price >= state.min
        )

        &&

        (
            state.max === null
            ||
            price <= state.max
        )

        &&

        Number(
            data.rating
        ) >=
        state.rating

        &&

        (
            state.stores.size === 0
            ||
            state.stores.has(
                data.store
            )
        )

        &&

        (
            !state.sale
            ||
            data.sale === "true"
        )

    );

}



// ==========================================================
// SORT
// ==========================================================

function sortItems() {

    const sorted =
        [...items].sort(
            (a, b) => {

                switch (
                    sortSelect.value
                ) {

                    case "price-asc":

                        return (
                            Number(
                                a.dataset.price
                            )
                            -
                            Number(
                                b.dataset.price
                            )
                        );


                    case "price-desc":

                        return (
                            Number(
                                b.dataset.price
                            )
                            -
                            Number(
                                a.dataset.price
                            )
                        );


                    case "rating":

                        return (
                            Number(
                                b.dataset.rating
                            )
                            -
                            Number(
                                a.dataset.rating
                            )
                        );


                    default:

                        return (
                            Number(
                                a.dataset.order
                            )
                            -
                            Number(
                                b.dataset.order
                            )
                        );

                }

            }
        );


    sorted.forEach(
        item => {

            grid.appendChild(
                item
            );

        }
    );


    return sorted;

}



// ==========================================================
// RENDER
// ==========================================================

function render() {

    const sorted =
        sortItems();


    const matched =
        sorted.filter(
            matches
        );


    sorted.forEach(
        item => {

            item.classList.add(
                "d-none"
            );

        }
    );


    matched
        .slice(
            0,
            state.limit
        )
        .forEach(
            (item, index) => {

                item.classList.remove(
                    "d-none"
                );


                item.style.animationDelay =
                    (
                        index %
                        PAGE_SIZE
                    ) * 40 +
                    "ms";

            }
        );


    const shown =
        Math.min(
            state.limit,
            matched.length
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    const mobileCount =
        document.getElementById(
            "mobileCount"
        );


    const shownCount =
        document.getElementById(
            "shownCount"
        );


    const totalCount =
        document.getElementById(
            "totalCount"
        );


    const loadMoreBar =
        document.getElementById(
            "loadMoreBar"
        );


    if (resultCount) {

        resultCount.textContent =
            matched.length;

    }


    if (mobileCount) {

        mobileCount.textContent =
            matched.length;

    }


    if (shownCount) {

        shownCount.textContent =
            shown;

    }


    if (totalCount) {

        totalCount.textContent =
            matched.length;

    }


    if (loadMoreBar) {

        loadMoreBar.style.width =
            matched.length

                ? (
                    shown /
                    matched.length
                ) * 100 + "%"

                : "0%";

    }


    if (noResults) {

        noResults.classList.toggle(

            "d-none",

            matched.length > 0

        );

    }


    if (loadMoreWrap) {

        loadMoreWrap.classList.toggle(

            "d-none",

            matched.length === 0

        );

    }


    if (loadMoreBtn) {

        loadMoreBtn.classList.toggle(

            "d-none",

            shown >= matched.length

        );

    }


    renderActiveFilters();

}



// ==========================================================
// REFRESH
// ==========================================================

function refresh() {

    state.limit =
        PAGE_SIZE;


    render();

}



// ==========================================================
// ACTIVE FILTERS
// ==========================================================

function renderActiveFilters() {

    if (
        !activeBox ||
        !filterBadge
    ) {

        return;

    }


    const tags = [];


    if (state.search) {

        tags.push({

            key: "search",

            label:
                `"${state.search}"`

        });

    }


    if (
        state.category !==
        "all"
    ) {

        tags.push({

            key:
                "category",

            label:
                categoryNames[
                    state.category
                ]

        });

    }


    if (
        state.min !== null
        ||
        state.max !== null
    ) {

        tags.push({

            key:
                "price",

            label:
                `$${state.min ?? 0} – ${
                    state.max !== null
                        ? "$" + state.max
                        : "any"
                }`

        });

    }


    if (state.rating) {

        tags.push({

            key:
                "rating",

            label:
                `${state.rating}+ stars`

        });

    }


    state.stores.forEach(
        store => {

            tags.push({

                key:
                    "store",

                label:
                    store,

                value:
                    store

            });

        }
    );


    if (state.sale) {

        tags.push({

            key:
                "sale",

            label:
                "On sale"

        });

    }


    filterBadge.textContent =
        tags.length;


    filterBadge.classList.toggle(

        "d-none",

        tags.length === 0

    );


    activeBox.classList.toggle(

        "d-none",

        tags.length === 0

    );


    activeBox.innerHTML =
        tags

            .map(
                tag => `

                    <button
                        class="active-tag"
                        data-key="${tag.key}"
                        data-value="${tag.value || ""}"
                    >

                        ${tag.label}

                        <i class="bi bi-x"></i>

                    </button>

                `
            )

            .join("")

        +

        `

            <button
                class="link-btn"
                data-key="all"
            >
                Clear all
            </button>

        `;

}



// ==========================================================
// SETTERS
// ==========================================================

function setSearch(value) {

    state.search =
        value
            .trim()
            .toLowerCase();


    searchInput.value =
        value;


    searchClear.classList.toggle(

        "d-none",

        !value

    );

}



function setCategory(category) {

    state.category =
        category;


    chips.forEach(
        chip => {

            chip.classList.toggle(

                "active",

                chip.dataset.category ===
                category

            );

        }
    );

}



function setPrice(
    min,
    max
) {

    state.min =
        min;


    state.max =
        max;


    minPrice.value =
        min ?? "";


    maxPrice.value =
        max ?? "";


    pricePills.forEach(
        pill => {

            const pillMin =
                pill.dataset.min === ""

                    ? null

                    : Number(
                        pill.dataset.min
                    );


            const pillMax =
                pill.dataset.max === ""

                    ? null

                    : Number(
                        pill.dataset.max
                    );


            pill.classList.toggle(

                "active",

                pillMin === min
                &&
                pillMax === max

            );

        }
    );

}



function setRating(value) {

    state.rating =
        value;


    const input =
        document.querySelector(
            `input[name="rating"][value="${value}"]`
        );


    if (input) {

        input.checked =
            true;

    }

}



// ==========================================================
// RESET
// ==========================================================

function resetAll() {

    setSearch("");

    setCategory(
        "all"
    );

    setPrice(
        null,
        null
    );

    setRating(0);


    state.stores.clear();


    if (storeChecks) {

        storeChecks
            .querySelectorAll(
                "input"
            )
            .forEach(
                input => {

                    input.checked =
                        false;

                }
            );

    }


    saleOnly.checked =
        false;


    state.sale =
        false;


    sortSelect.value =
        "featured";


    refresh();

}



// ==========================================================
// ACTIVE FILTER CLICK
// ==========================================================

if (activeBox) {

    activeBox.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-key]"
                );


            if (!button) {

                return;

            }


            switch (
                button.dataset.key
            ) {

                case "search":

                    setSearch("");

                    break;


                case "category":

                    setCategory(
                        "all"
                    );

                    break;


                case "price":

                    setPrice(
                        null,
                        null
                    );

                    break;


                case "rating":

                    setRating(0);

                    break;


                case "store":

                    state.stores.delete(
                        button.dataset.value
                    );


                    const input =
                        storeChecks.querySelector(
                            `input[value="${button.dataset.value}"]`
                        );


                    if (input) {

                        input.checked =
                            false;

                    }


                    break;


                case "sale":

                    saleOnly.checked =
                        false;

                    state.sale =
                        false;

                    break;


                case "all":

                    resetAll();

                    return;

            }


            refresh();

        }
    );

}



// ==========================================================
// SEARCH
// ==========================================================

let searchTimer;


searchInput.addEventListener(
    "input",
    () => {

        clearTimeout(
            searchTimer
        );


        searchTimer =
            setTimeout(
                () => {

                    setSearch(
                        searchInput.value
                    );


                    refresh();

                },
                150
            );

    }
);



searchClear.addEventListener(
    "click",
    () => {

        setSearch("");

        refresh();

        searchInput.focus();

    }
);



// ==========================================================
// CATEGORY
// ==========================================================

chips.forEach(
    chip => {

        chip.addEventListener(
            "click",
            () => {

                setCategory(
                    chip.dataset.category
                );


                refresh();

            }
        );

    }
);



// ==========================================================
// PRICE INPUTS
// ==========================================================

[
    minPrice,
    maxPrice

].forEach(
    input => {

        input.addEventListener(
            "input",
            () => {

                const min =
                    minPrice.value === ""

                        ? null

                        : Number(
                            minPrice.value
                        );


                const max =
                    maxPrice.value === ""

                        ? null

                        : Number(
                            maxPrice.value
                        );


                setPrice(
                    min,
                    max
                );


                refresh();

            }
        );

    }
);



// ==========================================================
// PRICE PILLS
// ==========================================================

pricePills.forEach(
    pill => {

        pill.addEventListener(
            "click",
            () => {

                const min =
                    pill.dataset.min === ""

                        ? null

                        : Number(
                            pill.dataset.min
                        );


                const max =
                    pill.dataset.max === ""

                        ? null

                        : Number(
                            pill.dataset.max
                        );


                if (
                    pill.classList.contains(
                        "active"
                    )
                ) {

                    setPrice(
                        null,
                        null
                    );

                } else {

                    setPrice(
                        min,
                        max
                    );

                }


                refresh();

            }
        );

    }
);



// ==========================================================
// RATING
// ==========================================================

ratingInputs.forEach(
    input => {

        input.addEventListener(
            "change",
            () => {

                setRating(
                    Number(
                        input.value
                    )
                );


                refresh();

            }
        );

    }
);



// ==========================================================
// STORE
// ==========================================================

if (storeChecks) {

    storeChecks.addEventListener(
        "change",
        event => {

            if (
                event.target.checked
            ) {

                state.stores.add(
                    event.target.value
                );

            } else {

                state.stores.delete(
                    event.target.value
                );

            }


            refresh();

        }
    );

}



// ==========================================================
// SALE
// ==========================================================

saleOnly.addEventListener(
    "change",
    () => {

        state.sale =
            saleOnly.checked;


        refresh();

    }
);



// ==========================================================
// SORT
// ==========================================================

sortSelect.addEventListener(
    "change",
    refresh
);



// ==========================================================
// RESET BUTTONS
// ==========================================================

const clearFilters =
    document.getElementById(
        "clearFilters"
    );


if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        resetAll
    );

}


const emptyReset =
    document.getElementById(
        "emptyReset"
    );


if (emptyReset) {

    emptyReset.addEventListener(
        "click",
        resetAll
    );

}



// ==========================================================
// LOAD MORE
// ==========================================================

if (loadMoreBtn) {

    loadMoreBtn.addEventListener(
        "click",
        () => {

            state.limit +=
                PAGE_SIZE;


            render();

        }
    );

}



// ==========================================================
// GRID / LIST VIEW
// ==========================================================

viewBtns.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                viewBtns.forEach(
                    item => {

                        item.classList.toggle(

                            "active",

                            item === button

                        );

                    }
                );


                grid.classList.toggle(

                    "list-view",

                    button.dataset.view ===
                    "list"

                );

            }
        );

    }
);



// ==========================================================
// PRODUCT GRID CLICKS
// ==========================================================

grid.addEventListener(
    "click",
    event => {


        // --------------------------------------------------
        // Wishlist
        // --------------------------------------------------

        const wishButton =
            event.target.closest(
                ".wish-btn"
            );


        if (wishButton) {

            event.stopPropagation();


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


            return;

        }



        // --------------------------------------------------
        // Add to cart
        // --------------------------------------------------

        const cartButton =
            event.target.closest(
                ".cart-btn"
            );


        if (cartButton) {

            event.stopPropagation();


            if (
                cartButton.classList.contains(
                    "added"
                )
            ) {

                return;

            }


            const productItem =
                cartButton.closest(
                    ".product-item"
                );


            if (!productItem) {

                return;

            }


            const imageElement =
                productItem.querySelector(
                    ".shop-card-img img"
                );


            const product = {

                name:
                    productItem.dataset.name,

                store:
                    productItem.dataset.store,

                price:
                    Number(
                        productItem.dataset.price
                    ),

                image:
                    imageElement
                        ? imageElement.src
                        : "",

                quantity:
                    1

            };


            addToCart(
                product
            );


            cartButton.classList.add(
                "added"
            );


            cartButton.innerHTML = `

                <i class="bi bi-check2"></i>

                <span>
                    Added
                </span>

            `;


            showToast(
                product.name +
                " added to cart"
            );


            setTimeout(
                () => {

                    cartButton.classList.remove(
                        "added"
                    );


                    cartButton.innerHTML = `

                        <i class="bi bi-bag-plus"></i>

                        <span>
                            Add to cart
                        </span>

                    `;

                },
                1500
            );


            return;

        }



        // --------------------------------------------------
        // Product details
        // --------------------------------------------------

        const card =
            event.target.closest(
                ".shop-card"
            );


        if (!card) {

            return;

        }


        const productItem =
            card.closest(
                ".product-item"
            );


        if (!productItem) {

            return;

        }


        const productName =
            productItem.dataset.name;


        window.location.href =
            "product-details.html?product=" +
            encodeURIComponent(
                productName
            );

    }
);



// ==========================================================
// KEYBOARD OPEN PRODUCT
// ==========================================================

items.forEach(
    item => {

        const card =
            item.querySelector(
                ".shop-card"
            );


        if (!card) {

            return;

        }


        card.setAttribute(
            "tabindex",
            "0"
        );


        card.setAttribute(
            "role",
            "link"
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key !== "Enter"
                    &&
                    event.key !== " "
                ) {

                    return;

                }


                if (
                    event.target.closest(
                        "button"
                    )
                ) {

                    return;

                }


                event.preventDefault();


                window.location.href =
                    "product-details.html?product=" +
                    encodeURIComponent(
                        item.dataset.name
                    );

            }
        );

    }
);



// ==========================================================
// START
// ==========================================================

render();