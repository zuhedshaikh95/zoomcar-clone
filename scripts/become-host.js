let video = document.querySelector("video");
let videoCont = document.querySelector("#video-wrapper");
video.play();
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