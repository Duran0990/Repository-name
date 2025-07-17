
function filterCategory(category) {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
}

function renderProducts(items) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    items.forEach(p => {
        const el = document.createElement("div");
        el.className = "product";
        el.innerHTML = `<h3>${p.name}</h3><p>Ціна: ${p.price} грн</p>`;
        container.appendChild(el);
    });
}

window.onload = () => renderProducts(products);
