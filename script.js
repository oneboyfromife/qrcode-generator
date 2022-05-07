const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // If the input is empty then return from here
  generateBtn.innerText = "Generating QR code...";
  //getting a QR code of user entered value using qrserver api and passing the api as the qrImg src
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}";
  qrImg.addEventListener("load", () => {
    //once QR code img is loaded
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR code";
  });
  console.log(qrValue);
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
