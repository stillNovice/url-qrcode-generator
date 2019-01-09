/* Create a context-menu */
chrome.contextMenus.create({
  id: "something_",   // <-- mandatory with event-pages
  title: "Generate QR Code",
  contexts: ["all"]
});

/* Register a listener for the `onClicked` event */
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (tab) {
    selectedText = info.selectionText;
    if (typeof selectedText == 'undefined' && selectedText.trim() == '') return;
    chrome.tabs.sendMessage(tab.id, {selectedText: selectedText});
  }
});
