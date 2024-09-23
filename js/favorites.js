let productsInCart = localStorage.getItem('productsInCart')
let productDom = document.querySelector('.products');
let noProducts = document.querySelector(".no-products");
// if (productsInCart) {
//     let items = JSON.parse(productsInCart);
//     drawCartProductsUI(items);
// }

function drawFavoritesUI(allProducts = []) {
    if (JSON.parse(localStorage.getItem("productsFavorite")).length===0) {
        noProducts.innerHTML = "There is no items!!"
    }
    let products = JSON.parse(localStorage.getItem("productsFavorite")) ||allProducts;
    let productsUI = products.map((item) => {
        return `
    <div class="product-item">
            <img src="${item.imageUrl}" alt="placeholer for product" class="product-item-img">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <p>Size: ${item.size}</p>
                <span>quantity: ${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" id="addCart" onclick="removeItemFromFavorite(${item.id})">Remove from Favorite</button>
                <i class="far fa-heart favorite"></i>
            </div>
        </div>
    `
    }).join(' ');

    productDom.innerHTML = productsUI;
}
drawFavoritesUI();

function removeItemFromFavorite(id) {
    let productsFavorite= localStorage.getItem('productsFavorite')
    if (productsFavorite) {
        let items = JSON.parse(productsInCart);

        let filteredItems = items.filter(item => item.id !== id);
        localStorage.setItem('productsFavorite', JSON.stringify(filteredItems));
         drawCartProductsUI(filteredItems);
    }
} 