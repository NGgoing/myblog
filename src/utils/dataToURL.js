//convert image to base64
function encodeImageFileAsURL(element) {
  return new Promise((resolve, reject) => {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = (e) => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export default encodeImageFileAsURL;
