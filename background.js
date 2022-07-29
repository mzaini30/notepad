browser.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === browser.runtime.OnInstalledReason.INSTALL) {
    showReadme();
  }
});

browser.browserAction.onClicked.addListener((tab) => {
  showReadme();
});

function showReadme(info, tab) {
  let url = browser.runtime.getURL("https://tools.zenia.my.id/notepad");
  browser.tabs.create({ url });
}