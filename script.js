document.addEventListener('DOMContentLoaded', () => {
    // Função para smooth scrolling em todos os botões com data-scroll
    document.querySelectorAll('button[data-scroll], a[href^="#"]').forEach(item => {
        item.addEventListener('click', function(e) {
            // Verifica se é um link interno de seção
            const targetId = this.getAttribute('data-scroll') || this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                // O target deve ser um elemento real no DOM
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Alerta de Onboarding para simular o início da jornada terapêutica
    document.querySelectorAll('#iniciar-jornada .cta-button, .plan-card .cta-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Parabéns por iniciar sua jornada! (Simulação: Você seria redirecionado para a página de Onboarding/Cadastro agora.)');
        });
    });
});
