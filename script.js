// 1. Navegação por Abas
function switchTab(viewId, navElement) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    navElement.classList.add('active');
}

// 2. Lógica de "Participação/Apoio" (Reframing positivo)
let supported = false;

function handleEndorse() {
    const btn = document.getElementById('btn-endorse');
    const counter = document.getElementById('support-count');
    const bar = document.getElementById('progress-bar');
    const toast = document.getElementById('toast');

    if (!supported) {
        // Mudança visual para estado ativo
        btn.innerHTML = `
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Você está participando!
        `;
        btn.classList.add('supported');

        // Atualização de métrica social
        counter.innerHTML = "<strong>86</strong> interessados"; // +1
        bar.style.width = "86%"; 

        // Feedback de sucesso
        toast.querySelector('span').innerText = "Que legal! Você uniu forças.";
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 3000);

        supported = true;
    } else {
        // Reverter (caso o aluno mude de ideia)
        btn.innerHTML = `
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Quero Participar!
        `;
        btn.classList.remove('supported');
        counter.innerHTML = "<strong>85</strong> interessados";
        bar.style.width = "85%";
        supported = false;
    }
}