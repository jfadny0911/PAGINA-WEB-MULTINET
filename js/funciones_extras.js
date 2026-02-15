document.addEventListener("DOMContentLoaded", () => {
    // --- 1. CALCULADORA RESIDENCIAL ---
    const resRange = document.getElementById('resRange');
    const resText = document.getElementById('resResult');
    if (resRange) {
        resRange.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val < 5) resText.innerHTML = "Plan Sugerido: <b>120MB (Básico)</b>";
            else if (val < 12) resText.innerHTML = "Plan Sugerido: <b>180MB (Popular)</b>";
            else resText.innerHTML = "Plan Sugerido: <b>300MB (Gamer)</b>";
        });
    }

    // --- 2. CALCULADORA AHORRO (DOBLEPLAY) ---
    const btnCalc = document.getElementById('btnCalcDoble');
    if (btnCalc) {
        btnCalc.addEventListener('click', () => {
            const pagoActual = document.getElementById('inputPago').value || 60;
            const ahorro = (pagoActual - 39) * 12;
            document.getElementById('ahorroResultado').innerHTML = `Ahorras <b>$${ahorro.toFixed(2)}</b> al año con Mnet`;
        });
    }

    // --- 3. MONITOR DE LATENCIA (DEDICADO) ---
    const ctxDedicado = document.getElementById('pingChart');
    if (ctxDedicado) {
        setInterval(() => {
            const ping = (Math.random() * (1.5 - 0.5) + 0.5).toFixed(2);
            document.getElementById('pingDisplay').innerText = ping + " ms";
        }, 1000);
    }

    // --- 4. COMPATIBILIDAD MNET+ ---
    const selectDevice = document.getElementById('selectDevice');
    const deviceStep = document.getElementById('deviceStep');
    if (selectDevice) {
        selectDevice.addEventListener('change', (e) => {
            const steps = {
                samsung: "1. Ve a Smart Hub. 2. Busca 'Mnet+'. 3. Instalar.",
                lg: "1. Entra a LG Content Store. 2. Busca 'Mnet+'. 3. Instalar.",
                roku: "1. Ve a Canales de Streaming. 2. Busca 'Mnet+'. 3. Añadir canal."
            };
            deviceStep.innerText = steps[e.target.value] || "Selecciona un dispositivo para ver los pasos.";
        });
    }
});