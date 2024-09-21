let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user"); 
let links = document.querySelector("#links"); 

let username = localStorage.getItem("username");
if(username){
    links.remove();
    userInfo.style.display = "block";
    userDom.innerHTML = localStorage.getItem("username");
}