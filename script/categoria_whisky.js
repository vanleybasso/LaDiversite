function diminuir(event) {
    var inputElement = event.target.nextElementSibling;
    if (parseInt(inputElement.value) > 1) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  }

  function aumentar(event) {
    var inputElement = event.target.previousElementSibling;
    inputElement.value = parseInt(inputElement.value) + 1;
  }

  function redirectToProductPage(url) {
    window.location.href = url;
  }
  
  function pagina_inicial(pageUrl) {
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