let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  /*dots[slideIndex-1].className += " active";*/
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




/*let slideIndex = 0;*/
/*showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/


 

         
    
    function click2(){
      let id=document.getElementById("button2")
     let id1=document.getElementById("button1")
      if(id.innerText==="Yield Mangement Services"){
         id.style.backgroundColor="green";
         id.style.color="white"
         id1.innerText="Contected Vehicle solutions"
         id1.style.backgroundColor="white";
         id1.style.color="black"
        
      }
        
    }

     function click1(){
      let id1=document.getElementById("button1")
      let id=document.getElementById("button2")
      if(id1.innerText==="Contected Vehicle solutions"){
        id1.style.backgroundColor="green";
        id1.style.color="white"
        id.innerText==="Yield Mangement Services"
        id.style.backgroundColor="white";
        id.style.color="black"
      }
     }


     var array=[]
     function test(){


      /*giving data*/
      var name=document.getElementById("name").value
     var companyname=document.getElementById("companyname").value
     var  email=document.getElementById("email").value
     var phonenumber=document.getElementById("phonenumber").value
     var country=document.getElementById("country").value
     var Mentionrequirement=document.getElementById("Mentionrequirement").value;

      var lakshmi={
        name:name,
        companyname:companyname,
        email:email,
        phonenumber:phonenumber,
        country:country,
        Mentionrequirement:Mentionrequirement
      }
      array.push(lakshmi)
      localStorage.setItem("Contact_Details",JSON.stringify(array))
      

     }