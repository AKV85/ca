
// Gauname "realtime-input" ir "realtime" elementus
const inputElement = document.getElementById('realtime-input');
const realtimeElement = document.getElementById('realtime');

// Pridėkime event listenerį prie "realtime-input" elemento
inputElement.addEventListener('input', function() {
    // Atnaujinkime "realtime" elemento turinį su "realtime-input" elemento turiniu
    realtimeElement.textContent = inputElement.value;
});