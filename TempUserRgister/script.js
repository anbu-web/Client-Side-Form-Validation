  function removes(event){
       var a= event.target.parentNode.parentNode.remove();
       alert("data deleted successfully")
      }
      var names = document.getElementById("inputname");
    var ages = document.getElementById("age");
    var emails = document.getElementById("mail");
    var genders = document.getElementById("gender")
    var courses = document.getElementById("course");
    var phones = document.getElementById("number");
    var addchilds = document.getElementById("addchild");

    function submitting(){
     


   var namevalue = names.value.trim();
    var agevalue = ages.value;
    var emailvalue = emails.value.trim();
    var gendervalue=genders.value;
    var coursevalue = courses.value.trim();
    var phonevalue = phones.value.trim();
if(!(namevalue==='' || namevalue===null )&& !(emailvalue===''|| emailvalue===null) &&!(coursevalue===null ||coursevalue==='') 
 ){
    var addvalue = document.createElement("tr");
    addvalue.innerHTML = `
      <td>${namevalue}</td>
      <td>${agevalue}</td>
      <td>${emailvalue}</td>
      <td>${gendervalue}</td>
      <td>${coursevalue}</td>
      <td>${phonevalue}</td>
      <td><button onclick="removes(event)">Delete</button></td>
    `;
addchilds.appendChild(addvalue)
  
    console.log(namevalue+""+agevalue+""+emailvalue+""+gendervalue+''+coursevalue+""+phonevalue)
}
   else{
    alert("Plese Enter All Fields")
   }
    
    }