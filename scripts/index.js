function changeToAir(){
    let currentImage=document.getElementById("backgroundImg").style.backgroundImage;
  //console.log(currentImage)
    if(currentImage == "url(https://www.zoomcar.com/img/banner_roundtrip.png)" || currentImage == ""){

       document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_airport.png)"
    }else{
      document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_airport.png)"
    }
   let showAirport=document.getElementById("show-airport");
   showAirport.textContent='Air-Port';
  }

  function changeToRoad(){
    let currentImage=document.getElementById("backgroundImg").style.backgroundImage;
  //console.log(currentImage)
    if(currentImage == "url(https://www.zoomcar.com/img/banner_airport.png)" || currentImage == ""){

       document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_roundtrip.png)"
    }else{
      document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_roundtrip.png)"
    }
    let showAirport=document.getElementById("show-airport");
   showAirport.textContent='Pick Up City, Airport, Address or Hotel';
  }


  let user = JSON.parse(localStorage.getItem("current-user"));
  display(user.city)
  // appended google-map
  
  function display(city){
    //appending map changing its source
    let map=document.querySelector("#gmap_canvas")
       map.src= `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
 }
 let select=document.querySelector("#select")
 select.addEventListener("change", function() {
     let city = this.value;
     display(city);
 });

 let form = document.querySelector("form");
 form.addEventListener("submit", ()=>{
  event.preventDefault();
  let start = form.start.value;
  let location = form.select.value;
  let end = form.end.value;

  user.pickup = start;
  user.drop = end;
  user.location = location;
  localStorage.setItem("current-user", JSON.stringify(user));
  window.location.href="cars.html";
 });