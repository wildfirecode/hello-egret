export default () => {

    const initVertexBuffer = (gl: WebGLRenderingContext) => {
        const vertices = new Float32Array([
            0.0, 0.5,
            0.5, -0.5,
            -0.5, -0.5
        ]);
        const vertexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const a_Position = gl.getAttribLocation(gl['program'], 'a_Position');
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        gl.enableVertexAttribArray(a_Position);
    };

    const VSHADER_SOURCE =
        `
        attribute vec4 a_Position;
        void main() {
            gl_Position =  a_Position;
            gl_PointSize = 10.0;
        }
    `;

    const FSHADER_SOURCE =
        `
        void main(){
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `;

    const canvas = document.getElementById('webgl');
    const gl = getWebGLContext(canvas);

    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

    initVertexBuffer(gl);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 3);

}