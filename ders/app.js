
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    const products = response.data; 
    displayProducts(products); 
  })
  .catch(error => {
    console.error("Bir hata oluştu: ", error);
  });


function displayProducts(products) {
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px; object-fit: cover;">
      <h3>${product.title}</h3>
      <p>${product.description.substring(0, 100)}...</p>
      <p><strong>${product.price} AZN</strong></p>
    `;

    productCard.addEventListener('click', () => showProductDetails(product));

    productList.appendChild(productCard);
  });
}

function showProductDetails(product) {
  const modal = document.getElementById('product-modal');
  const closeModal = document.getElementById('close-modal');
  
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = `${product.price} USD`;
  modal.style.display = "block";
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
