let color = '#3aa757';

chrome.runtime.onInstalled.addListener((reason) => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "onboarding.html"
    });
  }

  chrome.tabs.onActivated.addListener(
    tab => {
        chrome.tabs.get(tab.tabId, current_tab_info => {
  
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["./foreground.js"],
          });
  
          chrome.scripting.insertCSS(
            {
              target: { tabId: tab.id },
              files: ["./foreground.css"],
          });
  
        })
    }
  );

});


