let user = JSON.parse(localStorage.getItem("current-user"));
let userCar = JSON.parse(localStorage.getItem("user-car"));
let tripfare = document.querySelector("#tripFare");
let totalfare = document.querySelector("#total-fare");
let final = document.querySelector("#final");
let image = document.querySelector("#car-img");
let car = document.querySelector("#car-name");
let damage = document.querySelector("#damage-fee");

let navVehicle = document.querySelector("#vName1");
let start = document.querySelector("#start");
let end = document.querySelector("#end");

let startdate = user.pickup.split("T")
let enddate = user.drop.split("T")

navVehicle.innerText = userCar.brand+" "+userCar.model;
tripfare.innerHTML = "&#x20b9; "+userCar.fare;
start.innerText = startdate[0]+" , "+startdate[1]+" ";
end.innerText = enddate[0]+" , "+enddate[1];
image.src = userCar.url;
car.innerText = userCar.brand+" "+userCar.model;
damage.innerHTML = "&#x20b9; "+ userCar.protectFee;

let finalfare = userCar.total;

totalfare.innerHTML = "&#x20b9; "+finalfare;
final.innerHTML = "&#x20b9; "+finalfare;

function gotoPayment(){
    window.location.href="payment.html"
}