// contact.js

const scriptURL = "https://script.google.com/macros/s/AKfycbxuPL5Gz5Jl_qJbQuSscyqp3Zb5HNh0Me4AAbqhZ1VYTNvaAIao0qMP2_oSORske2WhxQ/exec";

const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", function(e){

e.preventDefault();

fetch(scriptURL,{
method:"POST",
body:new FormData(form)
})
.then(response=>{

msg.innerHTML="Message sent successfully!";
msg.style.color="green";

form.reset();

setTimeout(()=>{
msg.innerHTML="";
},3000);

})
.catch(error=>{
msg.innerHTML="Error sending message";
msg.style.color="red";
});

});