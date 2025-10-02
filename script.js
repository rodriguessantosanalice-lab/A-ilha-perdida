document.addEventListener('DOMContentLoaded', function() {
    // Inicializando variáveis
    const passos = document.querySelectorAll('.passo');
    const buttons = document.querySelectorAll('.btn-proximo');

    // Função para mostrar o passo correto
    function showStep(stepNumber) {
        passos.forEach((passo, index) => {
            passo.classList.remove('active');
            if (index === stepNumber) {
                passo.classList.add('active');
            }
        });
    }

    // Exibir o primeiro passo
    showStep(0);

    // Adicionar evento aos botões de navegação
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const proximoPasso = parseInt(this.getAttribute('data-proximo'), 10);
            showStep(proximoPasso - 1);
        });
    });
});
