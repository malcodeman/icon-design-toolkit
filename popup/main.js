document.getElementById("get-cookies").addEventListener("click", main);

function getActiveTabUrl() {
  return browser.tabs.query({ currentWindow: true, active: true });
}

function main() {
  getActiveTabUrl().then(tabs => {
    activeTabUrl = tabs[0].url;
  });
}
