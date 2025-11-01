const addCartButtons = document.querySelectorAll(".add-cart");
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItemsList = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

// Add to cart
addCartButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    const product = e.target.closest(".product-card");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    const img = product.dataset.img;

    cart.push({ name, price, img });
    updateCart();
  });
});

// Update cart UI
function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `<img src="${item.img}" alt="">
                    <div>
                      <p><strong>${item.name}</strong></p>
                      <p>$${item.price.toFixed(2)}</p>
                    </div>`;
    cartItemsList.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Open / Close cart panel
cartIcon.addEventListener("click", () => {
  cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});
