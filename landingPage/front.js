function changeToAir(){
    let currentImage=document.getElementById("backgroundImg").style.backgroundImage;
  //console.log(currentImage)
    if(currentImage == "url(https://www.zoomcar.com/img/banner_roundtrip.png)" || currentImage == ""){

       document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_airport.png)"
    }else{
      document.getElementById("backgroundImg").style.backgroundImage = "url(https://www.zoomcar.com/img/banner_airport.png)"
    }

   //let airOption=document.querySelector("#air-option").value;
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

  // appended google-map
  
  function display(city){
    //appending map changing its source
    let map=document.querySelector("#gmap_canvas")
       map.src= `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
     
 }
 let select=document.querySelector("#select")
 select.addEventListener("change", function() {
     let city=this.value;
 
     display(city)
 });