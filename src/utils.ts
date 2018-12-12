export  const getGL = ()=>{
    var canvas = document.getElementById('webgl');
    return getWebGLContext(canvas);
}