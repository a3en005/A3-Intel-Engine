/* ============================================================================
   A3-ELITE INTELLIGENCE | CORE ENGINE v2.1 (TESTING ENABLED)
   ============================================================================ */

let state = {
    symbol: 'EURUSD',
    bias: 'NEUTRAL',
    volatility: 'LOW',
    signals: [],
    settings: { vibrate: true, audio: true }
};

// ── NEURAL FEEDBACK ──
const triggerFeedback = (type) => {
    if (type === 'SIGNAL') {
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        document.getElementById('snd-alert')?.play();
        console.log("🧪 Test: Haptics & Audio Triggered");
    }
};

// ── THE BRIDGE TESTER ──
window.testNeuralBridge = (testType) => {
    console.group("A3 DIAGNOSTIC: Neural Bridge Test");
    
    if (testType === 'BULLISH') {
        state.bias = 'BULLISH';
        state.volatility = 'HIGH';
        console.log("Setting Spline to: Emerald / Fast Flow");
    } else {
        state.bias = 'BEARISH';
        state.volatility = 'LOW';
        console.log("Setting Spline to: Crimson / Slow Flow");
    }

    // Push to 3D Engine
    if (window.update3DByMarket) {
        window.update3DByMarket({
            bias: state.bias,
            volatility: state.volatility,
            isUnicorn: true
        });
    }

    triggerFeedback('SIGNAL');
    console.groupEnd();
    alert(`NEURAL TEST: ${state.bias} Mode Active. Check 3D Background & Sound.`);
};

// ── KEYBOARD SHORTCUTS ──
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        window.testNeuralBridge('BULLISH');
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        window.testNeuralBridge('BEARISH');
    }
});

// ── CORE INITIALIZATION ──
window.onload = () => {
    console.log("A3-Elite: Diagnostic Mode Ready. [Ctrl+Shift+T] for Bull Test, [Ctrl+Shift+B] for Bear Test.");
    // Rest of your initialization...
};
