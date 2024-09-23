
// define products

let productDom = document.querySelector('.products');
let cartsProductsMenu = document.querySelector('.carts-products');
let cartsProductsDivDom = document.querySelector('.carts-products div');
let shoppingCartIcon = document.querySelector('.shoppingCart');
let badgeDom = document.querySelector('.badge');
let products = JSON.parse(localStorage.getItem("products"));
// JSON.parse();

shoppingCartIcon.addEventListener('click', openCartMenu);
function drawProductsUI(products = []) {
    let productsUI = products.map(item => {
        console.log('eee',item);
        return `
            <div class="product-item">
            <img src="${item.imageUrl}" alt="placeholer for product" class="product-item-img">
            <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span> 
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" id="addCart" onclick="addedToCart(${item.id})">Add to Cart</button>
                <i class="far fa-heart favorite" style="color:${item.liked==true?'red':""}" onclick="addedToFavorite(${item.id})"></i>
            </div>
        </div>
    `
    }).join(' ');

    productDom.innerHTML = productsUI;
}

drawProductsUI(JSON.parse(localStorage.getItem("products")));

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
    addedItem.map(item => {
        cartsProductsDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
}

let allItems = [];
function addedToCart(id) {
    if (localStorage.getItem('username')) {
        let choosenItem = products.find((item) => item.id === id);
        let item = allItems.find(i => i.id === choosenItem.id)
        //cartsProductsDivDom.innerHTML += `<p>${choosenItem.title}</p>`;

        if (item) {
            choosenItem.qty += 1;
        } else {
            allItems.push(choosenItem);
        }
        cartsProductsDivDom.innerHTML = "";
        allItems.forEach(item => {
            cartsProductsDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
        })

        addedItem = [...addedItem, choosenItem];
        let uniqueProducts = getUniqueArray(addedItem, "id");
        localStorage.setItem("productsInCart", JSON.stringify(uniqueProducts));
        let cartItemsLength = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartItemsLength.length;
        // window.location = 'cartproducts.html'
    } else {
        window.location = 'login.html'
    }
}

function checkLogedUser() {
    if (localStorage.getItem('username')) {
        console.log("Added to Cart");
        // window.location = 'cartproducts.html'
    } else {
        window.location = 'login.html'
    }
}
function getUniqueArray(arr, filterType) {
    let unique = arr
        .map(item => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter(item=>arr[item])
        .map(item=>arr[item]);
    return unique;
}
function openCartMenu() {
    if (cartsProductsDivDom.innerHTML != "") {
        if (cartsProductsMenu.style.display == "block") {
            cartsProductsMenu.style.display = "none";
        } else {
            cartsProductsMenu.style.display = "block";
        }

    }
}

function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "productDetails.html";
}

// search function
let input = document.getElementById('search');
input.addEventListener('keyup', function (e) {

    search(e.target.value, JSON.parse(localStorage.getItem("products")));

    if (e.target.value.trim() === "") {
        drawProductsUI(JSON.parse(localStorage.getItem("products")));
    }
});

function search(title, myArray) {

    let arr = myArray.filter(item => item.title.toLowerCase().indexOf((title.toLowerCase())) !== -1);
    drawProductsUI(arr);

}

let favoritesItems = localStorage.getItem("productsFavorite") 
? JSON.parse(localStorage.getItem("productsFavorite")) 
: [];
function addedToFavorite(id) {
    if (localStorage.getItem('username')) {
        let choosenItem = products.find((item) => item.id === id);
        choosenItem.liked = true;
        favoritesItems = [...favoritesItems, choosenItem];
        let uniqueProducts = getUniqueArray(favoritesItems, "id");
        localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
       products.map(item=>{
        if(item.id===choosenItem.id){
            item.liked = true;
        }
       })
       localStorage.setItem('products',JSON.stringify(products));

        drawProductsUI(products)
    } else {
        window.location = 'login.html'
    }
}