// Initialize variables for the form that submits username
var myAlert = document.getElementById("myAlert");
var userForm = document.getElementById("userForm");
var userName = document.getElementById("userName");

// When the form is submitted send request then set results to storage
userForm.addEventListener("submit", async event => {

  event.preventDefault();

  try {

    let msg;

    if (userName.value.length === 0) {
      msg = "Please fill out the field.";

      myAlert.classList.add("alert-danger");
      myAlert.classList.remove("dp-none");
      myAlert.innerText = msg;
      return;
    };

    msg = "Sending request. Please wait...";

    myAlert.classList.remove("alert-danger");
    myAlert.classList.add("alert-warning");
    myAlert.classList.remove("dp-none");
    myAlert.innerText = msg;

    
    const results = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json"
      }
    })

    const resultJson = await results.json();

    if (!resultJson.hasOwnProperty("title")) {
      msg = `User '${userName.value}' not found.`;

      myAlert.classList.remove("alert-warning");
      myAlert.classList.add("alert-danger");
      myAlert.classList.remove("dp-none");
      myAlert.innerText = msg;

      return;
    }

    msg = "Succeess! Loading details on your page.";

    myAlert.classList.remove("alert-warning");
    myAlert.classList.remove("alert-danger");
    myAlert.classList.add("alert-success");
    myAlert.classList.remove("dp-none");
    myAlert.innerText = msg;

    const userResults = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    });

    const userJson = await userResults.json();

    chrome.storage.sync.set({ "result": userJson });

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.insertCSS(
      {
        target: { tabId: tab.id },
        files: ["./css/foreground.css"],
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./js/foreground.js"],
    });

    myAlert.classList.remove("alert-warning");
    myAlert.classList.remove("alert-success");
    myAlert.classList.remove("alert-danger");
    myAlert.classList.add("dp-none");
    myAlert.innerText = "";
    userForm.reset();
    msg = ""

    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     files: ["./js/foreground.js"],
    //     function: setRequestResponse,
    // });

    return;

  } catch (error) {
    console.log(error);
    let message = "The user was not found";

    chrome.storage.sync.set({ color: "green", message });
  }

});

// // The body of this function will be executed as a content script inside the
// // current page
// function setRequestResponse() {
//   chrome.storage.sync.get("result", ({ result }) => {
//     console.log(JSON.stringify(result));
//   });
// };
