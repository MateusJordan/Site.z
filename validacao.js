document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  const erro = document.getElementById("erro");

  form.addEventListener("submit", function (event) {
    erro.textContent = ""; // Limpa mensagens anteriores

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
      erro.textContent = "O campo nome é obrigatório.";
      event.preventDefault();
      return;
    }

    if (!validarEmail(email)) {
      erro.textContent = "Por favor, informe um e-mail válido.";
      event.preventDefault();
      return;
    }

    if (mensagem.length < 10) {
      erro.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
      event.preventDefault();
      return;
    }
  });

  function validarEmail(email) {
    // Expressão regular simples para validar email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
