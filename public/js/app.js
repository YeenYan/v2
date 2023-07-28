const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let subject = "Sample";
  let myEmail = "markiantalan@gmail.com";

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject,
    message: message.value,
    myEmail: myEmail
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(`responseText: ${xhr.responseText}`);

    if (xhr.responseText === 'success') {
      alert('email sent');
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("something went wrong");
    }
  };

  xhr.send(JSON.stringify(formData));

});