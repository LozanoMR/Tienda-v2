// Modal control
function showModal(productName) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-product-name').textContent = productName;
  modal.style.display = 'block';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
function showModal(productName) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-product-name').textContent = productName;
  modal.style.display = 'block';

  // Guardar el nombre del producto para el mensaje de WhatsApp
  document.getElementById('whatsapp-button').setAttribute('data-product', productName);
}

function sendWhatsApp() {
  // Obtener el nombre del producto del botón
  const productName = document.getElementById('whatsapp-button').getAttribute('data-product');
  
  // Número de teléfono y mensaje
  const phoneNumber = '3234667643';
  const message = `Hola, estoy interesado en comprar el producto: ${productName}.`;

  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Abrir WhatsApp
  window.open(whatsappUrl, '_blank');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

