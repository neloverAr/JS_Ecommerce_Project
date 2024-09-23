let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts = products.filter(item => item.isMe === "Y");
console.log(myProducts);
//vars

let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

userInput.value = getUser;
userEmailInput.value = getEmail;

editForm.addEventListener("submit", editProfileData)


function editProfileData(e) {
    e.preventDefault();
    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);

    setTimeout(() => {
        window.location = "profile.html"
    }, 500);
}
