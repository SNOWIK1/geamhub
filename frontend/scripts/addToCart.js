const btnArr = document.getElementsByClassName("card-buy");
localStorage.clear();
for (const btn of btnArr) {
  btn.addEventListener("click", (e) => {
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    console.log(products.length);
    products.push(getProductNameAndType(e));
    localStorage.setItem("products", JSON.stringify(products));

    console.log(localStorage);

    fillCart();
  });
}

function getProductNameAndType(e) {
  const parentClass = e.target.parentNode.className;
  const collection = document.querySelector("." + parentClass).children;
  const imgLink = collection[0].src;
  let productName;
  let productType;
  for (const child of collection) {
    if (child.className === "product-info") {
      productName = child.children[0].children[0].innerHTML;
      productType = child.children[0].children[1].innerHTML;
    }
  }

  return { productName, productType, imgLink };
}

function fillCart() {
  const cart = document.querySelector(".cart");
  cart.innerHTML = ""
  const header = document.createElement("h4");
  header.innerHTML = "Cart";
  cart.appendChild(header);
  

  const products = JSON.parse(localStorage.getItem("products"));
  if (products.length !== 0) {
    for (const product of products) {

      const cartElemDiv = document.createElement("div")
      cartElemDiv.className = "product-in-cart"

      const productImg = document.createElement("img")
      productImg.src = product.imgLink
      productImg.alt = "product-img"


      cartElemDiv.appendChild(productImg)

      cart.appendChild(cartElemDiv)
    }
  }
}
