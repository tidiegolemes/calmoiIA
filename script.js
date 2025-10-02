document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const ctaButton = document.querySelector('.cta-button');

    // Função para adicionar uma mensagem à tela
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        // Rola para a mensagem mais recente
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Função que simula o envio de mensagem e a resposta do agente
    function sendMessage() {
        const text = userInput.value.trim();
        if (text === "") return;

        addMessage(text, 'user');
        userInput.value = ''; // Limpa o campo de entrada

        // ----------------------------------------------------------------
        // AQUI ESTARIA O CÓDIGO REAL DE CONEXÃO COM A API DO DIALOGFLOW
        // Por enquanto, é uma RESPOSTA SIMULADA de TCC:
        // ----------------------------------------------------------------
        
        let botResponse = 'Obrigado por compartilhar! Para darmos continuidade à nossa sessão de TCC, qual é o fato ou a evidência que sustenta esse pensamento?';
        
        // Simulação de resposta mais acolhedora e com base no input
        const lowerCaseText = text.toLowerCase();

        if (lowerCaseText.includes('olá') || lowerCaseText.includes('oi') || lowerCaseText.includes('tudo bem')) {
            botResponse = 'Olá! Que bom te ver. Como está seu humor hoje, de 1 (muito mal) a 5 (muito bem)?';
        } else if (lowerCaseText.includes('ansiedade') || lowerCaseText.includes('pânico')) {
            botResponse = 'Sinto muito que você esteja assim. Vamos usar a técnica 5-4-3-2-1 para ancorar. Diga 5 coisas que você consegue VER agora:';
        } else if (lowerCaseText.includes('bem') || lowerCaseText.includes('feliz') || lowerCaseText.includes('5')) {
            botResponse = 'Que ótimo! Fico muito feliz! Vamos registrar essa sensação positiva para reforçar seu progresso.';
        } else if (lowerCaseText.includes('triste') || lowerCaseText.includes('mal') || lowerCaseText.includes('1') || lowerCaseText.includes('2')) {
            botResponse = 'Entendo que esteja sendo um dia difícil. É válido sentir isso. Quer conversar sobre o que mais está sentindo ou prefere um exercício de respiração rápida?';
        } else if (lowerCaseText.includes('tcc') || lowerCaseText.includes('pensamentos ruins')) {
            botResponse = 'Perfeito! Vamos começar. Qual é o pensamento negativo ou a crença que está te incomodando agora?';
        }


        setTimeout(() => {
            addMessage(botResponse, 'bot');
        }, 800); // Simula um pequeno tempo de processamento
    }

    sendButton.addEventListener('click', sendMessage);

    // Permite enviar mensagem pressionando Enter
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Smooth scrolling para o botão "Comece Agora" no hero
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('chat-widget').scrollIntoView({ behavior: 'smooth' });
    });
});
