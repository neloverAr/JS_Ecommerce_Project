// let products = JSON.parse(localStorage.getItem("products")) || products;
// console.log(myProducts);
let productDom = document.querySelector('.products');
let noProductsDom = document.querySelector(".no-products");

let drawProductsUI;
(drawProductsUI = function (products = []) {
    let myProducts = products.filter(item => item.isMe === "Y");

    if (myProducts.length != 0) {
        console.log(myProducts);
        let productsUI = myProducts.map(item => {
            return `
                <div class="product-item" style="border:${item.isMe === 'Y' ? "2px solid green" : ""}">
                <img src="${item.imageUrl}" alt="placeholer for product" class="product-item-img">
                <div class="product-item-desc">
                    <a onclick="saveItemData(${item.id})">${item.title}</a>
                    <p>${item.desc}</p>
                    <span>Size: ${item.size}</span> 
                    <button class='edit-products' onclick='editProduct(${item.id})'>Edit Product</button>
                    <button class='delete-products' onclick='deleteProduct(${item.id})'>Delete Product</button>
                </div>
                
            </div>
        `
        });

        productDom.innerHTML = productsUI.join("");
    } else {
        //    console.log("no");
        productDom.innerHTML = "";
        noProductsDom.innerHTML = "No Products !!";
    }

})(JSON.parse(localStorage.getItem("products")) || productsDB);

// drawProductsUI(JSON.parse(localStorage.getItem("products")) || productsDB);

function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDB;
    let myProducts = products.filter(item => item.isMe === "Y");
    let filtered = myProducts.filter(i => i.id !== id);
    // console.log(filtered);

    let clicked = myProducts.find((i) => i.id === id)
    products = products.filter(item => item.id !== clicked.id);
    // console.log(products);
    localStorage.setItem('products', JSON.stringify(products));

    drawProductsUI(filtered);
}