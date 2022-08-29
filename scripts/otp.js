let user=JSON.parse(localStorage.getItem('current-user'))

document.getElementById('mNum').innerText=user.number

let otp='123456'
let flag=false
let verifyOtp=()=>{
    let val=document.getElementById('otp').value
    if(val==""){
        let ip=document.getElementById('otp')
        ip.style.borderColor='green'
    }else if(val.length>6 || val.length<6){        
        let ip=document.getElementById('otp')
        ip.style.borderColor='red'
        let btn=document.getElementById('btn2')
        btn.style.backgroundColor='#e0e0e0'
    }
    else{
        let ip=document.getElementById('otp')
        let btn=document.getElementById('btn2')
        ip.style.borderColor='green'
        btn.style.backgroundColor='green'
        flag=true
    }
}

let validateOtp=()=>{
    let val=document.getElementById('otp').value
    if(flag==true&&val==otp){
        alert('Login Sucessful')
        window.location.href='index.html'
    }
}