const btnArr = document.getElementsByClassName("card-buy");

for (const btn of btnArr) {
  btn.addEventListener("click", (e) => {
    let products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }

    const clickedProduct = getProductInfo(e)
    const similarProduct = products.find(elem => elem.productName === clickedProduct.productName)

    if (!similarProduct) {
      products.push(clickedProduct);
    }

    localStorage.setItem("products", JSON.stringify(products));
  });
}

function getProductInfo(e) {
  const parentClass = e.target.parentNode.className;
  const collection = document.querySelector("." + parentClass).children;
  const imgLink = collection[0].src;
  let productName;
  let productPrice;
  for (const child of collection) {
    if (child.className === "product-info") {
      productName = child.children[0].children[0].innerHTML;
      productPrice = child.children[0].children[1].innerHTML;
      console.log(productPrice)
    }
  }

  return { productName, productPrice, imgLink };
}

