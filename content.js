chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // generate the qr code on popup
  mywindow = window.open('', '', 'location=no, toolbar=0, width=550, height=550');

  mywindow.document.body.innerHTML = `
    <body>
      <div id="qrcode" style="margin: 0 auto;"></div>
    </body>
  `;

  var qrcode = new QRCode(mywindow.document.getElementById("qrcode"), {
    text: message.selectedText,
    width: 512,
    height: 512,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
});