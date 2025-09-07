 var ip=document.getElementById("ipvalue");
    var addvalue=document.getElementById("listitems")
function add(){
var listitem=document.createElement("li")
listitem.innerHTML=ip.value+"<button onclick='deletes(event)'>Delete</button>"
   addvalue.appendChild(listitem)
  
    
}
function deletes(event){
    event.target.parentElement.remove();

}