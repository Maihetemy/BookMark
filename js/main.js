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
    if (validation(siteNameInput) && validation(siteURLInput)) {
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

    else if (validation(siteNameInput) === false && validation(siteURLInput)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The site name is incorrect!",
            footer: "The site name must be at least 3 characters long, and the first character must be uppercase."
        });
    }

    else if (validation(siteNameInput) && validation(siteURLInput) === false) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The site URL is incorrect!",
            footer: "Please provide a valid site URL."
        });
    }
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

// validation
function validation(site) {

    var regex = {
        siteNameInput: /^[A-Z][a-z]{2,9}$/,
        siteURLInput: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
    }
    if (regex[site.id].test(site.value)) {
        site.nextElementSibling.classList.replace('d-block', 'd-none');
        site.classList.add('is-valid');
        site.classList.remove('is-invalid');
        return true;
    }
    else {
        site.nextElementSibling.classList.replace('d-none', 'd-block');
        site.classList.add('is-invalid');
        site.classList.remove('is-valid');
        return false;
    }
}


