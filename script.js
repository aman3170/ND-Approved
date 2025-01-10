const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
    video.play();

    const barcodeReader = new ZXing.BarcodeReader();
    barcodeReader.decodeOnceFromVideoDevice(null, video)
      .then(result => {
        console.log(result.text);
        alert(`Scanned barcode: ${result.text}`);
      })
      .catch(error => {
        console.error('Error scanning barcode:', error);
      });
  })
  .catch(error => {
    console.error('Camera access denied:', error);
  });
