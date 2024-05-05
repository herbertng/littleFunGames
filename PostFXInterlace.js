class CRTShader extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    constructor(game) {
        super({
            game: game,
            renderer: game.renderer,
            fragShader: `
precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D uMainSampler;
varying vec2 outTexCoord;

void main() {
    vec4 color = texture2D(uMainSampler, outTexCoord);
    
    // Interlace lines effect
    float lineSpacing = 3.0; // Line spacing
    float lineIntensity = 0.2; // Line intensity
    if (mod(gl_FragCoord.y, lineSpacing) < 1.0) {
        color.rgb -= lineIntensity;
    }
    
    gl_FragColor = color;
}            `
        });
    }
}

