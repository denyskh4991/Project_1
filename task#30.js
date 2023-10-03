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
    <button id="buy-button" style="display: block; margin: 0 auto;">Купити</button>
    <div id="order-form-container" style="display: none;">
      <h3>Форма оформлення замовлення</h3>
      <form id="order-form">
        <label for="customer-name">ПІБ покупця:</label>
        <input type="text" id="customer-name" name="customer-name" required><br><br>
        <label for="city">Місто:</label>
        <select id="city" name="city" required>
          <option value="Київ">Київ</option>
          <option value="Львів">Львів</option>
          <option value="Одеса">Одеса</option>
          </select><br><br>
        <label for="delivery-point">Склад Нової пошти:</label>
        <input type="text" id="delivery-point" name="delivery-point" required><br><br>
        <label for="payment-method">Спосіб оплати:</label>
        <input type="radio" id="cash-on-delivery" name="payment-method" value="Післяплата" required>
        <label for="cash-on-delivery">Післяплата</label>
        <input type="radio" id="credit-card" name="payment-method" value="Банківська картка" required>
        <label for="credit-card">Банківська картка</label><br><br>
        <label for="quantity">Кількість продукції:</label>
        <input type="number" id="quantity" name="quantity" required><br><br>
        <label for="comment">Коментар до замовлення:</label>
        <textarea id="comment" name="comment"></textarea><br><br>
        <button type="submit" id="confirm-order">Підтвердити замовлення</button>
      </form>
    </div>
  `;

    const orderFormContainer = document.getElementById("order-form-container");
    const orderForm = document.getElementById("order-form");
    const buyButton = document.getElementById("buy-button");

    buyButton.style.display = "block";

    buyButton.addEventListener("click", () => {
        orderFormContainer.style.display = "block";
        buyButton.style.display = "none";
    });

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (orderForm.checkValidity()) {
            const formData = new FormData(orderForm);
            const customerName = formData.get("customer-name");
            const city = formData.get("city");
            const deliveryPoint = formData.get("delivery-point");
            const paymentMethod = formData.get("payment-method");
            const quantity = formData.get("quantity");
            const comment = formData.get("comment");

            showOrderInfo(selectedProduct, customerName, city, deliveryPoint, paymentMethod, quantity, comment);
        } else {
            alert("Будь ласка, заповніть всі обов'язкові поля.");
        }
    });
}

function showOrderInfo(selectedProduct, customerName, city, deliveryPoint, paymentMethod, quantity, comment) {
    const orderTable = document.createElement("table");
    orderTable.innerHTML = `
      <tr>
        <th>Товар</th>
        <th>Ціна</th>
      </tr>
      <tr>
        <td>${selectedProduct.name}</td>
        <td>${selectedProduct.price}$</td>
      </tr>
      <tr>
        <th>Інформація про доставку</th>
        <th></th>
      </tr>
      <tr>
        <td>ПІБ покупця:</td>
        <td>${customerName}</td>
      </tr>
      <tr>
        <td>Місто:</td>
        <td>${city}</td>
      </tr>
      <tr>
        <td>Склад Нової пошти:</td>
        <td>${deliveryPoint}</td>
      </tr>
      <tr>
        <td>Спосіб оплати:</td>
        <td>${paymentMethod}</td>
      </tr>
      <tr>
        <td>Кількість:</td>
        <td>${quantity}</td>
      </tr>
      <tr>
        <td>Коментар:</td>
        <td>${comment}</td>
      </tr>
    `;
    productInfo.innerHTML = "";
    productInfo.appendChild(orderTable);
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