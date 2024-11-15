function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var successMessage = document.getElementById("successMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Simple email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    successMessage.textContent = "Thank you for contacting us, " + name + ". We will get back to you soon!";
    
    // Reset form after submission
    document.getElementById("contactForm").reset();
    return false;  // Prevent actual form submission for demo purposes
}
