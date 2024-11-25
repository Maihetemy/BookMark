// links table
var linksTable = document.getElementById('links-table');

// site data
var siteNameInput = document.getElementById('siteNameInput');
var siteURLInput = document.getElementById('siteURLInput');
var siteSubmitBtn = document.getElementById('siteSubmitBtn');
var sitesList = [];

if( JSON.parse(localStorage.getItem('sites')) ){
    sitesList = JSON.parse(localStorage.getItem('sites'));
    displaySites();
}

// add function
function addSite(){
    var siteObj = {
        siteId : Date.now,
        siteName : siteNameInput.value,
        siteURL : siteURLInput.value,
    }
    sitesList.push(siteObj);
    localStorage.setItem('sites', JSON.stringify(sitesList));
    console.log(sitesList);
    displaySites();
    clearSite();
}

// clear function

function clearSite(){
    siteNameInput.value = null;
    siteURLInput.value = null;
}

// display function
function displaySites(){
    console.log(sitesList.length);
    var box = ``;
    for(var i = 0; i<sitesList.length; i++){        
        box += `<div class="col-3 text-center">
                    <p>${i+1}</p>
                </div>
                <div class="col-3 text-center">
                    <p>${sitesList[i].siteName}</p>
                </div>
                <div class="col-3 text-center">
                    <a href="${sitesList[i].siteURL}" target="_blank">
                        <button class="bg-warning border-0 py-2 px-3 text-white rounded-2"><i class="fa-solid fa-eye"></i>
                            Visit</button>
                    </a>
                </div>
                <div class="col-3 text-center">
                    <button class="bg-danger border-0 py-2 px-3 text-white rounded-2"><i
                            class="fa-solid fa-trash-can"></i>
                        Delete</button>
                </div>`;
    }
    console.log(box);
    linksTable.innerHTML = box;
}