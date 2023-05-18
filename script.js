document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === '' || company === '' || email === '' || message === '') {
      alert("Name field cannot be blank.");
      return;
    }
  
    const subject = encodeURIComponent("Contact Me - " + name);
    const body = encodeURIComponent("Name: " + name + "\n\nCompany: " + company + "\n\nEmail: " + email + "\n\nMessage: " + message);
    const mailtoLink = "mailto:lennixstevens47mchs@gmail.com?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
  
    alert("Email sent!");
  });
  