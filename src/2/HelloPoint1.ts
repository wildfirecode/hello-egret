export default () => {

    //Vertex shader program
    const VERTEX_SHADER_SOURCE =
        `
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

    //Fragment shader program
    const FRAGMENT_SHADER_SOURCE =
        `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `;

    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);

    initShaders(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

    gl.clearColor(0.0, 0.0, 0.0, 1);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}