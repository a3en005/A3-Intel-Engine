import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

async function init3D() {
    try {
        await spline.load('https://my.spline.design/claritystream-6LdqidgyFvZ0II5Fnl1ZblWF/');
        document.getElementById('a3-loader-new').style.opacity = '0';
        setTimeout(() => document.getElementById('a3-loader-new').remove(), 1000);
    } catch (e) {
        console.error("Spline Load Error:", e);
    }
}

window.update3DByMarket = (data) => {
    if (!spline) {
        console.error("Test Failed: Spline not initialized.");
        return;
    }

    console.log("3D Engine Received:", data);

    const envColor = data.bias === 'BULLISH' ? '#00F5A0' : '#FF3C5A';
    const flowSpeed = data.volatility === 'HIGH' ? 3.0 : 0.5;

    try {
        // These variable names must match your Spline file setup
        spline.setVariable('Color_Bias', envColor);
        spline.setVariable('Particle_Speed', flowSpeed);
        
        if (data.isUnicorn) {
            spline.emitEvent('onStart', 'Neural_Core');
        }
    } catch (err) {
        console.warn("Spline Variable Mapping Note:", err.message);
    }
};

init3D();
