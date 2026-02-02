const CHANNEL_NAME = 'metamorfose_v1';
const channel = new BroadcastChannel(CHANNEL_NAME);

// ESTADO GLOBAL PADRÃO
const defaultState = {
    players: [
        { id: 1, name: "COBAIA 01", status: "alive", sickness: 1, points: 0 },
        { id: 2, name: "COBAIA 02", status: "alive", sickness: 1, points: 0 },
        { id: 3, name: "COBAIA 03", status: "alive", sickness: 1, points: 0 },
        { id: 4, name: "COBAIA 04", status: "alive", sickness: 1, points: 0 },
        { id: 5, name: "COBAIA 05", status: "alive", sickness: 1, points: 0 },
        { id: 6, name: "COBAIA 06", status: "alive", sickness: 1, points: 0 }
    ],
    ezequiel_keys: [false, false, false], // Cenas 2, 3, 4
    current_scene: 'scenes/sala1_reator.html',
    helper_visible: false
};

// Carrega estado ou usa padrão
let globalState = JSON.parse(localStorage.getItem('meta_state')) || defaultState;

// --- FUNÇÕES DE SINCRONIA ---

function saveState() {
    localStorage.setItem('meta_state', JSON.stringify(globalState));
    channel.postMessage({ type: 'SYNC_STATE', payload: globalState });
}

function sendNavigation(url) {
    globalState.current_scene = url;
    saveState();
    channel.postMessage({ type: 'NAVIGATE', url: url });
}

function toggleHelper() {
    // Manda sinal para a cena atual abrir/fechar o helper
    channel.postMessage({ type: 'TOGGLE_HELPER' });
}

// --- ESCUTA (Todos os arquivos importarão isso) ---
channel.onmessage = (e) => {
    if (e.data.type === 'SYNC_STATE') {
        globalState = e.data.payload;
        if(window.updateLocalUI) window.updateLocalUI(); // Atualiza UI se a página tiver essa função
    }
    if (e.data.type === 'NAVIGATE' && window.isPlayerView) {
        // Se for a tela do jogador, muda o iframe
        const frame = document.getElementById('scene-frame');
        if(frame) frame.src = e.data.url;
    }
};

// --- HELPERS VISUAIS ---
function renderPlayerName(player) {
    if (player.status === 'dead') {
        return `<span style="color:#555; text-decoration:line-through;">${player.name} [M]</span>`;
    }
    return `<span style="color:var(--tech-primary);">${player.name}</span>`;
}