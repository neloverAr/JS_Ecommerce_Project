let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts = products.filter(item => item.isMe === "Y");

// let products = localStorage.getItem("products") || productsDB;
// let myProducts = Object.values(products).filter(item => item.isMe === "Y");
console.log(myProducts);
//vars

let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector("#products-length span")

userDom2.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;
if (myProducts.length != 0) {
    productsLength.innerHTML = myProducts.length;
} else {
    productsLength.innerHTML = 0;
    // productsLength.remove();
}

