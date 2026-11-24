// ==========================================================
// VENDRA — LOGIN PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const loginForm =
    document.getElementById(
        "loginForm"
    );


const loginEmail =
    document.getElementById(
        "loginEmail"
    );


const loginPassword =
    document.getElementById(
        "loginPassword"
    );


const rememberMe =
    document.getElementById(
        "rememberMe"
    );


const passwordToggle =
    document.getElementById(
        "passwordToggle"
    );


const demoLoginButton =
    document.getElementById(
        "demoLoginButton"
    );


const forgotPasswordButton =
    document.getElementById(
        "forgotPasswordButton"
    );


const emailError =
    document.getElementById(
        "emailError"
    );


const passwordError =
    document.getElementById(
        "passwordError"
    );



// ==========================================================
// LOAD REMEMBERED EMAIL
// ==========================================================

const rememberedEmail =
    localStorage.getItem(
        "vendraRememberedEmail"
    );


if (rememberedEmail) {

    loginEmail.value =
        rememberedEmail;


    rememberMe.checked =
        true;

}



// ==========================================================
// PASSWORD SHOW / HIDE
// ==========================================================

passwordToggle.addEventListener(
    "click",
    () => {


        const isPassword =
            loginPassword.type ===
            "password";


        loginPassword.type =
            isPassword
                ? "text"
                : "password";


        passwordToggle.innerHTML =
            isPassword

                ? '<i class="bi bi-eye-slash"></i>'

                : '<i class="bi bi-eye"></i>';


        passwordToggle.setAttribute(

            "aria-label",

            isPassword
                ? "Hide password"
                : "Show password"

        );

    }
);



// ==========================================================
// VALIDATION
// ==========================================================

function validateEmail() {

    const email =
        loginEmail.value.trim();


    if (!email) {

        emailError.textContent =
            "Please enter your email address.";


        loginEmail
            .closest(
                ".auth-input-wrap"
            )
            .classList.add(
                "invalid"
            );


        return false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(
            email
        )
    ) {

        emailError.textContent =
            "Please enter a valid email address.";


        loginEmail
            .closest(
                ".auth-input-wrap"
            )
            .classList.add(
                "invalid"
            );


        return false;

    }


    emailError.textContent =
        "";


    loginEmail
        .closest(
            ".auth-input-wrap"
        )
        .classList.remove(
            "invalid"
        );


    return true;

}



function validatePassword() {

    const password =
        loginPassword.value;


    if (!password) {

        passwordError.textContent =
            "Please enter your password.";


        loginPassword
            .closest(
                ".auth-input-wrap"
            )
            .classList.add(
                "invalid"
            );


        return false;

    }


    if (
        password.length < 6
    ) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";


        loginPassword
            .closest(
                ".auth-input-wrap"
            )
            .classList.add(
                "invalid"
            );


        return false;

    }


    passwordError.textContent =
        "";


    loginPassword
        .closest(
            ".auth-input-wrap"
        )
        .classList.remove(
            "invalid"
        );


    return true;

}



// ==========================================================
// LIVE VALIDATION
// ==========================================================

loginEmail.addEventListener(
    "input",
    () => {

        if (
            emailError.textContent
        ) {

            validateEmail();

        }

    }
);


loginPassword.addEventListener(
    "input",
    () => {

        if (
            passwordError.textContent
        ) {

            validatePassword();

        }

    }
);



// ==========================================================
// LOGIN
// ==========================================================

loginForm.addEventListener(
    "submit",
    event => {


        event.preventDefault();


        const emailValid =
            validateEmail();


        const passwordValid =
            validatePassword();


        if (
            !emailValid ||
            !passwordValid
        ) {

            return;

        }



        // --------------------------------------------------
        // Remember email
        // --------------------------------------------------

        if (
            rememberMe.checked
        ) {

            localStorage.setItem(
                "vendraRememberedEmail",
                loginEmail.value.trim()
            );

        } else {

            localStorage.removeItem(
                "vendraRememberedEmail"
            );

        }



        // --------------------------------------------------
        // Frontend demo login
        // --------------------------------------------------

        const user = {

            email:
                loginEmail.value.trim(),

            name:
                loginEmail.value
                    .split("@")[0],

            loggedIn:
                true

        };


        localStorage.setItem(
            "vendraUser",
            JSON.stringify(
                user
            )
        );


        showToast(
            "Signed in successfully"
        );


        setTimeout(
            () => {

                window.location.href =
                    "index.html";

            },
            700
        );

    }
);



// ==========================================================
// DEMO LOGIN
// ==========================================================

demoLoginButton.addEventListener(
    "click",
    () => {


        loginEmail.value =
            "demo@vendra.com";


        loginPassword.value =
            "123456";


        rememberMe.checked =
            true;


        showToast(
            "Demo account filled in"
        );

    }
);



// ==========================================================
// FORGOT PASSWORD
// ==========================================================

forgotPasswordButton.addEventListener(
    "click",
    () => {

        showToast(
            "Password recovery will be connected later"
        );

    }
);