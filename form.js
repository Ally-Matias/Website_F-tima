function enviarFormulario() {
    // Captura o formulário
    var formulario = document.getElementById('meu-formulario');
  
    // Cria um objeto FormData com os dados do formulário
    var formData = new FormData(formulario);
  
    // Cria uma requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.staticforms.xyz/submit');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    // Define uma função a ser executada quando a requisição for bem sucedida
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Se a requisição for bem sucedida, faça alguma coisa aqui, como mostrar uma mensagem de sucesso
        alert('Obrigado por entrar em contato!');
      } else {
        // Se houver um erro na requisição, faça alguma coisa aqui, como mostrar uma mensagem de erro
        alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
      }
    };
  
    // Define uma função a ser executada se houver um erro na requisição
    xhr.onerror = function() {
      alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
    };
  
    // Envia os dados do formulário
    xhr.send(new URLSearchParams(formData).toString() + '&accessKey=5618e019-62f6-4a8c-a05b-a1f38560fbf9');
  }
  

var formulario = document.getElementById('meu-formulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do evento
  enviarFormulario();
});
