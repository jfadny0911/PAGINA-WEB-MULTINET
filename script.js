document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    window.onload = () => { document.getElementById('preloader').style.display = 'none'; };

    // --- PARTÍCULAS HERO ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let pts = [];
    function init() {
        if(!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        pts = [];
        for (let i = 0; i < 50; i++) {
            pts.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                color: Math.random() > 0.5 ? "#FF4C00" : "#002159",
                opacity: 0.3
            });
        }
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
        requestAnimationFrame(animate);
    }
    init(); animate();

    // --- LÓGICA DE DATOS (Lista Octubre 2024) ---
    const planToggle = document.getElementById('plan-toggle');
    const plansContainer = document.getElementById('plans-container');

    const listaPlanes = [
        { nombre: "60 MEGAS", internet: 26.99, dobleplay: 27.99, subida: "25MB" },
        { nombre: "150 MEGAS", internet: 34.99, dobleplay: 36.99, subida: "50MB" },
        { nombre: "200 MEGAS", internet: 41.99, dobleplay: 47.99, subida: "50MB" },
        { nombre: "500 MEGAS", internet: 84.99, dobleplay: 94.99, subida: "100MB" }
    ];

    function renderPlanes(isDobleplay) {
        plansContainer.innerHTML = listaPlanes.map(p => {
            const precio = isDobleplay ? p.dobleplay : p.internet;
            return `
                <div class="plan-card">
                    <p style="color:#FF4C00; font-weight:700; font-size:0.8rem;">SIMÉTRICO</p>
                    <h4>${p.nombre}</h4>
                    <div class="plan-price">$${precio.toFixed(2)}<span>/mes</span></div>
                    <ul style="list-style:none; margin:20px 0; font-size:0.9rem; color:#666; text-align:left; padding-left:10px;">
                        <li>🚀 Subida: ${p.subida}</li>
                        <li>🛡️ Sin Contratos</li>
                        <li>📺 ${isDobleplay ? 'TV Digital Incluida' : 'Internet Solo'}</li>
                    </ul>
                    <a href="https://wa.me/76961049?text=Hola,%20me%20interesa%20el%20plan%20de%20${p.nombre}" 
                       target="_blank" 
                       style="display:block; padding:12px; background:#002159; color:white; text-decoration:none; border-radius:10px; font-weight:700;">
                       Contratar
                    </a>
                </div>
            `;
        }).join('');
    }

    planToggle.addEventListener('change', () => renderPlanes(planToggle.checked));
    renderPlanes(false); // Carga inicial

    // Scroll Reveal
    window.onscroll = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
        });
    };
});