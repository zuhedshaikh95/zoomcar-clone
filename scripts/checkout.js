let flag;

let checkout = () => {
  let btn = document.getElementById("cs");
  let c3 = document.getElementById("check3");
  if (c3.checked) {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    flag = true;
  } else {
    btn.style.backgroundColor = "#808080";
    flag = false;
  }
};

// for checkout page

function processNxt() {
  if (flag == true) {
    window.location.href="checkout-summary.html";
  }
  else{
    alert("Click for agree to the Agreement policy")
  }
}

let userCar = JSON.parse(localStorage.getItem("user-car"));
let user = JSON.parse(localStorage.getItem("current-user"));

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const week = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];

let startDate = new Date(user.pickup);
let endDate = new Date(user.drop);

let startweek = week[startDate.getDay()]
let endweek = week[endDate.getDay()];

let startmonth = month[startDate.getMonth()];
let endmonth = month[endDate.getMonth()];

let starttime = convert(startDate.getTime());
let endtime = convert(endDate.getTime());

let st = user.pickup.split("T");
let ed = user.drop.split("T");

let navVehicle = document.querySelector("#vName1");
let sumVehicle = document.querySelector("#vName2");
let trans = document.querySelector("#tpe");
let fuel = document.querySelector("#fuel");
let image = document.querySelector("#carImg");
let end = document.querySelector("#end1");
let start = document.querySelector("#start1");
let endLocat = document.querySelector("#endLocation");
let startLocat = document.querySelector("#startLocat");
let rate = document.querySelector("#rate");
let total = document.querySelector("#total");
let navStart = document.querySelector("#start");
let navEnd = document.querySelector("#end");


navVehicle.innerText = userCar.brand+" "+userCar.model;
sumVehicle.innerText = userCar.brand+" "+userCar.model;
trans.innerText = userCar.transmission;
fuel.innerText = userCar.fuel;
image.src = userCar.url;
rate.innerText = userCar.rating;

start.innerText = startweek+" , "+startDate.getDate()+" "+startmonth+" , "+starttime;

end.innerText = endweek+" , "+endDate.getDate()+" "+endmonth+" , "+endtime;

navStart.innerText = start.innerText;
navEnd.innerText = end.innerText;

let duration = Math.abs(startDate.getDate() - endDate.getDate()) +1;

function peaceOfMind(){
   let final = (duration * userCar.price) + 551 + 99;
   total.innerHTML =  "&#x20b9; "+final;
   userCar.fare = (duration * userCar.price);
   userCar.total = final;
   userCar.protectFee = 551;
   localStorage.setItem("user-car", JSON.stringify(userCar));
}

stdAmt();
function stdAmt(){
   let final = (duration * userCar.price) + 276 + 99;
   total.innerHTML =  "&#x20b9; "+final;
   userCar.fare = (duration * userCar.price);
   userCar.total = final;
   userCar.protectFee = 276;
   localStorage.setItem("user-car", JSON.stringify(userCar));
}

function convert(t){
    let date = new Date(t);
    return date.getHours("en-US")+":0"+date.getMinutes("en-US")+" hrs";
}