let video = document.querySelector("video");
let videoCont = document.querySelector("#video-wrapper");
let flag = true;
function playVid(){
    if(flag){
        video.pause();
        flag = false;
        videoCont.style.background="rgba(34,34,34,0.1)"
        video.style.opacity="0.3"
    }
    else{
        video.play();
        flag = true;
        video.style.opacity="1"
        videoCont.style.background=""
    }
    return false
}


function showFAQ_content(value){
    if( document.querySelector(`.paragraph${value}`).style.display=="block"){
      document.querySelector(`.paragraph${value}`).style.display="none"
      document.querySelector(`.downarrow${value}`).setAttribute("src","https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg")
    }
    else{
    document.querySelector(`.downarrow${value}`).setAttribute("src","https://www.zoomcar.com/zap/subscribe/build/c35ac180e107c35808bed382d19533d9.svg")
   document.querySelector(`.paragraph${value}`).style.display="block"
 
  }
  }


let cal_but=document.querySelector(".home_btn_calculation")
let cal_TEXT=document.querySelector(".amigo-home__text")
cal_but.addEventListener("click", function(e) {
  let calculator = document.getElementById("block")
  if(calculator.style.display == "block"){

    calculator.style.display = "none";
  }else{
    calculator.style.display = "block";
  }
})

cal_TEXT.addEventListener("click", function(e) {
  let calculator = document.getElementById("block")
  if(calculator.style.display == "block"){

    calculator.style.display = "none";
  }else{
    calculator.style.display = "block";
  }
})

function openRefer() {
  if(document.getElementById("main_refer_popup").style.display == "block"){
     
    document.getElementById("main_refer_popup").style.display = "none";
  }else{
    document.getElementById("main_refer_popup").style.display = "block";
    
  }
}