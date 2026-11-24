// ==========================================================
// VENDRA — REGISTER PAGE
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const registerForm =
    document.getElementById(
        "registerForm"
    );


const firstName =
    document.getElementById(
        "firstName"
    );


const lastName =
    document.getElementById(
        "lastName"
    );


const registerEmail =
    document.getElementById(
        "registerEmail"
    );


const registerPhone =
    document.getElementById(
        "registerPhone"
    );


const registerPassword =
    document.getElementById(
        "registerPassword"
    );


const confirmPassword =
    document.getElementById(
        "confirmPassword"
    );


const acceptTerms =
    document.getElementById(
        "acceptTerms"
    );


const firstNameError =
    document.getElementById(
        "firstNameError"
    );


const lastNameError =
    document.getElementById(
        "lastNameError"
    );


const registerEmailError =
    document.getElementById(
        "registerEmailError"
    );


const registerPhoneError =
    document.getElementById(
        "registerPhoneError"
    );


const registerPasswordError =
    document.getElementById(
        "registerPasswordError"
    );


const confirmPasswordError =
    document.getElementById(
        "confirmPasswordError"
    );


const termsError =
    document.getElementById(
        "termsError"
    );


const strengthBar =
    document.getElementById(
        "strengthBar"
    );


const passwordStrengthText =
    document.getElementById(
        "passwordStrengthText"
    );



// ==========================================================
// HELPERS
// ==========================================================

function setInvalid(
    input,
    errorElement,
    message
) {

    errorElement.textContent =
        message;


    input
        .closest(
            ".auth-input-wrap"
        )
        ?.classList.add(
            "invalid"
        );


    return false;

}



function setValid(
    input,
    errorElement
) {

    errorElement.textContent =
        "";


    input
        .closest(
            ".auth-input-wrap"
        )
        ?.classList.remove(
            "invalid"
        );


    return true;

}



// ==========================================================
// NAME VALIDATION
// ==========================================================

function validateFirstName() {

    const value =
        firstName.value.trim();


    if (!value) {

        return setInvalid(
            firstName,
            firstNameError,
            "Please enter your first name."
        );

    }


    if (
        value.length < 2
    ) {

        return setInvalid(
            firstName,
            firstNameError,
            "First name is too short."
        );

    }


    return setValid(
        firstName,
        firstNameError
    );

}



function validateLastName() {

    const value =
        lastName.value.trim();


    if (!value) {

        return setInvalid(
            lastName,
            lastNameError,
            "Please enter your last name."
        );

    }


    if (
        value.length < 2
    ) {

        return setInvalid(
            lastName,
            lastNameError,
            "Last name is too short."
        );

    }


    return setValid(
        lastName,
        lastNameError
    );

}



// ==========================================================
// EMAIL VALIDATION
// ==========================================================

function validateRegisterEmail() {

    const value =
        registerEmail.value.trim();


    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!value) {

        return setInvalid(
            registerEmail,
            registerEmailError,
            "Please enter your email address."
        );

    }


    if (
        !pattern.test(
            value
        )
    ) {

        return setInvalid(
            registerEmail,
            registerEmailError,
            "Please enter a valid email address."
        );

    }


    return setValid(
        registerEmail,
        registerEmailError
    );

}



// ==========================================================
// PHONE VALIDATION
// ==========================================================

function validatePhone() {

    const value =
        registerPhone.value
            .trim();


    if (!value) {

        return setInvalid(
            registerPhone,
            registerPhoneError,
            "Please enter your phone number."
        );

    }


    if (
        value.replace(
            /\D/g,
            ""
        ).length < 7
    ) {

        return setInvalid(
            registerPhone,
            registerPhoneError,
            "Please enter a valid phone number."
        );

    }


    return setValid(
        registerPhone,
        registerPhoneError
    );

}



// ==========================================================
// PASSWORD
// ==========================================================

function getPasswordStrength(
    password
) {

    let score = 0;


    if (
        password.length >= 6
    ) {

        score++;

    }


    if (
        password.length >= 8
    ) {

        score++;

    }


    if (
        /[A-Z]/.test(
            password
        )
    ) {

        score++;

    }


    if (
        /[0-9]/.test(
            password
        )
    ) {

        score++;

    }


    if (
        /[^A-Za-z0-9]/.test(
            password
        )
    ) {

        score++;

    }


    return score;

}



function updatePasswordStrength() {

    const password =
        registerPassword.value;


    const score =
        getPasswordStrength(
            password
        );


    const percentages =
        [
            0,
            20,
            40,
            60,
            80,
            100
        ];


    strengthBar.style.width =
        percentages[
            score
        ] + "%";


    strengthBar.className =
        "";


    if (!password) {

        passwordStrengthText.textContent =
            "Use at least 6 characters.";

        return;

    }


    if (
        score <= 1
    ) {

        strengthBar.classList.add(
            "weak"
        );


        passwordStrengthText.textContent =
            "Weak password";

    } else if (
        score <= 3
    ) {

        strengthBar.classList.add(
            "medium"
        );


        passwordStrengthText.textContent =
            "Good password";

    } else {

        strengthBar.classList.add(
            "strong"
        );


        passwordStrengthText.textContent =
            "Strong password";

    }

}



function validateRegisterPassword() {

    const value =
        registerPassword.value;


    if (!value) {

        return setInvalid(
            registerPassword,
            registerPasswordError,
            "Please create a password."
        );

    }


    if (
        value.length < 6
    ) {

        return setInvalid(
            registerPassword,
            registerPasswordError,
            "Password must contain at least 6 characters."
        );

    }


    return setValid(
        registerPassword,
        registerPasswordError
    );

}



function validateConfirmPassword() {

    if (
        !confirmPassword.value
    ) {

        return setInvalid(
            confirmPassword,
            confirmPasswordError,
            "Please confirm your password."
        );

    }


    if (
        confirmPassword.value !==
        registerPassword.value
    ) {

        return setInvalid(
            confirmPassword,
            confirmPasswordError,
            "Passwords do not match."
        );

    }


    return setValid(
        confirmPassword,
        confirmPasswordError
    );

}



// ==========================================================
// PASSWORD VISIBILITY
// ==========================================================

function setupPasswordToggle(
    buttonId,
    input
) {

    const button =
        document.getElementById(
            buttonId
        );


    button.addEventListener(
        "click",
        () => {


            const hidden =
                input.type ===
                "password";


            input.type =
                hidden
                    ? "text"
                    : "password";


            button.innerHTML =
                hidden

                    ? '<i class="bi bi-eye-slash"></i>'

                    : '<i class="bi bi-eye"></i>';

        }
    );

}


setupPasswordToggle(
    "registerPasswordToggle",
    registerPassword
);


setupPasswordToggle(
    "confirmPasswordToggle",
    confirmPassword
);



// ==========================================================
// ACCOUNT TYPE
// ==========================================================

const accountTypeOptions =
    document.querySelectorAll(
        ".account-type-option"
    );


accountTypeOptions.forEach(
    option => {

        const input =
            option.querySelector(
                'input[name="accountType"]'
            );


        input.addEventListener(
            "change",
            () => {

                accountTypeOptions
                    .forEach(
                        item => {

                            const radio =
                                item.querySelector(
                                    'input[name="accountType"]'
                                );


                            item.classList.toggle(

                                "active",

                                radio.checked

                            );

                        }
                    );

            }
        );

    }
);



// ==========================================================
// LIVE VALIDATION
// ==========================================================

firstName.addEventListener(
    "input",
    () => {

        if (
            firstNameError.textContent
        ) {

            validateFirstName();

        }

    }
);


lastName.addEventListener(
    "input",
    () => {

        if (
            lastNameError.textContent
        ) {

            validateLastName();

        }

    }
);


registerEmail.addEventListener(
    "input",
    () => {

        if (
            registerEmailError.textContent
        ) {

            validateRegisterEmail();

        }

    }
);


registerPhone.addEventListener(
    "input",
    () => {

        if (
            registerPhoneError.textContent
        ) {

            validatePhone();

        }

    }
);


registerPassword.addEventListener(
    "input",
    () => {

        updatePasswordStrength();


        if (
            registerPasswordError.textContent
        ) {

            validateRegisterPassword();

        }


        if (
            confirmPassword.value
        ) {

            validateConfirmPassword();

        }

    }
);


confirmPassword.addEventListener(
    "input",
    () => {

        if (
            confirmPasswordError.textContent
            ||
            confirmPassword.value
        ) {

            validateConfirmPassword();

        }

    }
);



// ==========================================================
// REGISTER
// ==========================================================

registerForm.addEventListener(
    "submit",
    event => {


        event.preventDefault();



        const validFirstName =
            validateFirstName();


        const validLastName =
            validateLastName();


        const validEmail =
            validateRegisterEmail();


        const validPhone =
            validatePhone();


        const validPassword =
            validateRegisterPassword();


        const validConfirm =
            validateConfirmPassword();



        if (
            !acceptTerms.checked
        ) {

            termsError.textContent =
                "Please accept the terms and privacy policy.";

        } else {

            termsError.textContent =
                "";

        }



        if (
            !validFirstName
            ||
            !validLastName
            ||
            !validEmail
            ||
            !validPhone
            ||
            !validPassword
            ||
            !validConfirm
            ||
            !acceptTerms.checked
        ) {

            return;

        }



        const accountType =
            document.querySelector(
                'input[name="accountType"]:checked'
            ).value;



        const newUser = {

            firstName:
                firstName.value.trim(),

            lastName:
                lastName.value.trim(),

            name:
                firstName.value.trim()
                +
                " "
                +
                lastName.value.trim(),

            email:
                registerEmail.value.trim(),

            phone:
                registerPhone.value.trim(),

            accountType:
                accountType,

            loggedIn:
                true

        };



        /*
         Frontend demo only.
         Password should NEVER be saved
         in localStorage in a real system.
        */


        localStorage.setItem(
            "vendraUser",
            JSON.stringify(
                newUser
            )
        );


        showToast(
            "Account created successfully"
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