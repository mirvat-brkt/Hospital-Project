let signup_btn = document.getElementById('register');
signup_btn.addEventListener('click', signup);

function signup() {

    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;

    let data = new FormData();
    data.append('name', username);
    data.append('email', email);
    data.append('password', password);
    data.append('dob', dob);
    data.append('gender', gender);

    axios({
        "method": "post",
        "url": "http://localhost/hospital-backend/register.php",
        "data": data
    }).then((result) => {
        if (result.data.status == "success") {
            alert("signed up");
        }
    }).catch((err) => {
        console.error(err);
    });
}