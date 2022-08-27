let data = JSON.parse(localStorage.getItem("userData"));


// for button color change
let validate = () => {
  let val = document.getElementById("ip").value;
  if (val == "") {
    let ip = document.getElementById("ip");
    ip.style.borderColor = "green";
  } else if (val.length > 10 || val.length < 10) {
    let ip = document.getElementById("ip");
    ip.style.borderColor = "red";
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "#e0e0e0";
  } else {
    let ip = document.getElementById("ip");
    let btn = document.getElementById("btn");
    ip.style.borderColor = "green";
    btn.style.backgroundColor = "green";
  }
};

// verify mob number available in database or not
let num;
let verify = () => {
  num = document.getElementById("ip").value;
  // console.log(num);
  if (data != null) {    
    let flag=false;
    data.forEach((el) => {
      if (el.mobile == num) {
        localStorage.setItem("user", JSON.stringify(el));
        window.location.href = "otp.html";
         flag=true        
      }
    });
    if (flag == false) {
      alert("You are not registered");
      window.location.href = "signup.html";
    }
  } else {
    alert("You are not registered");
    window.location.href = "signup.html";
  }
};

