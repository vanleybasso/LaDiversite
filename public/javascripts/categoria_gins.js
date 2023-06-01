function diminuir() {
    var quantityInput = document.querySelector('.quantidade input');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

  function aumentar(event) {
    var inputElement = event.target.previousElementSibling;
    inputElement.value = parseInt(inputElement.value) + 1;
  }

  function pagina_inicial(pageUrl) {
    window.location.href = pageUrl;
  }

  function categoria_whisky(pageUrl) {
    window.location.href = pageUrl;
  }
  
  function categoria_licor(pageUrl) {
    window.location.href = pageUrl;
  }

  function categoria_gin(pageUrl) {
    window.location.href = pageUrl;
  }

  function categoria_vodka(pageUrl) {
    window.location.href = pageUrl;
  }