// Create Modal Elements
var modal = document.createElement("div");

var modalContent = document.createElement("div");

var modalContentHeader = document.createElement("div");
var modalContentBody = document.createElement("div");
var modalContentFooter = document.createElement("div");

var modalHeaderTitle = document.createElement("h2");
var modalFooterTitle = document.createElement("h2");
var closeBtn = document.createElement("span");

// Attributes
closeBtn.classList.add("close");
modal.classList.add("other-modal");
modalContentBody.classList.add("other-modal-body");
modalContentFooter.classList.add("other-modal-footer");
modalContent.classList.add("other-modal-content");
modalContentHeader.classList.add("other-modal-header");

// Add contents
closeBtn.innerHTML = "&times;";
modalHeaderTitle.innerText = "Patient Details";
modalContentFooter.innerText = "";

modalContentHeader.appendChild(closeBtn);
modalContentHeader.appendChild(modalHeaderTitle);
modalContentFooter.appendChild(modalFooterTitle);

modalContent.appendChild(modalContentHeader);
modalContent.appendChild(modalContentBody);
modalContent.appendChild(modalContentFooter);

modal.appendChild(modalContent);

// Events
closeBtn.addEventListener("click", closeModal);

document.querySelector("body").appendChild(modal);
window.addEventListener("click", outsideClick);

// Tab content
var tab = document.createElement("div");
var icdBtn = document.createElement("button");
var entitesBtn = document.createElement("button");
var matchesBtn = document.createElement("button");

tab.classList.add("other-tab");

icdBtn.id = "defaultOpen";
icdBtn.innerText = "ICD-10-CM";
icdBtn.classList.add("other-tablinks");
icdBtn.addEventListener("click", e => openCity(e, "ICD"));

entitesBtn.innerText = "Entities";
entitesBtn.classList.add("other-tablinks");
entitesBtn.addEventListener("click", e => openCity(e, "Entities"));

matchesBtn.innerText = "Match Cases";
matchesBtn.classList.add("other-tablinks");
matchesBtn.addEventListener("click", e => openCity(e, "Match"));

tab.appendChild(icdBtn);
tab.appendChild(entitesBtn);
tab.appendChild(matchesBtn);

var icdContent = document.createElement("div");
var matchContent = document.createElement("div");
var entitiesContent = document.createElement("div");

icdContent.id = "ICD";
icdContent.classList.add("other-tabcontent");
icdContent.innerHTML = `
    <h3>ICD-10-CM</h3>

    <h4 class="text-danger">coronary artery disease​</h4>

    <h5>Top inferred concepts</h5>
    <div class="list">
        <ul>
            <li>
                <p>
                    <em>I25.10​</em> <br>
                    Atherosclerotic heart disease of native coronary artery without angina pectoris​ <br>
                    <strong class="text-warning">Score: 0.9260</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.119​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris​​ <br>
                    <strong class="text-warning">Score: 0.8527​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.110​​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unstable angina pectoris<br>
                    <strong class="text-warning">Score: 0.8507​​</strong>
                </p>
            </li>
            <!-- <li>
                <p>
                    <em>Z86.79​​​</em> <br>
                    Personal history of other diseases of the circulatory system<br>
                    <strong>Score: 0.8274​​​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.41​​​</em> <br>
                    Coronary artery aneurysm​ <br>
                    <strong>Score: 0.8204​​​</strong>
                </p>
            </li> -->
        </ul>
    </div>
`;

entitiesContent.id = "Entities";
entitiesContent.classList.add("other-tabcontent");
entitiesContent.innerHTML = `
    <h3>Entities</h3>
            
    <h4>atrial fibrillation​</h4>

    <h5 class="text-danger">Top inferred concepts</h5>
    <div class="other-list">
        <ul>
            <li>
                <p>
                    <em>I25.10​</em> <br>
                    Atherosclerotic heart disease of native coronary artery without angina pectoris​ <br>
                    <strong class="text-warning">Score: 0.9260</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.119​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris​​ <br>
                    <strong class="text-warning">Score: 0.8527​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.110​​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unstable angina pectoris<br>
                    <strong class="text-warning">Score: 0.8507​​</strong>
                </p>
            </li>
            <!-- <li>
                <p>
                    <em>Z86.79​​​</em> <br>
                    Personal history of other diseases of the circulatory system<br>
                    <strong>Score: 0.8274​​​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.41​​​</em> <br>
                    Coronary artery aneurysm​ <br>
                    <strong>Score: 0.8204​​​</strong>
                </p>
            </li> -->
        </ul>
    </div>
`;

matchContent.id = "Match";
matchContent.classList.add("other-tabcontent");
matchContent.innerHTML = `
    <h3>Match Cases</h3>
                
    <h4>hyperlipidemia​</h4>

    <h5 class="text-danger">Top inferred concepts</h5>
    <div class="other-list">
        <ul>
            <li>
                <p>
                    <em>I25.10​</em> <br>
                    Atherosclerotic heart disease of native coronary artery without angina pectoris​ <br>
                    <strong class="text-warning">Score: 0.9260</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.119​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris​​ <br>
                    <strong class="text-warning">Score: 0.8527​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.110​​​</em> <br>
                    Atherosclerotic heart disease of native coronary artery with unstable angina pectoris<br>
                    <strong class="text-warning">Score: 0.8507​​</strong>
                </p>
            </li>
            <!-- <li>
                <p>
                    <em>Z86.79​​​</em> <br>
                    Personal history of other diseases of the circulatory system<br>
                    <strong>Score: 0.8274​​​</strong>
                </p>
            </li>
            <li>
                <p>
                    <em>I25.41​​​</em> <br>
                    Coronary artery aneurysm​ <br>
                    <strong>Score: 0.8204​​​</strong>
                </p>
            </li> -->
        </ul>
    </div>
`;

modalContentBody.appendChild(tab);
modalContentBody.appendChild(icdContent);
modalContentBody.appendChild(matchContent);
modalContentBody.appendChild(entitiesContent);

chrome.storage.sync.get("result", ({ result }) => {

    // Incase another instance is open
    closeModal();

    icdBtn.click();

    openModal();
});

// Open
function openModal() {
    modal.style.display = "block";
}
  
// Close
function closeModal() {
    modal.style.display = "none";
}
  
// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("other-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("other-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
