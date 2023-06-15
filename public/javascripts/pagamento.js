function copiarcodigo() {
    var codeElement = document.querySelector('.codigo');
    var code = codeElement.textContent;

    navigator.clipboard.writeText(code)
      .then(function() {
        alert('Código copiado para a área de transferência!');
      })
      .catch(function() {
        alert('Não foi possível copiar o código.');
      });
  }

  