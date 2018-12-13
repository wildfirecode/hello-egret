import { getGL } from "../utils";

export default () => {
    const VERTEX_SHADER_SOURCE =
        `
        attribute vec4 a_Position;
        void main () {
            gl_Position = a_Position;
            gl_PointSize = 10.0;
        }
    `;

    const FRAGMENT_SHADER_SOURCE =
        `
        precision mediump float;
        uniform vec4 u_FragColor;
        void main () {
            gl_FragColor = u_FragColor;
        }
    `;

    const gl = getGL();
    initShaders(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE);

    var a_Position = gl.getAttribLocation(gl['program'], 'a_Position');
    gl.vertexAttrib3f(a_Position, 1, 0, 0);

    var u_FragColor = gl.getUniformLocation(gl['program'], 'u_FragColor');
    gl.uniform4f(u_FragColor, 1, 0, 0, 1)

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}