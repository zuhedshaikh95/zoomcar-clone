let users = JSON.parse(localStorage.getItem("user-accounts")) || [];
// for button color change
let validate = () => {
  let number = document.querySelector("#number");
  let button = document.querySelector("#btn");
  if(number.value == ""){
    number.style.borderColor = "green";
  }
  else if(number.value.length > 10 || number.value.length < 10){
    number.style.borderColor = "red";
    button.style.backgroundColor = "#e0e0e0";
  }
  else{
    number.style.borderColor = "green";
    button.style.backgroundColor = "green";
  }
};

// verify mob number available in database or not
let verify = () => {
  let number = document.querySelector("#number").value;

  let flag = false;
  for(let i=0;i<users.length;i++){
    if(number == users[i].number){
      flag = true;
      localStorage.setItem("current-user", JSON.stringify(users[i]));
      break;
    }
  }

  if(flag){
    // alert("Login successful!");
    window.location.href="otp.html";
  }
  else{
    alert("You are not registered!");
    window.location.href="signup.html";
  }
};
