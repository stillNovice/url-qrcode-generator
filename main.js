document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
      currentWindow: true,    // currently focused window
      active: true            // selected tab
    }, function (foundTabs) {
      if (foundTabs.length > 0) {
        var url = foundTabs[0].url; // <--- this is what you are looking for
        var qrcode = new QRCode(document.getElementById("qrcode"), {
          text: url,
          width: 256,
          height: 256,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        });
      }
    }
  );
});
