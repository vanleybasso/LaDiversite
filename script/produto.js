function diminuir() {
    var quantityInput = document.querySelector('.quantidade input');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

  function aumentar() {
    var quantityInput = document.querySelector('.quantidade input');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
  }

  function pagina_inicial(pageUrl) {
    window.location.href = pageUrl;
  }

  function pagina_categoria(url) {
    window.location.href = url;
  }