// first get data from locar stroge

// let data=JSON.parse(localStorage.getItem('key name'))
// display(data)

// let val1=(+data.amt)+99+276
// let val2=(+data.amt)+99+551

// let display=(data)=>{
//     document.getElementById('vName1').innerText=data.carName
//     document.getElementById('start').innerText=data.startDate
//     document.getElementById('end').innerText=data.endDate
//     document.getElementById('vName1').innerText=data.carName
//     document.getElementById('tpe').innerText=data.carType
//     document.getElementById('fuel').innerText=data.fuel
//     document.getElementById('carImg').innerText=data.carImg
//     document.getElementById('start1').innerText=data.startDate
//     document.getElementById('end1').innerText=data.endDate
//     document.getElementById('pickLocation').innerText=data.pickLocation
//     document.getElementById('dropLocation').innerText=data.dropLocation
//     document.getElementById('total').innerText=`₹ ${val1}`
// }

// let stdAmt=()=>{
//     document.getElementById('total').innerText=`₹ ${val1}`
// }
// let peaceOfMind=()=>{
//     document.getElementById('total').innerText=`₹ ${val2}`
// }

let flag;
let checkout = () => {
  let c3 = document.getElementById("check3");
  let btn = document.getElementById("cs");

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
    window.location.href = "#";
  }
}

