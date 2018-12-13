import { getGL } from "../utils";

const initVertexBuffers = (gl: WebGLRenderingContext) => {
    const vertices = new Float32Array(
        [
            0, 0.5,
            -0.5, -0.5,
            0.5, -0.5
        ]
    );

    const vertexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const a_Position = gl.getAttribLocation(gl['program'], 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return 3;

}

export default () => {
    const VSHADER_SOURCE =
        `
        attribute vec4 a_Position;
        void main (){
            gl_Position = a_Position;
        }
    `;

    const FSHADER_SOURCE =
        `
        void main(){
            gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }
    `;

    const gl = getGL();
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

    const n = initVertexBuffers(gl);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, n)
}