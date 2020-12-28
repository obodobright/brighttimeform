function emailValidation() {
    const x = document.forms["forms"]["userName"].value;
    if (x === "") {
        alert("Email must be filled");
        return false
    }
}