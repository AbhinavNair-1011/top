document.addEventListener("DOMContentLoaded",(e)=>{
 
    
    let input= document.querySelector("#inputMessage");
   
    let submit= document.querySelector("button");
    let p = document.querySelector("p");

let text="Madarchod FBI! OPEN UP";
let show='';
let i=0;

    input.addEventListener("keyup",(e)=>{
        
        
      if(text[i]){
       show+=text[i];
       p.innerText=show;
       i++;
      }

    });
submit.addEventListener("click",(e)=>{
    let message= input.value.toString();
    let obj={"message":message}
    
axios.post("https://crudcrud.com/api/5846adbaec5b42f29ec9f5d9f650293c/secret",obj)
.then((res)=>{
if(res.status==201){
    alert("Dayumm bitch..Recieved!");
    input.value="";
}
})

input.value="";
})


input.value="";


})