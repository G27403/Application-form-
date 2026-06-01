const form = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // SECURITY VALIDATION

    const firstname = document.getElementById("firstname").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // BLOCK EMPTY INPUTS
    if(
        firstname === "" ||
        surname === "" ||
        email === "" ||
        phone === ""
    ){
        alert("Please fill all required fields.");
        return;
    }

    // NAME VALIDATION
    const namePattern = /^[A-Za-z\s]+$/;

    if(!namePattern.test(firstname)){
        alert("First name must contain letters only.");
        return;
    }

    if(!namePattern.test(surname)){
        alert("Surname must contain letters only.");
        return;
    }

    // EMAIL VALIDATION
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Invalid email address.");
        return;
    }

    // PHONE SECURITY
    const phonePattern =
    /^[0-9+\-\s()]+$/;

    if(!phonePattern.test(phone)){
        alert("Invalid phone number.");
        return;
    }

    // SIMPLE XSS PROTECTION
    const inputs = document.querySelectorAll("input, textarea");

    for(let input of inputs){

        if(
          input.value.includes("<script>") ||
          input.value.includes("</script>")
        ){
            alert("Security warning detected.");
            return;
        }
    }

    // BUTTON LOADING EFFECT
    const button =
    document.querySelector(".btn");

    button.innerHTML = "Submitting...";
    button.disabled = true;

    setTimeout(() => {

        successMessage.innerHTML =
        "Application submitted successfully!";

        form.reset();

        button.innerHTML =
        "Submit Application";

        button.disabled = false;

    }, 2000);

});