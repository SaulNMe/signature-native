const content = path => `

    var wrapper = document.getElementById("signature-pad"),
    clearButton = wrapper.querySelector("[data-action=clear]"),
    changeBlack = wrapper.querySelector("[data-action=changeBlack]"),
    changeBlue = wrapper.querySelector("[data-action=changeBlue]"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;
    
    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
    }
    
    window.onresize = resizeCanvas;
    resizeCanvas();

    
    signaturePad = new SignaturePad(canvas);
    
    
    function resetCanvas(penColor) {
        signaturePad.off();
        //window.postMessage("EMPTY");
        //resizeCanvas();
        signaturePad = new SignaturePad(canvas, {penColor});
    }
    clearButton.addEventListener("click", function (event) {
        signaturePad.clear();
        window.postMessage("EMPTY");
    });
    
    changeBlack.addEventListener("click", function (event) {
        window.postMessage("BLACK");
        resetCanvas("#000000");
    });
    
    changeBlue.addEventListener("click", function (event) {
        window.postMessage("BLUE");
        resetCanvas("#007AEA");
    });
    (function(){
        if("${path}" !== 'null'){
            signaturePad.fromDataURL("${path}");
        }
    })();
    (function() {
        window.postMessage = function() {
            //window.ReactNativeWebView.postMessage(signaturePad.toDataURL());
        };
    })();
`;

export default content;