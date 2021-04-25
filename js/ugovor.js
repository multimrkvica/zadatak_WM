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
    populatebox_2(contract);
    populatebox_3(contract);

}

///DROPDOWN
function populateDropdown() {

    let mySelect = document.createElement('select') //pravi element u html-u
    mySelect.classList.add('drop_wrep')//dodaje klasu

    //vadim niz sa json stringify
    let constact_list_string = JSON.stringify(contract.contract_length.contract_length_options);
    // parsiram da bih napravila objekat da mogu dalje da radim sa njim
    let constact_list_pars = JSON.parse(constact_list_string);

    let constact_list = constact_list_pars.reverse();

    for (var i = 0; i < constact_list.length; i++) {
        let myOption = document.createElement('option');
        myOption.classList.add('option_drop');
        let txt = document.createTextNode(constact_list[i]);
        mySelect.appendChild(myOption);
        myOption.appendChild(txt);
        myOption.setAttribute("value", constact_list[i])
        console.log(txt);
    }
    dropdown.appendChild(mySelect);

    console.log(dropdown);
    console.log(constact_list);
}
// popunjavam prvi ugovor, pravim elemente, unosim podatke
function populatebox_1(jsonObj) {

    //pravim elemente dinamicki i dajem im klase

    //div sa naslovom
    let box_title = document.createElement('div');
    box_title.classList.add('box_title', 'first_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list');

    let hr = document.createElement('hr');
    hr.classList.add('hr');

    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    // sekcija - slika i tekst
    let sec_3 = document.createElement('div');
    sec_3.classList.add('sec_3');

    let sec_3_img = document.createElement('div');
    sec_3_img.classList.add('sec_3_img');

    let sec_3_txt = document.createElement('div');
    sec_3_txt.classList.add('sec_3_txt');
    //sekcija sa cenama
    let sec_price = document.createElement('div');
    sec_price.classList.add('sec_price');

    let sec_price_old = document.createElement('div');
    sec_price_old.classList.add('sec_price_old');

    let sec_price_new = document.createElement('div');
    sec_price_new.classList.add('sec_price_new');

    let sec_price_fusnote = document.createElement('div');
    sec_price_fusnote.classList.add('sec_price_fusnote');

    // glavno dugme
    let sec_btn = document.createElement('div');
    sec_btn.classList.add('sec_btn');

    let btn = document.createElement('button');
    btn.classList.add('btn');

    // json stringify - ovde vadim niz

    let obj_string = JSON.stringify(contract.items[0].name);

    // json paarse - ovde pretvaram u obj

    let obj_pars = JSON.parse(obj_string);
    box_title.textContent = obj_pars;

    // ubacujem elemente i pravim strukturu

    box_1.appendChild(box_title);
    box_1.appendChild(sec_1);
    box_1.appendChild(sec_2);
    box_1.appendChild(sec_3);
    box_1.appendChild(sec_price);
    box_1.appendChild(sec_btn);

    box_title.appendChild(hr);

    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);

    console.log(box_1);
}

// popunjavam drugi ugovor, pravim elemente, unosim podatke

function populatebox_2(jsonObj) {

    //pravim elemente dinamicki i dajem im klase

    //div sa naslovom
    let box_title = document.createElement('div')
    box_title.classList.add('box_title', 'second_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list');

    let hr = document.createElement('hr');
    hr.classList.add('hr');

    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    // sekcija - slika i tekst
    let sec_3 = document.createElement('div');
    sec_3.classList.add('sec_3');

    let sec_3_img = document.createElement('div');
    sec_3_img.classList.add('sec_3_img');

    let sec_3_txt = document.createElement('div');
    sec_3_txt.classList.add('sec_3_txt');

    //sekcija sa cenama
    let sec_price = document.createElement('div');
    sec_price.classList.add('sec_price');

    let sec_price_old = document.createElement('div');
    sec_price_old.classList.add('sec_price_old');

    let sec_price_new = document.createElement('div');
    sec_price_new.classList.add('sec_price_new');

    let sec_price_fusnote = document.createElement('div');
    sec_price_fusnote.classList.add('sec_price_fusnote');

    // glavno dugme
    let sec_btn = document.createElement('div');
    sec_btn.classList.add('sec_btn');

    let btn = document.createElement('button');
    btn.classList.add('btn');

    // json stringify - ovde vadim niz

    let obj_string = JSON.stringify(contract.items[1].name);

    // json paarse - ovde pretvaram u obj

    let obj_pars = JSON.parse(obj_string);
    box_title.textContent = obj_pars;

    // ubacujem elemente i pravim strukturu

    box_2.appendChild(box_title);
    box_2.appendChild(sec_1);
    box_2.appendChild(sec_2);
    box_2.appendChild(sec_3);
    box_2.appendChild(sec_price);
    box_2.appendChild(sec_btn);

    box_title.appendChild(hr);

    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);

    console.log(box_2);

}

// popunjavam prvi ugovor, pravim elemente, unosim podatke

function populatebox_3(jsonObj) {

    //pravim elemente dinamicki i dajem im klase

    //div sa naslovom
    let box_title = document.createElement('div')
    box_title.classList.add('box_title', 'third_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list');

    let hr = document.createElement('hr');
    hr.classList.add('hr');

    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    // sekcija - slika i tekst
    let sec_3 = document.createElement('div');
    sec_3.classList.add('sec_3');

    let sec_3_img = document.createElement('div');
    sec_3_img.classList.add('sec_3_img');

    let sec_3_txt = document.createElement('div');
    sec_3_txt.classList.add('sec_3_txt');

    //sekcija sa cenama
    let sec_price = document.createElement('div');
    sec_price.classList.add('sec_price');

    let sec_price_old = document.createElement('div');
    sec_price_old.classList.add('sec_price_old');

    let sec_price_new = document.createElement('div');
    sec_price_new.classList.add('sec_price_new');

    let sec_price_fusnote = document.createElement('div');
    sec_price_fusnote.classList.add('sec_price_fusnote');

    // glavno dugme
    let sec_btn = document.createElement('div');
    sec_btn.classList.add('sec_btn');

    let btn = document.createElement('button');
    btn.classList.add('btn');

    // json stringify - ovde vadim niz

    let obj_string = JSON.stringify(contract.items[2].name);

    // json stringify - ovde vadim niz

    let obj_pars = JSON.parse(obj_string);
    box_title.textContent = obj_pars;

    // ubacujem elemente i pravim strukturu

    box_3.appendChild(box_title);
    box_3.appendChild(sec_1);
    box_3.appendChild(sec_2);
    box_3.appendChild(sec_3);
    box_3.appendChild(sec_price);
    box_3.appendChild(sec_btn);

    box_title.appendChild(hr);

    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);

    console.log(box_3);
}