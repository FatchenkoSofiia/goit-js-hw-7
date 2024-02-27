const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", submitHundler);

function submitHundler(event) {
    event.preventDefault();

    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All form fields must be filled in");
    }

    const userLoginDetails = { email: email.value, Password: password.value };

    console.log(userLoginDetails);
    event.currentTarget.reset();
}
