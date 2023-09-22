const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");
const productInfo = document.getElementById("product-info");
const myOrdersButton = document.getElementById("my-orders-button");

let currentCategory = null;

const categoryLinks = document.querySelectorAll("#category-list a");
categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Запобігаємо стандартному переходу
        const selectedCategory = link.getAttribute("data-category");
        if (selectedCategory) {
            showProducts(selectedCategory);
            productInfo.innerHTML = "";
        }
    });
});

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
    <div id="order-form" style="display: none;">
      <h3>Форма оформлення замовлення</h3>
      <form id="order-form">
        <label for="customer-name">ПІБ покупця:</label>
        <input type="text" id="customer-name" required><br><br>
        <label for="city">Місто:</label>
        <select id="city" required>
          <option value="Київ">Київ</option>
          <option value="Львів">Львів</option>
          <option value="Одеса">Одеса</option>
        </select><br><br>
        <label for="delivery-point">Склад Нової пошти:</label>
        <input type="text" id="delivery-point" required><br><br>
        <label for="payment-method">Спосіб оплати:</label>
        <input type="radio" id="cash-on-delivery" name="payment-method" value="cash-on-delivery" required>
        <label for="cash-on-delivery">Післяплата</label>
        <input type="radio" id="credit-card" name="payment-method" value="credit-card" required>
        <label for="credit-card">Банківська картка</label><br><br>
        <label for="quantity">Кількість продукції:</label>
        <input type="number" id="quantity" required><br><br>
        <label for="comment">Коментар до замовлення:</label>
        <textarea id="comment"></textarea><br><br>
        <button id="confirm-order">Підтвердити замовлення</button>
      </form>
    </div>
  `;

    const buyButton = document.getElementById("buy-button");
    const orderForm = document.getElementById("order-form");
    const confirmOrderButton = document.getElementById("confirm-order");

    buyButton.addEventListener("click", () => {
        orderForm.style.display = "block";
    });

    function validateOrder() {
        const customerName = document.getElementById("customer-name").value;
        const city = document.getElementById("city").value;
        const deliveryPoint = document.getElementById("delivery-point").value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        const quantity = document.getElementById("quantity").value;

        if (customerName && city && deliveryPoint && paymentMethod && quantity) {
            return true;
        }
        return false;
    }

    confirmOrderButton.addEventListener("click", (event) => {
        event.preventDefault();
        const customerName = document.getElementById("customer-name").value;
        const city = document.getElementById("city").value;
        const deliveryPoint = document.getElementById("delivery-point").value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        const quantity = document.getElementById("quantity").value;
        const comment = document.getElementById("comment").value;

        if (validateOrder()) {
            alert("Замовлення прийнято!");
            showCategories();
            orderForm.style.display = "none";
            saveOrder(selectedProduct, customerName, city, deliveryPoint, paymentMethod.value, quantity, comment);
        } else {
            alert("Будь ласка, заповніть всі обов'язкові поля.");
        }
    });
}

function showCategories() {
    productList.innerHTML = "";
    productInfo.innerHTML = "";
}

myOrdersButton.addEventListener("click", () => {
    showMyOrders();
});

function showMyOrders() {
    productList.innerHTML = "";
    productInfo.innerHTML = "";
    categoryList.style.display = "none";

    // Отримати збережені замовлення з localStorage і відобразити їх
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (savedOrders.length === 0) {
        productList.innerHTML = "У вас немає замовлень.";
    } else {
        savedOrders.forEach((order, index) => {
            const orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
        <p>Замовлення #${index + 1}</p>
        <p>Дата: ${order.date}</p>
        <p>Сума: ${order.totalPrice}$</p>
        <button class="expand-order-button" id="expand-order-${index}">Розгорнути</button>
        <div class="order-details" id="order-details-${index}" style="display: none;"></div>
      `;

            const expandOrderButton = orderItem.querySelector(".expand-order-button");
            expandOrderButton.addEventListener("click", () => showOrderDetails(order, index));

            productList.appendChild(orderItem);
        });
    }
}

myOrdersButton.addEventListener("click", () => {
    showMyOrders();
});

function showOrderDetails(order, index) {
    const orderDetails = document.getElementById(`order-details-${index}`);
    if (orderDetails.style.display === "none") {
        orderDetails.style.display = "block";
        orderDetails.innerHTML = `
      <h2>Деталі замовлення #${index + 1}</h2>
      <p>Дата: ${order.date}</p>
      <p>Сума: ${order.totalPrice}$</p>
      <p>Покупець: ${order.customerName}</p>
      <p>Місто: ${order.city}</p>
      <p>Склад Нової пошти: ${order.deliveryPoint}</p>
      <p>Спосіб оплати: ${order.paymentMethod}</p>
      <p>Кількість продукції: ${order.quantity}</p>
      <p>Коментар: ${order.comment}</p>
      <!-- Додайте відображення інших додаткових полів, які ви зберегли -->
      <button id="delete-order-button-${index}">Видалити замовлення</button>
    `;

        const deleteOrderButton = orderDetails.querySelector(`#delete-order-button-${index}`);
        deleteOrderButton.addEventListener("click", () => {
            // Видалити замовлення зі збережених та знову відобразити список замовлень
            const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
            savedOrders.splice(index, 1);
            localStorage.setItem("orders", JSON.stringify(savedOrders));
            showMyOrders();
        });
    } else {
        orderDetails.style.display = "none";
    }
}

function saveOrder(product, customerName, city, deliveryPoint, paymentMethod, quantity, comment) {
    const date = new Date().toLocaleDateString();
    const totalPrice = product.price * quantity;

    const order = {
        date,
        totalPrice,
        product,
        customerName,
        city,
        deliveryPoint,
        paymentMethod,
        quantity,
        comment,
    };

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    savedOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(savedOrders));
}