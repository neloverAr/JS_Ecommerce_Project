// let products = JSON.parse(localStorage.getItem("products")) || products;
// console.log(myProducts);
let noProducts = document.querySelector(".no-products");
let productDom = document.querySelector('.products');
function drawProductsUI(products = []) {
    let myProducts = products.filter(item => item.isMe === "Y");
    if (myProducts.length != 0) {
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
        }).join(' ');

        productDom.innerHTML = productsUI;
    } else {
        noProducts.innerHTML = "No Products !!";
    }

}

drawProductsUI(JSON.parse(localStorage.getItem("products")) || productsDB);

function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDB;
    let myProducts = products.filter(item => item.isMe === "Y");
    let filtered = myProducts.filter(item => item.id !== id);
    // console.log(filtered);

    let clicked = myProducts.find((i) => i.id === id)
    products = products.filter(item => item.id !== clicked.id);
    // console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    drawProductsUI(filtered);
}