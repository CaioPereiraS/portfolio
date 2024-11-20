document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique no elemento do email
    document.getElementById("email").addEventListener("click", function() {
      // O email a ser copiado
      const email = "dev.caiopereira@gmail.com";
  
      // Copiar o email para a área de transferência
      navigator.clipboard.writeText(email).then(function() {
        // Exibe o toast
        const toast = document.getElementById("toast");
        toast.classList.add("show");
  
        // Remove o toast após 3 segundos
        setTimeout(function() {
          toast.classList.remove("show");
        }, 3000);
      }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
      });
    });
  });
  