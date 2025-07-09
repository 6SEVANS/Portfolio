//Controls the javascript for sending an email through the contact form.
const emailForm = document.getElementById('email-form');
const result = document.getElementById('result');

emailForm.addEventListener('submit', function(e){
    const formData = new FormData(emailForm);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json

    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200){
            result.innerHTML = json.message;
        } else{
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        emailForm.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});