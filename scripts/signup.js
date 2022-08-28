let users = JSON.parse(localStorage.getItem("user-accounts")) || [];

let register = () =>{
    let obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        gender: document.querySelector("#gender").value,
        city: document.querySelector("#city").value,
        password: document.querySelector("#password").value, 
    }

    let { password, number } = obj;
    let flag = true;
    if(password.length < 8){
        alert("Choose 8 character password!");
        flag = false;
    }

    if(number.length < 10){
        alert("Phone number invalid. Try again!");
        flag = false;
    }

    for(let key in obj){
        if(obj[key] == ""){
            flag = false;
            alert("Fill all the input fields!");
            break;
        }
    }

    if(flag){
        users.push(obj);
        localStorage.setItem("user-accounts", JSON.stringify(users));
        alert("You are registered!");
        window.location.href="login-page.html";
    }
}