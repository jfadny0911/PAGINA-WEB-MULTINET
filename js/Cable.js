document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       SECCIÓN: GESTIÓN DE PROGRAMACIÓN (MODAL)
       ========================================== */
    const channelData = {
        nacionales: { 
            titulo: "NACIONALES & NOTICIAS", 
            lista: [
                {n: "02", name: "Canal 2"}, {n: "04", name: "Canal 4"}, 
                {n: "06", name: "Canal 6"}, {n: "10", name: "Canal 10"},
                {n: "12", name: "Canal 12"}, {n: "21", name: "Canal 21"},
                {n: "40", name: "CNN en Español"}, {n: "45", name: "France 24"}
            ] 
        },
        cine: { 
            titulo: "PELÍCULAS & SERIES", 
            lista: [
                {n: "101", name: "HBO Premium"}, {n: "105", name: "Star Channel"},
                {n: "110", name: "TNT Series"}, {n: "115", name: "Warner Channel"},
                {n: "120", name: "Universal TV"}, {n: "125", name: "AMC Entertainment"}
            ] 
        },
        deportes: { 
            titulo: "DEPORTES HD", 
            lista: [
                {n: "03", name: "Liga Española (Exclusivo)"}, {n: "201", name: "ESPN Internacional"}, 
                {n: "202", name: "ESPN 2"}, {n: "205", name: "FOX Sports"}, {n: "210", name: "TUDN"}
            ] 
        },
        niños: { 
            titulo: "CONTENIDO INFANTIL", 
            lista: [
                {n: "301", name: "Disney Channel"}, {n: "305", name: "Nickelodeon"},
                {n: "310", name: "Cartoon Network"}, {n: "315", name: "Discovery Kids"}
            ] 
        },
        musica: { 
            titulo: "MÚSICA & ENTRETENIMIENTO", 
            lista: [
                {n: "401", name: "MTV"}, {n: "405", name: "HTV"}, {n: "410", name: "Telehit"}
            ] 
        }
    };

    const modal = document.getElementById('modal-legal');
    const modalBody = document.getElementById('modal-body-text');

    // Función de visualización de modal con arquitectura de red de canales
    function showModal(genre) {
        if (channelData[genre]) {
            let html = `<h2 style="color:#002159; border-bottom:4px solid #ff6600; padding-bottom:12px; margin-bottom:25px; font-weight:700;">${channelData[genre].titulo}</h2>`;
            html += `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:15px;">`;
            
            channelData[genre].lista.forEach(chan => {
                html += `<div style="background:#f4f7f9; padding:15px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; border: 1px solid #e1e8ed;">
                            <span style="font-weight:600; color:#1a1a1a;"><i class="fas fa-check-circle" style="color:#ff6600; font-size:12px; margin-right:12px;"></i>${chan.name}</span>
                            <b style="color:#002159; font-size:0.95rem;">CANAL ${chan.n}</b>
                         </div>`;
            });
            
            html += `</div>`;
            modalBody.innerHTML = html;
            modal.style.display = 'flex';
        }
    }

    // Eventos de interacción para mosaico
    document.querySelectorAll('.m-item').forEach(item => {
        item.addEventListener('click', () => {
            const genre = item.getAttribute('data-genre');
            showModal(genre);
        });
    });

    // Control de cierre de modal
    document.querySelector('.close-modal')?.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    /* ==========================================
       SECCIÓN: LÓGICA DE ASISTENCIA TÉCNICA (FAQ)
       ========================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Cierre preventivo de otros ítems para mejorar la experiencia de usuario
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
});