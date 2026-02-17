const mehsulContainer = document.querySelector(".mehsul");

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
data.products.forEach((mehsul) => {
    const card = document.createElement("div");
    card.classList.add("mehsul-card");

    card.innerHTML = `
        <img src = "${mehsul.thumbnail}" alt = "${mehsul.title}">

        <h3 class = "mehsul-title">${mehsul.title}</h3>

        <p class="mehsul-desc">${mehsul.description}</p>

        <p class="mehsul-price">💰 ${mehsul.price} $</p>

        <p class="mehsul-rating">⭐️ Rating: ${mehsul.rating}</p>

        <p class="mehsul-stock">📦 Stock: ${mehsul.stock}</p>

        <p class="mehsul-discount">🔥 Discount: ${mehsul.discountPercentage}%</p>
`;
    mehsulContainer.appendChild(card);
});
})

.catch((error) => {
console.error("Xəta baş verdi:", error);
mehsulContainer.innerHTML = "<p>Məhsullar yüklənərkən xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.</p>";
});

