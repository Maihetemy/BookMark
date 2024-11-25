

var siteNameInput = document.getElementById('siteNameInput');
var siteURLInput = document.getElementById('siteURLInput');
var siteSubmitBtn = document.getElementById('siteSubmitBtn');
var sitesList  =[];

// localStorage.getItem

function addSite(){
    var siteObj = {
        siteName : siteNameInput.value,
        siteURL : siteURLInput.value,
    }
    sitesList.push(siteObj);
    localStorage.setItem('site', JSON.stringify(sitesList));
    console.log(sitesList);
}
