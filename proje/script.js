
function signup(event) {
    event.preventDefault();
    let kural = document.getElementById('kural').value
    

    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let email = document.getElementById('email').value;
    let kullaniciadi = document.getElementById('kullaniciadi').value;
    let sifre = document.getElementById('sifre').value;
    let phone = document.getElementById('phone').value;
    let city = document.getElementById('city').value;
    let bio = document.getElementById('bio').value;
    let gender = document.getElementById('gender').value;
    let cinsiyet;
    if (gender == "Erkek") {
        cinsiyet = 1;
    } else {
        cinsiyet = 0;
    }

    const user = {
        name: ad,
        lastName: soyad,
        userName: kullaniciadi,
        email: email,
        password: sifre,
        phone: phone,
        city: city,
        about: bio,
        gender: cinsiyet
    }


 

    axios.post("http://localhost:8080/user", user).then((data) => {
        window.history.pushState('page2', 'Title', '/giris.html');
        location.reload();
    }).catch((err) => {
        console.log("hata", err);
    })

}



async function login() {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('sifre').value;

    

    let user;

   await axios.get("http://localhost:8080/user", {
        params: {
            userName: username
        }
    }).then((data) => {
        user = data.data;
        if(user == null){
            return;
        }
    }).catch((err) => {
        console.log(err);
        return;
    })
   
    if(user.password == password){
        localStorage.setItem("user", JSON.stringify(user))
        window.history.pushState('page2', 'Title', '/index2.html');
        location.reload();
    }else{
        alert("Kullanici adi ya da sifre hatalidir");
    }
    if(localStorage !== null){
        return;
    }
}

function logOut(){
    

    window.localStorage.removeItem('user');

    window.history.pushState('page2', 'Title', '/index.html');
    location.reload();
   
}