let carCont = document.querySelector("#car-container");
let sortDivs = document.querySelectorAll("#sort-panel > div > div");

let arr = Cars;
for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

appendCars(arr);

function appendCars(data){
    carCont.innerHTML=""
    data.forEach((elem,index)=>{
        let main = document.createElement("div");
        let imgBox = document.createElement("div");
        let content = document.createElement("div");
        let desc = document.createElement("div");
        let distance = document.createElement("div");
        let bio = document.createElement('div');
        let rating = document.createElement("div");
        let buttonDiv = document.createElement("div");
    
        let name = document.createElement("h3");
        let image = document.createElement("img");
        let trans = document.createElement("span");
        let fuel = document.createElement("span");
        let seats = document.createElement("span");
        let star = document.createElement("img");
        let rate = document.createElement("span");
        let driven = document.createElement("span");
        let price = document.createElement("div");
        let button = document.createElement("button");
    
        image.src = elem.url;
        name.innerText = elem.brand+" "+elem.model;
        distance.innerText = "2.0km";
        trans.innerText = elem.transmission+" ● ";
        fuel.innerText = elem.fuel+" ● ";
        seats.innerText = elem.seats+" Seats";
        star.src = "https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533";
        rate.innerText = elem.rating;
        driven.innerText = elem.driven+"k kms driven";
        button.innerText = "Book Now";
        price.innerText = elem.price;
    
        imgBox.setAttribute("class", "img-box");
        content.setAttribute("class", "content");
        desc.setAttribute("class", "desc");
        distance.setAttribute("class", "distance");
        bio.setAttribute("class", "bio");
        rating.setAttribute("class", "rating-box");
        buttonDiv.setAttribute("class","btn-box");
        price.setAttribute("class", "price");
        main.setAttribute("class", "main");
    
        imgBox.append(image);
        desc.append(name,distance);
        bio.append(trans,fuel,seats);
        rating.append(star,rate,driven);
        content.append(desc,bio,rating);
        buttonDiv.append(price,button);
        main.append(imgBox,content,buttonDiv);
        carCont.append(main)
    });
}

let bottom = document.createElement("div");
let div = document.createElement("div");
let msg = document.createElement("p");
let text = document.createElement("p");
let notify = document.createElement("div");
let img = document.createElement("img");

msg.innerText = "Can't Find The Right Car";
text.innerText = "The car I was looking for isn't listed here"
notify.innerText = "NOTIFY ME";
img.src = "https://img1.zoomcar.com/images/original/9cb4c0cb2f3656a765db302650c5f867bb31e06a.png?1594715157"
div.append(msg,text,notify);
bottom.append(div,img);
carCont.append(bottom);


// Sorting
let toSort = [];
let manual = document.querySelector("#manual");
let auto = document.querySelector("#auto");

manual.addEventListener("click", ()=>{
    manual.style.background = "#10a310";
    manual.style.color = "white"

    auto.style.background = "";
    auto.style.color = ""
    toSort.push("Manual");
    toFilter(toSort);
});

auto.addEventListener("click", ()=>{
    auto.style.background = "#10a310";
    auto.style.color = "white";

    manual.style.background = "";
    manual.style.color = "";
    toSort.push("Automatic");
    toFilter(toSort);
});


let seat8 = document.querySelector("#seat-8");
seat8.addEventListener("click", ()=>{
    seat8.style.background = "#10a310";
    seat8.style.color = "white";

    seat7.style.background = '';
    seat7.style.color = "";
    seat5.style.background="";
    seat5.style.color = "";
    toSort.push("8");
    toFilter(toSort);
});

let seat7 = document.querySelector("#seat-7");
seat7.addEventListener("click", ()=>{
    seat7.style.background = '#10a310';
    seat7.style.color = "white";

    seat8.style.background = "";
    seat8.style.color = "";
    seat5.style.background="";
    seat5.style.color = "";
    toSort.push("7");
    toFilter(toSort)
});

let seat5 = document.querySelector("#seat-5");
seat5.addEventListener("click", ()=>{
    seat5.style.background="#10a310";
    seat5.style.color = "white";

    seat7.style.background = '';
    seat7.style.color = "";
    seat8.style.background = "";
    seat8.style.color = "";
    toSort.push("5");
    toFilter(toSort);
});

let petrol = document.querySelector("#petrol");
petrol.addEventListener("click", ()=>{
    petrol.style.background="#10a310";
    petrol.style.color = "white";

    diesel.style.background="";
    diesel.style.color = "";
    toSort.push("Petrol")
    toFilter(toSort);

})

let diesel = document.querySelector("#diesel");
diesel.addEventListener("click",()=>{
    diesel.style.background="#10a310";
    diesel.style.color = "white";

    petrol.style.background="";
    petrol.style.color = "";
    toSort.push("Diesel");
    toFilter(toSort);
});

let rate5 = document.querySelector("#rate-5");
rate5.addEventListener("click", ()=>{
    rate5.style.background="#10a310";
    rate5.style.color = "white";

    rate4.style.background="";
    rate4.style.color = "";
    rate3.style.background="";
    rate3.style.color = "";
    toSort.push(5);
    toFilter(toSort);
});

let rate4 = document.querySelector("#rate-4");
rate4.addEventListener("click", ()=>{
    rate4.style.background="#10a310";
    rate4.style.color = "white";

    rate3.style.background="";
    rate3.style.color = "";
    rate5.style.background="";
    rate5.style.color = "";
    toSort.push(4);
    toFilter(toSort);
});

let rate3 = document.querySelector("#rate-3");
rate3.addEventListener("click", ()=>{
    rate3.style.background="#10a310";
    rate3.style.color = "white";

    rate5.style.background="";
    rate5.style.color = "";
    rate4.style.background="";
    rate4.style.color = "";
    toSort.push(3);
    toFilter(toSort);
});



let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", ()=>{
    window.location.reload()
});

function toFilter(array){
    let char=[];

    for(let i=0;i<array.length;i++){
        Cars.forEach((elem,index)=>{
            if(elem.transmission == array[i]){
                char.push(elem);
            }
            else if(elem.seats == array[i]){
                char.push(elem);
            }
            else if(elem.fuel == array[i]){
                char.push(elem);
            }
            else if(elem.rating == array[i]){
                char.push(elem);
            }
        });
    }
    appendCars(char);
    console.log(char.length);
}