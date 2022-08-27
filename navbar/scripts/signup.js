let data1=JSON.parse(localStorage.getItem('userData')) || []
let num=localStorage.getItem('mobile')
document.getElementById('ip1').value=num
let rgister= ()=>{    
let obj={
    name:document.getElementById('name').value,
    mobile:document.getElementById('ip1').value,
    email:document.getElementById('email').value,
    city:document.getElementById('selectcity').value,
    pass:document.getElementById('pass').value,
    gender:document.getElementById('gender').value
}

let {name,mobile,email,city,pass}=obj
if(name==""||mobile==""||email==""||city==""||pass==""||gender==""){
    alert('Fill All Data')
}else if(pass.length<8){
    alert('Password should be more than 8 characters')
}else{
    data1.push(obj)
    localStorage.setItem('userData',JSON.stringify(data1))
    window.location.href='login-page.html'
}
}