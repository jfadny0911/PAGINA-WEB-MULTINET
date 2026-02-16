document.addEventListener("DOMContentLoaded", () => {
    window.onload = () => { document.getElementById('preloader').style.display = 'none'; };

    // --- PARTÍCULAS MIXTAS ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let pts = [];
    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        pts = [];
        for (let i = 0; i < 60; i++) {
            pts.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 2,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: Math.random() > 0.5 ? "#FF4C00" : "#002159",
                opacity: Math.random() * 0.5 + 0.2
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
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
        requestAnimationFrame(animate);
    }
    init(); animate();
    window.onresize = init;

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
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Función para mostrar el banner
    function showBanner() {
        // Solo se muestra si NO existe la marca en el almacenamiento local
        if (!localStorage.getItem('mnet_cookies_accepted')) {
            cookieBanner.classList.add('show');
        }
    }

    // Retraso pequeño para que el usuario ya vea el sitio antes del banner
    setTimeout(showBanner, 1500);

    // Evento al hacer clic en Aceptar
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('mnet_cookies_accepted', 'true');
        cookieBanner.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal-legal');
    const modalBody = document.getElementById('modal-body-text');
    const closeBtn = document.querySelector('.close-modal');

    // Contenido de Políticas de Uso Justo
    const politicasUsoJusto = `
        <div class="legal-text-content">
            <h2>Políticas de Uso Justo - Mnet</h2>
            <p><strong>Vigencia: Octubre 2024</strong></p>
            
            <h3>1. Soporte Técnico y Horarios de Atención</h3>
            <p>Mnet ofrece asistencia técnica a través de sus canales oficiales en los siguientes horarios:</p>
            <ul>
                <li><strong>Lunes a Viernes:</strong> 7:00 AM a 7:00 PM.</li>
                <li><strong>Sábados y Domingos:</strong> 7:00 AM a 5:00 PM.</li>
            </ul>

            <h3>2. Tiempos de Respuesta y Prioridades</h3>
            <p>El tiempo de respuesta estimado tras la creación de un reporte técnico varía según la gravedad del caso:</p>
            <ul>
                <li><span class="priority-tag low">Prioridad Baja:</span> Consultas generales o configuraciones (Hasta 72 horas).</li>
                <li><strong>Prioridad Media:</strong> Intermitencia de señal que afecta parcialmente la navegación (Hasta 48 horas).</li>
                <li><span class="priority-tag critical">Prioridad Crítica:</span> Corte total del servicio o falla masiva de red (24 a 48 horas).</li>
            </ul>

            <h3>3. Uso del Servicio Residencial</h3>
            <p>Los planes desde 60 MEGAS hasta 1 GIGABITE están diseñados para uso doméstico. Queda estrictamente prohibida la reventa total o parcial del ancho de banda a terceros.</p>

            <h3>4. Equipos en Comodato</h3>
            <p>Los dispositivos como ONT y Firesticks adicionales (1, 2 o 4 unidades según contrato) se entregan en calidad de préstamo para el disfrute del servicio. El cliente es responsable por el cuidado físico de los mismos.</p>
        </div>
    `;

    // Contenido de Aviso de Privacidad
    const avisoPrivacidad = `
        <div class="legal-text-content">
            <h2>Aviso de Privacidad</h2>
            <p><strong>Multimedia Network, S.A. DE C.V.</strong></p>
            
            <h3>1. Recolección de Datos</h3>
            <p>Recopilamos información personal necesaria para la prestación del servicio de internet y TV, tales como: nombre completo, dirección de instalación, correo electrónico y número de contacto (ej: 7696-1049).</p>

            <h3>2. Uso de la Información</h3>
            <p>Sus datos se utilizan exclusivamente para:</p>
            <ul>
                <li>Provisión y mantenimiento del servicio técnico.</li>
                <li>Gestión de pagos en línea y facturación.</li>
                <li>Notificaciones sobre mantenimientos o cambios en su plan (ej: Actualizaciones de Octubre 2024).</li>
            </ul>

            <h3>3. Cookies y Navegación</h3>
            <p>Utilizamos cookies para mejorar su experiencia en nuestro portal. Estos datos son anónimos y se utilizan para optimizar el rendimiento de la web.</p>

            <h3>4. Protección de Datos</h3>
            <p>Mnet no comparte ni vende su información personal a terceros. Usted puede solicitar la actualización o cancelación de sus datos a través de nuestros canales de atención al cliente.</p>
        </div>
    `;

    // Lógica para abrir el modal según el enlace clicado
    document.querySelectorAll('.legal-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tipo = link.innerText;
            
            if(tipo.includes("Uso Justo")) {
                modalBody.innerHTML = politicasUsoJusto;
                modal.style.display = 'flex';
            } else if(tipo.includes("Privacidad")) {
                modalBody.innerHTML = avisoPrivacidad;
                modal.style.display = 'flex';
            } else {
                modalBody.innerHTML = "<h2>Contenido en actualización</h2><p>Estamos trabajando para brindarle la información más completa sobre nuestros Términos y Condiciones.</p>";
                modal.style.display = 'flex';
            }
        });
    });

    // Cerrar modal
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
});