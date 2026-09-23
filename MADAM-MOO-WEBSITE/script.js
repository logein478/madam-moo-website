let cart = JSON.parse(localStorage.getItem("madamMooCart") || "[]");

const money = value => `${Number(value).toLocaleString("en-US")} ج.م`;

function saveCart() {
  localStorage.setItem("madamMooCart", JSON.stringify(cart));
  updateCartUI();
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderProducts(category, targetId) {
  const target = document.getElementById(targetId);
  const list = products.filter(p => p.category === category);

  target.innerHTML = list.map(p => {
    const hasVariants = Array.isArray(p.variants);
    const image = p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : `<div class="image-placeholder">MOO</div>`;
    const priceText = hasVariants
      ? `<div class="variant-prices">${p.variants.map(v => `<span>${v.ar}: <b>${v.price}</b></span>`).join("")}</div>`
      : `<div class="single-price">${money(p.price)}</div>`;

    return `
      <article class="product-card ${hasVariants ? "burger-card" : ""}">
        <div class="product-image">${image}</div>
        <div class="product-body">
          <div class="product-top">
            <div>
              <h3>${p.name}</h3>
              <div class="arabic-name">${p.ar}</div>
            </div>
            ${!hasVariants ? `<span class="price-pill">${money(p.price)}</span>` : ""}
          </div>
          ${p.description ? `<p>${p.description}</p>` : ""}
          ${priceText}
          ${hasVariants
            ? `<div class="variant-buttons">${p.variants.map((v, i) => `
                <button class="add-btn" data-product="${p.id}" data-variant="${i}">
                  + ${v.ar} · ${money(v.price)}
                </button>`).join("")}</div>`
            : `<button class="add-btn" data-product="${p.id}">إضافة للسلة +</button>`
          }
        </div>
      </article>`;
  }).join("");
}

function addToCart(productId, variantIndex = null) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  const variant = variantIndex !== null && p.variants ? p.variants[variantIndex] : null;
  const name = variant ? `${p.name} — ${variant.name}` : p.name;
  const price = variant ? variant.price : p.price;
  const key = variant ? `${productId}-${variant.name}` : productId;

  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, productId, name, ar: variant ? `${p.ar} — ${variant.ar}` : p.ar, price, qty: 1 });

  saveCart();
  showToast(`${name} اتضاف للسلة 🛒`);
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cartCount").textContent = count;

  const total = cartSubtotal() + RESTAURANT.deliveryFee;
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("checkoutTotal").textContent = money(total);

  const box = document.getElementById("cartItems");
  if (!cart.length) {
    box.innerHTML = `<div class="empty-cart"><div>🛒</div><h3>السلة فاضية</h3><p>اختاري حاجة من المنيو وهنبدأ.</p></div>`;
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }

  document.getElementById("checkoutBtn").disabled = false;
  box.innerHTML = cart.map(item => `
    <div class="cart-row">
      <div>
        <strong>${item.name}</strong>
        <small>${item.ar}</small>
        <span>${money(item.price)} × ${item.qty}</span>
      </div>
      <div class="qty">
        <button onclick="changeQty('${item.key}', -1)">−</button>
        <b>${item.qty}</b>
        <button onclick="changeQty('${item.key}', 1)">+</button>
      </div>
    </div>
  `).join("");
}

function openCart() {
  document.getElementById("cartDrawer").classList.remove("hidden");
  document.body.classList.add("no-scroll");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.add("hidden");
  document.body.classList.remove("no-scroll");
}
function openCheckout() {
  if (!cart.length) return;
  closeCart();
  document.getElementById("checkoutModal").classList.remove("hidden");
  document.body.classList.add("no-scroll");
}
function closeCheckout() {
  document.getElementById("checkoutModal").classList.add("hidden");
  document.body.classList.remove("no-scroll");
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function buildWhatsAppMessage() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("customerNotes").value.trim();

  let message = `🍔 *MADAM MOO — NEW ORDER*\n\n`;
  message += `👤 *الاسم:* ${name}\n`;
  message += `📞 *التليفون:* ${phone}\n`;
  message += `📍 *العنوان:* ${address}\n\n`;
  message += `🛒 *الطلب:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.qty} × ${item.name} — ${money(item.price * item.qty)}\n`;
  });

  const subtotal = cartSubtotal();
  const delivery = RESTAURANT.deliveryFee;

  message += `\n💰 *قيمة الطلب:* ${money(subtotal)}\n`;
  if (delivery > 0) message += `🚚 *الدليفري:* ${money(delivery)}\n`;
  message += `💵 *الإجمالي: ${money(subtotal + delivery)}*\n`;
  message += `\n📝 *ملاحظات:* ${notes || "لا يوجد"}\n`;
  message += `\n━━━━━━━━━━━━━━\nMADAM MOO 🐮`;

  return message;
}

document.addEventListener("click", e => {
  const addBtn = e.target.closest(".add-btn");
  if (!addBtn) return;
  addToCart(addBtn.dataset.product, addBtn.dataset.variant !== undefined ? Number(addBtn.dataset.variant) : null);
});

document.getElementById("openCartBtn").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("closeCheckoutBtn").addEventListener("click", closeCheckout);
document.getElementById("backToCartBtn").addEventListener("click", () => {
  closeCheckout();
  openCart();
});

document.getElementById("cartDrawer").addEventListener("click", e => {
  if (e.target.id === "cartDrawer") closeCart();
});
document.getElementById("checkoutModal").addEventListener("click", e => {
  if (e.target.id === "checkoutModal") closeCheckout();
});

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!cart.length) return;

  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`;

  // This opens WhatsApp with the complete order ready.
  // The customer still needs to tap "Send" inside WhatsApp.
  window.open(url, "_blank", "noopener,noreferrer");
});

renderProducts("burger", "burgerGrid");
renderProducts("fries", "friesGrid");
renderProducts("drink", "drinksGrid");
renderProducts("addon", "addonsGrid");
renderProducts("sauce", "saucesGrid");
renderProducts("side", "sidesGrid");
updateCartUI();
