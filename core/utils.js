// base64 转 Blob URL
exports = function base64ToBlobUrl(dataURI) {
  let byteString = window.atob(dataURI.split(",")[1]);
  let mimeString = dataURI.split(",")[0].split(":")[1].split("")[0];
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return window.URL.createObjectURL(new Blob([ab], { type: mimeString }));
};
