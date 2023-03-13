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

let signin_btn = document.getElementById('login')
    signin_btn.addEventListener('click', signin);

    function signin() {
    let email = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    axios.post('http://localhost/Hospital-backend/login.php', data).then(function (res) {
        console.log(res.data);
        let obj =res.data;
        sessionStorage.setItem('user_id', obj.user_id);
        console.log(window.sessionStorage.getItem('user_id'));

    }).catch(function (err) {
        console.log(err);
    })
}