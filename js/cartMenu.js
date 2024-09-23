let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let cartsProductsMenu = document.querySelector('.carts-products');
let badgeDom = document.querySelector('.badge');
let cartsProductsDivDom = document.querySelector('.carts-products div');
let shoppingCartIcon = document.querySelector('.shoppingCart');
shoppingCartIcon.addEventListener('click', openCartMenu);

if (addedItem) {
    addedItem.map(item => {
        cartsProductsDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
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