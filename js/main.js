// links table
var linksTable = document.getElementById('links-table');

// site data
var siteNameInput = document.getElementById('siteNameInput');
var siteURLInput = document.getElementById('siteURLInput');
var siteSubmitBtn = document.getElementById('siteSubmitBtn');
var sitesList = [];

if (localStorage.getItem('sites')) {
    sitesList = JSON.parse(localStorage.getItem('sites'));
    displaySites(sitesList);
}

// add function
function addSite() {
    var siteObj = {
        siteId: Date.now(),
        siteName: siteNameInput.value,
        siteURL: siteURLInput.value,
    }
    console.log(siteObj.siteURL);
    
    sitesList.push(siteObj);
    localStorage.setItem('sites', JSON.stringify(sitesList));
    displaySites(sitesList);
    clearSite();
}

// clear function

function clearSite() {
    siteNameInput.value = null;
    siteURLInput.value = null;
}

// display function
function displaySites(list) {
    var box = ``;
    for (var i = 0; i < list.length; i++) {
        box += `<div class="row">
                        <div class="col-3 text-center">
                            <p>${i + 1}</p>
                        </div>
                        <div class="col-3 text-center">
                            <p>${list[i].siteName}</p>
                        </div>
                        <div class="col-3 text-center">
                            <a href="${list[i].siteURL}" target="_blank">
                                <button class="bg-warning border-0 py-2 px-3 text-white rounded-2"><i class="fa-solid fa-eye"></i>
                                    Visit</button>
                            </a>
                        </div>
                        <div class="col-3 text-center">
                            <button onclick="deleteSite(${list[i].siteId});" class="bg-danger border-0 py-2 px-3 text-white rounded-2"><i
                                    class="fa-solid fa-trash-can"></i>
                                Delete</button>
                        </div>
                    </div>`;
    }
    linksTable.innerHTML = box;
}

// delete function
function deleteSite(id) {

    sitesList = sitesList.filter(function (ele) { return ele.siteId !== id; });

    localStorage.setItem('sites', JSON.stringify(sitesList));

    displaySites(sitesList);
}
