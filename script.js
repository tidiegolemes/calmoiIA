document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

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
        
        // Simulação de resposta mais acolhedora
        if (text.toLowerCase().includes('ansiedade') || text.toLowerCase().includes('panico')) {
            botResponse = 'Sinto muito que você esteja assim. Vamos usar a técnica 5-4-3-2-1 para ancorar. Diga 5 coisas que você consegue VER agora:';
        } else if (text.toLowerCase().includes('bem') || text.toLowerCase().includes('feliz')) {
            botResponse = 'Que ótimo! Fico muito feliz! Vamos registrar essa sensação positiva para reforçar seu progresso.';
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
});
