const form=document.getElementById("forms")
const names=document.getElementById("inputname")
const age=document.getElementById("age")
const email=document.getElementById("mail")
const pnumber=document.getElementById("number")
const password=document.getElementById("pwd")
const cpassword=document.getElementById("cpwd")

form.addEventListener("submit",(e)=>
{
    if(!isValidate()){
        e.preventDefault();
    }
})
function isValidate(){
    const nameval=names.value.trim();
    const ageval=age.value.trim();
    const emailval=email.value.trim();
    const pnumberval=pnumber.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();


    if(nameval===''|| nameval==='null'){

        setError(names,'User name is required')
    }
    else{
        setSuccess(names)
    }
    if(ageval===''|| ageval===null){
        setError(age,'DOB is required')
    }
    else{
        setSuccess(age)
    }
    if(emailval===''|| emailval===null){
        setError(email,'Enter your email')

    }
    else if(!mailvalidate(emailval)){
        setError(email,'Enter a valid mailId')

    }
    else{
        setSuccess(email)
    }
    if(pnumberval===''||pnumberval===null){
        setError(pnumber,'phone number is required')
    }
    else{
        setSuccess(pnumber)
    }
    if(passwordval===''|| passwordval===null){
        setError(password,"password is required")
    }
    else if(!validpwd(passwordval)){
        setError(password,"Password must contains A-Z,a-Z,1-0and one special char")
    }
    else{
        setSuccess(password)
    }
    if(cpasswordval===''||cpasswordval===null){
        setError(cpassword,'conform password is required')
    }
    else if(cpasswordval!==passwordval){
        setError(cpassword,"password dose not match")
    }
    else{
        setSuccess(cpassword)
    }




}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
      inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
const mailvalidate=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

}
const validpwd=(password)=>{
   
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

};