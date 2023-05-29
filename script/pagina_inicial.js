function confirmarIdade() {
    var verification = document.getElementById("verificar_idade");
    verification.style.display = "none";
  }

  function Error() {
    alert("Você precisa ter mais de 18 anos para acessar este site.");
  }

  
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
  
  function pagina_categoria(url) {
    window.location.href = url;
  }
  