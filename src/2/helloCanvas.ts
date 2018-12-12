export default () => {
    const canvas = document.getElementById('webgl');
    console.log(canvas)
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // Set clear color
    gl.clearColor(0.0, 0.0, 0.0, 1);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
}