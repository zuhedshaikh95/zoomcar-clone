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

let commence = document.querySelector("#commence");
let conclude = document.querySelector("#conclude");

commence.innerText = startweek+" , "+startDate.getDate()+" "+startmonth+" , "+starttime;
conclude.innerText = endweek+" , "+endDate.getDate()+" "+endmonth+" , "+endtime;

function convert(t){
    let date = new Date(t);
    return date.getHours("en-US")+":0"+date.getMinutes("en-US")+" hrs";
}