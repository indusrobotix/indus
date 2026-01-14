fetch('data/products.json')
.then(res => res.json())
.then(data => {
  const list = document.getElementById('product-list');
  data.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <strong>${p.price}</strong>
      </div>`;
  });
});
