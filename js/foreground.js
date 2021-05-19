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

    <div class="grid-container-4">

        <div class="grid">
            <h4 class="text-danger">coronary artery disease​</h4>
    
            <h5>Top inferred concepts</h5>
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
                    <li>
                        <p>
                            <em>Z86.79​​​</em> <br>
                            Personal history of other diseases of the circulatory system<br>
                            <strong class="text-warning">Score: 0.8274</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I25.41​</em> <br>
                            Coronary artery aneurysm​<br>
                            <strong class="text-warning">Score: 0.8204</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="grid">
            <h4 class="text-danger">atrial fibrillation​​</h4>
    
            <h5>Top inferred concepts</h5>
            <div class="other-list">
                <ul>
                    <li>
                        <p>
                            <em>I48.91​​</em> <br>
                            Unspecified atrial fibrillation​​ <br>
                            <strong class="text-warning">Score: 0.9246</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I48.0​​​</em> <br>
                            Paroxysmal atrial fibrillation​​​ <br>
                            <strong class="text-warning">Score: 0.8910</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I48.2​​​​</em> <br>
                            Chronic atrial fibrillation​<br>
                            <strong class="text-warning">Score: 0.8813</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I48.1​​​​​</em> <br>
                            Persistent atrial fibrillation​<br>
                            <strong class="text-warning">Score: 0.8529</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I48.92​​​​​​</em> <br>
                            Unspecified atrial flutter​​<br>
                            <strong class="text-warning">Score: 0.8246</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="grid">
            <h4 class="text-danger">hyperlipidemia​</h4>
    
            <h5>Top inferred concepts</h5>
            <div class="other-list">
                <ul>
                    <li>
                        <p>
                            <em>E78.5​​</em> <br>
                            Hyperlipidemia, unspecified​ <br>
                            <strong class="text-warning">Score: 0.9294</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>E78.2​​</em> <br>
                            Mixed hyperlipidemia​​​ <br>
                            <strong class="text-warning">Score: 0.8411</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>Z83.438​​​​</em> <br>
                            Family history of other disorder of lipoprotein metabolism and other lipidemia<br>
                            <strong class="text-warning">Score: 0.8287</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>E78.1​​​​​</em> <br>
                            Pure hyperglyceridemia​<br>
                            <strong class="text-warning">Score: 0.8258</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>E78.00​​​​​​</em> <br>
                            Pure hypercholesterolemia, unspecified​<br>
                            <strong class="text-warning">Score: 0.8179</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="grid">
            <h4 class="text-danger">hypertension​​</h4>
    
            <h5>Top inferred concepts</h5>
            <div class="other-list">
                <ul>
                    <li>
                        <p>
                            <em>I10​</em> <br>
                            Essential (primary) hypertension​<br>
                            <strong class="text-warning">Score: 0.8898</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I11.0​​​</em> <br>
                            Hypertensive heart disease with heart failure​​​ <br>
                            <strong class="text-warning">Score: 0.8686</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I11.9​​​</em> <br>
                            Hypertensive heart disease without heart failure<br>
                            <strong class="text-warning">Score: 0.8337</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I13.0​​​</em> <br>
                            Hypertensive heart and chronic kidney disease with heart failure and stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease<br>
                            <strong class="text-warning">Score: 0.8313</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>I12.9​​​​</em> <br>
                            Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease<br>
                            <strong class="text-warning">Score: 0.8286</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
`;

entitiesContent.id = "Entities";
entitiesContent.classList.add("other-tabcontent");
entitiesContent.innerHTML = `
    <h3>Entities</h3>
            
    <div class="grid-container-3">
                    
        <div class="grid">
            <h4 class="text-danger text-uppercase">Medical Condition</h4>

            <div class="other-list">
                <ul>
                    <li>
                        <p>
                            <strong>coronary artery disease​</strong><br>
                            <span>Score: 0.9933</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>atrial fibrillation​​</strong><br>
                            <span>Score: 0.9922</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>hypertension​​​</strong><br>
                            <span>Score: 0.9993</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>hyperlipidemia</strong><br>
                            <span>Score: 0.9999+</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>chills</strong><br>
                            <span>Score: 0.9990</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>nausea</strong><br>
                            <span>Score: 0.9994</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>flank pain</strong><br>
                            <span>Score: 0.7346</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>acute</strong><br>
                            <span>Score: 0.9923</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="grid">
            <h4 class="text-danger text-uppercase">Medication</h4>

        </div>

        <div class="grid">
            <h4 class="text-danger text-uppercase">Anantomy</h4>

            <div class="other-list">
                <ul>
                    <li>
                        <p>
                            <strong>coronary artery</strong><br>
                            <span>Score: 0.9490</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>flank pain</strong><br>
                            <span>Score: 0.8346</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>acute</strong><br>
                            <span>Score: 0.9923</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>left leg</strong><br>
                            <span>Score: 0.9981</span>
                        </p>
                    </li>
                </ul>
            </div>

        </div>

    </div>
`;

matchContent.id = "Match";
matchContent.classList.add("other-tabcontent");
matchContent.innerHTML = `
    <h3>Match Cases</h3>
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
