

var siteNameInput = document.getElementById('siteNameInput');
var siteURLInput = document.getElementById('siteURLInput');
var siteSubmitBtn = document.getElementById('siteSubmitBtn');
var sitesList  =[];

sitesList = JSON.parse(localStorage.getItem('site'));
// localStorage.getItem

// add function
function addSite(){
    var siteObj = {
        siteName : siteNameInput.value,
        siteURL : siteURLInput.value,
    }
    sitesList.push(siteObj);
    localStorage.setItem('site', JSON.stringify(sitesList));
    console.log(sitesList);
    clearSite();
}

// clear function

function clearSite(){
    siteNameInput.value = null;
    siteURLInput.value = null;
}
