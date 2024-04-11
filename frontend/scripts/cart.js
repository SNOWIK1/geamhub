const parent = document.getElementById("main")

const productInCart = document.createElement("div")
const productTitle = document.createElement("h4")
const productImg = document.createElement("img")
const productPrice = document.createElement("h4")
const productType = document.createElement("p")
const decreaseBtn = document.createElement("button")
const increaseBtn = document.createElement("button");

productInCart.className = "product-in-cart"
productTitle.className = "product-h4"
productPrice.className = "product-h4"
productImg.className = "product-in-cart-img"
productType.className = "product-p"
decreaseBtn.className = "cart-btn"
decreaseBtn.id = "decrease"
increaseBtn.className = "cart-btn"
decreaseBtn.id = "increase";


const productsInStorage = JSON.parse(localStorage.getItem("products"))

if (productsInStorage.length !== 0) {
    for (const product of productsInStorage) {
        productTitle.innerHTML = product.productName
        productPrice.innerHTML = product.productPrice
        productImg.src = product.imgLink
        productImg.alt = "product-img"

        productInCart.appendChild(productImg)
        productInCart.appendChild(productTitle)
        productInCart.appendChild(productPrice);

        parent.appendChild(productInCart)
    }
}