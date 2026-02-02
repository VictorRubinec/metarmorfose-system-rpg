# Metamorphose RPA-RPG System

Este projeto é um ecossistema de automação e interface desenvolvido para gerenciar sessões de RPG de mesa, especificamente para a One Shot **"Protocolo Metamorfose"** no sistema **Ordem Paranormal** feita por mim. 

O sistema foi concebido para centralizar o controle narrativo, monitoramento de jogadores (Health/Status) e automação de áudio/vídeo local, mitigando problemas de conexão e restrições de APIs externas.

## 🚀 Tecnologias e IA
O desenvolvimento deste projeto contou com o auxílio de inteligência artificial generativa para a arquitetura de código e design de UI, focando em uma experiência de usuário imersiva (Cyberpunk/Horror).

* **Frontend:** HTML5, CSS3 (Custom Variables/Animations), JavaScript (BroadcastChannel API).
* **Backend Automations:** Python com `yt-dlp` para gestão de ativos de mídia.
* **Persistence:** LocalStorage para sincronização de estado entre abas (Admin/Player).

## 🛠️ Estrutura do Projeto

* `capa.html`: Landing page cinematográfica para introdução.
* `index.html`: Dashboard de monitoramento em tempo real para os jogadores.
* `admin.html`: Painel de controle do Mestre (Game Master) com triggers de status e navegação.
* `soundboard.html`: Rack de áudio quad-channel com suporte a mídias locais e navegação por minutagem.

## 📖 Como Usar

### 1. Preparação da Mídia
O sistema de áudio funciona a partir de arquivos locais, ele não faz pesquisa, então é necessário que as músicas desejadas estejam na pasta `assets/video/`.
1. 

### 2. Execução da Sessão
1. Abra o arquivo `admin.html` em seu navegador principal.
2. Abra `capa.html` ou `index.html` na tela secundária (TV/Monitor dos players).
3. Utilize o **Soundboard** (aberto via Admin) para gerenciar o clima sonoro.
4. Altere status e cenas através do Painel de Monitoramento; as telas dos jogadores serão atualizadas automaticamente via BroadcastChannel.

## 🖋️ Autor
Desenvolvido por **Victor Zanin Rubinec** .