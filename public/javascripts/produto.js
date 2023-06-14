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

  function categoria_whisky(url) {
    window.location.href = url;
  }

  function categoria_licor(url) {
    window.location.href = url;
  }

  function categoria_gin(url) {
    window.location.href = url;
  }

  function categoria_vodka(url) {
    window.location.href = url;
  }

  function categoria_tequila(url) {
    window.location.href = url;
  }
  function categoria_espumante(url) {
    window.location.href = url;
  }