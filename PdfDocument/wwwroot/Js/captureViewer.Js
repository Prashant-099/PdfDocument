window.initializeCaptureViewer = (dotNetObjectReference) => {
    console.log("initializeCaptureViewer called!");
    console.log("DotNetObjectReference:", dotNetObjectReference);
    // dotNetObjectReference.invokeMethodAsync('SavePdfFromBlob', base64ImageString);
};

window.displayAlert = (message) => {
    alert(message);
};
