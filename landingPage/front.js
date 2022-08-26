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

  function changePara(){

  }