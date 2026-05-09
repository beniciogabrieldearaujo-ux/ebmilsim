// 1. Relógio Militar em Tempo Real (Padrão 24h)
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const horarioMilitar = `${horas}:${minutos}:${segundos}R`; // 'R' para Romeo (fuso local)
    
    const elementoRelogio = document.getElementById('relogio-eb');
    if (elementoRelogio) {
        elementoRelogio.textContent = horarioMilitar;
    }
}

// 2. Sistema de Alistamento (Validação simples)
function verificarAlistamento(event) {
    const horaAtual = new Date().getHours();
    
    // Simula que o alistamento só abre em horários específicos (ex: 08h às 22h)
    if (horaAtual < 8 || horaAtual > 22) {
        alert("ATENÇÃO: O Centro de Recrutamento está fechado no momento. Retorne às 08:00.");
        event.preventDefault(); // Impede de abrir o link do Discord
    } else {
        console.log("Alistamento autorizado. Redirecionando para o Discord...");
    }
}

// Inicia o relógio e atualiza a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();