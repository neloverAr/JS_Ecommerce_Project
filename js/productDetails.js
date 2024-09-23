let products = JSON.parse(localStorage.getItem("products"));
let productsID = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productsDetails = products.find(item => item.id == productsID);

itemDom.innerHTML = `
<img src="${productsDetails.imageUrl}" alt="">
     <h2>${productsDetails.title}</h2>
     <p>${productsDetails.desc}</p>
     <span>Size: ${productsDetails.size}</span><br>
     <span>Quantity: ${productsDetails.qty}</span>
`;