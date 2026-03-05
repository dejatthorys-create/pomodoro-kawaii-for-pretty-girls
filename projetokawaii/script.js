// 1. Elementos do HTML e Configurações (Escopo Global)
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const cycleDisplay = document.getElementById('cycle-count');
const clearBtn = document.getElementById('clear-cycles');
const noteInput = document.getElementById('note-input');
// O navegador não vai mais bloquear porque agora ele lê da SUA pasta! 📂
const finishSound = new Audio('finish.mp3');
const clickSound = new Audio('click.mp3');
const typeSound = new Audio('type.mp3');

// Garantir que o volume esteja audível
finishSound.volume = 1.0;
clickSound.volume = 0.8;
typeSound.volume = 0.3;
// Som ao digitar no bloquinho de notas
if (noteInput) {
    noteInput.addEventListener('input', () => {
        typeSound.currentTime = 0; // Reinicia o som
        typeSound.play();

        // 🌸 Lógica para encurtar o som:
        // 200ms é um tempo excelente para um "clique" de tecla rápido
        setTimeout(() => {
            typeSound.pause();
            typeSound.currentTime = 0;
        }, 200); 
    });
}

// Adicione isso para testar se o som carrega:
clickSound.oncanplaythrough = () => console.log("Som de clique carregado com sucesso! 🎀");
clickSound.onerror = () => console.error("Erro ao carregar o som de clique. Verifique o nome do arquivo.");

// 2. Variáveis de Estado
let cycles = localStorage.getItem('pomodoroCycles') || 0;
let timeLeft = 25 * 60; 
let timerId = null; 

// 3. Inicialização da Tela
cycleDisplay.textContent = cycles;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 4. Funções do Timer
function startTimer() {
    if (timerId !== null) return; 
    
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            
            // Toca o som de finalização
            finishSound.play(); 
            
            cycles++; 
            cycleDisplay.textContent = cycles; 
            localStorage.setItem('pomodoroCycles', cycles); 
            
            alert("Tempo esgotado, diva! Você completou mais um ciclo de foco! ✨🍭");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

// 5. Escutadores de Eventos (Ações)

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Som ao clicar em qualquer botão com a classe 'btn'
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Reinicia o áudio para permitir cliques rápidos sucessivos
        clickSound.currentTime = 0; 
        clickSound.play();
    });
});

// Som ao digitar no bloquinho de notas
if (noteInput) {
    noteInput.addEventListener('input', () => {
        // Reinicia o áudio para cada letra digitada
        typeSound.currentTime = 0; 
        typeSound.play();
    });
}

// Limpar ciclos
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if(confirm("Deseja zerar seus ciclos de hoje, diva? ✨")) {
            cycles = 0;
            localStorage.setItem('pomodoroCycles', 0);
            cycleDisplay.textContent = 0;
        }
    });
}
// Função para os botões de atalho (15, 25, 50)
function setTime(minutes) {
    pauseTimer(); // Para o timer atual
    timeLeft = minutes * 60; // Define o novo tempo
    updateDisplay(); // Atualiza a tela
    clickSound.play(); // Toca o som de clique que você já tem
}

// Lógica para o tempo personalizado digitado
const customInput = document.getElementById('custom-min');
const setCustomBtn = document.getElementById('set-custom');

setCustomBtn.addEventListener('click', () => {
    const val = parseInt(customInput.value);
    if (val > 0 && val <= 120) { // Limite de 2 horas para não quebrar o layout
        setTime(val);
        customInput.value = ''; // Limpa o campo
    } else {
        alert("Diva, escolha um tempo entre 1 e 120 minutos! ✨");
    }
});
// Inicializar display ao carregar
updateDisplay();