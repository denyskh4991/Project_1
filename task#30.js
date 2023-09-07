const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");
const productInfo = document.getElementById("product-info");

const categories = {
    electronics: [
        { name: "Смартфон", price: 100 },
        { name: "Ноутбук", price: 500 },
    ],
    clothing: [
        { name: "Футболка", price: 20 },
        { name: "Джинси", price: 50 },
    ],
    books: [
        { name: "Роман", price: 10 },
        { name: "Детектив", price: 15 },
    ],
};

function showProducts(category) {
    productList.innerHTML = "";
    categories[category].forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerText = `${product.name} - ${product.price}$`;
        productItem.addEventListener("click", () => showProductInfo(category, index));
        productList.appendChild(productItem);
    });
}

function showProductInfo(category, index) {
    const selectedProduct = categories[category][index];
    productInfo.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Ціна: ${selectedProduct.price}$</p>
    <button id="buy-button">Купити</button>
  `;

    const buyButton = document.getElementById("buy-button");
    buyButton.addEventListener("click", () => {
        alert(`Товар "${selectedProduct.name}" куплений!`);
        productInfo.innerHTML = "";
        showCategories();
    });
}

function showCategories() {
    productList.innerHTML = "";
    productInfo.innerHTML = "";
}

categoryList.addEventListener("click", (event) => {
    const selectedCategory = event.target.getAttribute("data-category");
    if (selectedCategory) {
        showProducts(selectedCategory);
        productInfo.innerHTML = "";
    }
});