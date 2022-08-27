



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}




/*var array1 = []*/
var priya = {
    cardnumber: "123456789123",
    cvv: "333",

}




function payment() {


    /*giving data*/
    var cardnumber = document.getElementById("cardnumber").value
    var expiry = document.getElementById("expiry").value
    var cvv = document.getElementById("cvv").value
    /* alert("Thank You for Entry details")*/


    /*var lakshmi = {
        cardnumber: cardnumber,
        expiry: expiry,
        cvv: cvv,
    }
    array.push(lakshmi)
    localStorage.setItem("User_Details", JSON.stringify(array))*/


    if (priya.cardnumber == cardnumber && priya.cvv == cvv) {
        alert("Payment Sucessful");
        window.location.href = "./payment.html"
    } else {
        alert("Invalid Details")
        window.location.href = "./payment.html"
    }


}