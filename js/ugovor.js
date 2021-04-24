 // mySelect.textContent = jsonObj['promo_text']; //json objekt ovo radi vadi sta treba kad vadim samo objkat u suprotnom moram da pretvorim u string i parsiram kao u primeru sa obj_pars.



/// html elementi u varijablama
var dropdown = document.querySelector('div.box_list');
var box_1 = document.querySelector('div.cont_sec_1');
var box_2 = document.querySelector('div.cont_sec_2');
var box_3 = document.querySelector('div.cont_sec_3');

// get json 
var requestURL = "http://www.mocky.io/v2/5ed511c53300005f00f7a790";

var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

var contract;

request.onload = function () {
    contract = request.response;

    //povezujem funkcije da hvataju response
    populateDropdown(contract); 
    populatebox_1(contract);
   

}
///DROPDOWN
function populateDropdown() {

    let mySelect = document.createElement('select') //pravi element u html-u
    mySelect.classList.add('drop_wrep')//dodaje klasu

    //vadim niz
    let constact_list_string = JSON.stringify(contract.contract_length.contract_length_options);
    // parsiranje
    let constact_list_pars = JSON.parse(constact_list_string);

    let constact_list = constact_list_pars.reverse();

     for ( var i = 0; i < constact_list.length; i++){
        let myOption = document.createElement('option');
        myOption.classList.add('option_drop');
        let txt = document.createTextNode(constact_list[i]);
        mySelect.appendChild(myOption);
        myOption.appendChild(txt);
        myOption.setAttribute ("value", constact_list[i])
        console.log(txt);
     }
    dropdown.appendChild(mySelect);

    console.log(dropdown);
    console.log(constact_list);
}