



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}




/*var array1 = []*/
var priya = {
    cardnumber: "0123456",
    cvv: "333",

}


let form = document.querySelector("form");
form.addEventListener("submit", ()=>{
    event.preventDefault();

    var cardnumber = document.getElementById("cardnumber").value
    var expiry = document.getElementById("expiry").value
    var cvv = document.getElementById("cvv").value
    /* alert("Thank You for Entry details")*/


    if (priya.cardnumber == cardnumber && priya.cvv == cvv) {
        alert("Payment Sucessful");
        window.location.href = "index.html";
    } else {
        alert("Invalid Details")
        window.location.reload();
    }
})