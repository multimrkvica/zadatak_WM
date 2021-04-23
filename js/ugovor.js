/// html elementi u varijablama
var dropdown = document.querySelector('div.box_list');

// get json 
var requestURL = "http://www.mocky.io/v2/5ed511c53300005f00f7a790";
var request = new XMLHttpRequest();
var contract;
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    contract = request.response;
    //povezujem funkcije da hvataju response
    populateDropdown(contract);
}
///DROPDOWN
function populateDropdown(jsonObj) {
    let mySelect = document.createElement('div') //pravi element u html-u
    mySelect.classList.add('first_drop')//dodaje klasu

    //vadim niz
    let obj_string = JSON.stringify(contract.contract_length.preselected_contract_length);
    // parsiranje
    let obj_pars = JSON.parse(obj_string);

    mySelect.textContent = obj_pars;
    dropdown.appendChild(mySelect);
    console.log(dropdown)
}

