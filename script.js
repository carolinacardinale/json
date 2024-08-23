// Função para carregar e exibir os dados JSON
function carregarDados() {
    fetch('dados.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Exibir dados no HTML
        document.getElementById('nome').textContent = 'Nome: ' + data.nome;
        document.getElementById('idade').textContent = 'Idade: ' + data.idade;
        document.getElementById('cursos').textContent = 'Cursos: ' + data.cursos.join(', ');
        document.getElementById('endereco').textContent = 'Endereço: ' + data.endereço.rua + ', Número ' + data.endereço.número;
      })
      .catch(error => {
        console.error('Erro ao carregar os dados:', error);
      });
  }
  
  // Chamar a função para carregar os dados quando a página carrega
  window.onload = carregarDados;
  