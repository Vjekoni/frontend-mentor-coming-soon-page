
const form = document.getElementById('form');
const emailInput = document.getElementById('email');


form.addEventListener('submit', (e) => {

      e.preventDefault();

      email();
});

// test if email is correct
function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
}

// check if the input value is not empty and valid
function email() {
    var mail = emailInput.value;
    if(!mail) {
        Error(emailInput, 'Email Address cannot be empty');
    }
    else {
        if(!validateEmail(mail)){
            Error(emailInput, 'Please provide a valid email');
        }
        else {
            Successful(mail);
        }
    }
}

// adding error 
function Error(inputs, message) {
    const form = inputs.parentElement;
    const label = form.querySelector('label');
    label.innerText = message;
    inputs.className = 'error';
    label.className = 'validation';
}

// adding thank you text if the email submit is successful
function Successful(mail) {
      const data = document.getElementById("section");
      data.getElementsByTagName("h1")[0].innerHTML = 'Thank you!';
      data.getElementsByTagName("p")[0].innerHTML = mail + ' has been registered! <br> We will keep You updated.';
      form.style.display = 'none';
}