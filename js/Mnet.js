document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SECCIÓN: PÁGINA MNET+ (INSTALACIÓN Y EFECTOS)
       ========================================== */
    
    // Declaración única de variables para evitar errores de redeclaración
    const selectDevice = document.getElementById('selectDevice');
    const deviceStep = document.getElementById('deviceStep');
    const particleContainer = document.getElementById('mnet-particles');
    const tv = document.getElementById('tvElement');

    // 1. Partículas de Fondo
    if (particleContainer) {
        const shapes = ['📺', '▶', '●', 'M+'];
        for (let i = 0; i < 12; i++) {
            const shape = document.createElement('span');
            shape.innerText = shapes[Math.floor(Math.random() * shapes.length)];
            shape.style.position = 'absolute';
            shape.style.color = 'rgba(255, 102, 0, 0.12)';
            shape.style.fontSize = Math.random() * 25 + 15 + 'px';
            shape.style.left = Math.random() * 100 + 'vw';
            shape.style.top = Math.random() * 100 + 'vh';
            shape.animate([
                { transform: 'translateY(0) rotate(0deg)' },
                { transform: `translateY(-100px) rotate(360deg)` }
            ], {
                duration: Math.random() * 10000 + 10000,
                iterations: Infinity,
                direction: 'alternate'
            });
            particleContainer.appendChild(shape);
        }
    }

    // 2. Instrucciones de Instalación Detalladas
    if (selectDevice && deviceStep) {
        const stepsData = {
            android: [
                "<strong>Acceso a la Tienda:</strong> Localiza y abre la aplicación <b>Google Play Store</b> desde el menú principal de tu Smart TV o TV Box.",
                "<strong>Búsqueda y Descarga:</strong> Utiliza el buscador (icono de lupa) para escribir <b>'Mnet+'</b>. Selecciona nuestra app oficial y presiona el botón <b>'Instalar'</b>.",
                "<strong>Configuración Final:</strong> Una vez descargada, abre la app. Introduce el usuario y contraseña que te proporcionamos al contratar tu plan para activar el contenido."
            ],
            roku: [
                "<strong>Roku Channel Store:</strong> Desde la pantalla de inicio de tu dispositivo Roku, navega en el menú lateral hasta encontrar <b>'Canales de Streaming'</b>.",
                "<strong>Añadir Canal:</strong> Ve a <b>'Buscar canales'</b>, ingresa <b>'Mnet+'</b> y presiona OK. En la ficha de la aplicación, selecciona el botón <b>'Añadir canal'</b>.",
                "<strong>Acceso Directo:</strong> Regresa al inicio, abre el canal recién instalado y vincula tu suscripción activa para comenzar a disfrutar de la programación."
            ],
            firestick: [
                "<strong>Menú Encontrar:</strong> En la pantalla principal de tu Amazon Fire Stick, sitúate sobre el icono de la lupa o el menú <b>'Encontrar'</b>.",
                "<strong>App Store:</strong> Escribe <b>'Mnet+'</b> en el buscador. Selecciona la aplicación y haz clic en el icono de <b>'Obtener'</b> o la nube de descarga.",
                "<strong>Vinculación:</strong> Abre la aplicación instalada. Sigue las instrucciones en pantalla para ingresar tus credenciales y vincular tu dispositivo a nuestra red."
            ]
        };

        selectDevice.addEventListener('change', (e) => {
            const val = e.target.value;
            if (stepsData[val]) {
                // Título dinámico según el dispositivo
                let html = `<div style="margin-bottom:20px; color:#ff6600; font-weight:700; font-size:1.1rem; border-bottom:1px solid #333; padding-bottom:10px;">
                                Instrucciones detalladas para ${val.toUpperCase()}
                            </div>`;
                
                stepsData[val].forEach((s, i) => {
                    html += `
                        <div class="step-row" style="display:flex; align-items:flex-start; margin-bottom:18px; gap:15px;">
                            <div class="step-num" style="background:#ff6600; color:white; min-width:30px; height:30px; border-radius:50%; display:flex; justify-content:center; align-items:center; font-weight:bold; flex-shrink:0;">
                                ${i+1}
                            </div>
                            <p style="margin:0; color:#cccccc; line-height:1.5; font-size:0.95rem;">${s}</p>
                        </div>`;
                });
                deviceStep.innerHTML = html;
            }
        });
    }

    // 3. Efecto 3D TV
    if (tv) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            tv.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });
    }
});