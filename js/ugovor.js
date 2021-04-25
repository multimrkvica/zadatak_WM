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
    // parsiram da bih napravila objekat da mogu dalje da radim sa istim
    let constact_list_pars = JSON.parse(constact_list_string);

    console.log(constact_list_pars);

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
    let box_wrap_title = document.createElement('div');
    box_wrap_title.classList.add('box_wrap_title')

    let box_title = document.createElement('div');
    box_title.classList.add('box_title', 'first_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list');

    let sec_1_ul = document.createElement('ul');
    sec_1_ul.classList.add('sec_1_ul');

    let sec_1_li = document.createElement('li');
    sec_1_li.classList.add('sec_1_li');

    let sec_1_li_1 = document.createElement('li');
    sec_1_li_1.classList.add('sec_1_li_1');

    let sec_1_li_2 = document.createElement('li');
    sec_1_li_2.classList.add('sec_1_li_2');

    let hr = document.createElement('hr');
    hr.classList.add('hr');


    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    let sec_2_ul = document.createElement('ul');
    sec_2_ul.classList.add('sec_2_ul');

    let sec_2_li = document.createElement('li');
    sec_2_li.classList.add('sec_2_li');

    let sec_2_li_1 = document.createElement('li');
    sec_2_li_1.classList.add('sec_2_li_1');


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

    let obj_string_title = JSON.stringify(contract.items[0].name);

    let obj_string_imgTVicon = JSON.stringify(contract.assets.tv_category);

    let obj_string_imgNETicon = JSON.stringify(contract.assets.net_category);

    let obj_string_img = JSON.stringify(contract.items[0].promotions[0].promotion_image);

    let obj_string_texsec3 = JSON.stringify(contract.items[0].promotions[0].promo_text);

    let obj_string_fusnote = JSON.stringify(contract.items[0].prices.old_price_promo_text);

    let obj_string_li = JSON.stringify(contract.items[0].included[0].long_name);
    let obj_string_li_1 = JSON.stringify(contract.items[0].included[1].long_name);
    let obj_string_li_2 = JSON.stringify(contract.items[0].included[4].long_name);

    let obj_string_li_sec2 = JSON.stringify(contract.items[0].included[2].long_name);
    let obj_string_li_1_sec2 = JSON.stringify(contract.items[0].included[3].long_name);

    console.log(obj_string_li);

    // json paarse - ovde pretvaram u obj

    let obj_pars = JSON.parse(obj_string_title);

    let obj_pars_imgTVicon = JSON.parse(obj_string_imgTVicon);

    let obj_pars_imgNETicon = JSON.parse(obj_string_imgNETicon);

    let obj_pars_img = JSON.parse(obj_string_img);

    let obj_pars_texsec3 = JSON.parse(obj_string_texsec3);

    let obj_pars_fusnote = JSON.parse(obj_string_fusnote);

    let obj_pars_li = JSON.parse(obj_string_li);

    let obj_pars_li_1 = JSON.parse(obj_string_li_1);

    let obj_pars_li_2 = JSON.parse(obj_string_li_2);


    let obj_pars_li_sec2 = JSON.parse(obj_string_li_sec2);

    let obj_pars_li_1_sec2 = JSON.parse(obj_string_li_1_sec2);




    // let obj_pars_old_price= JSON.parse(obj_string_old_price);


    console.log()

    //// ubacujem tekst, slike.. itd
    box_title.textContent = obj_pars;

    sec_3_txt.innerHTML = obj_pars_texsec3;

    sec_price_fusnote.innerHTML = obj_pars_fusnote;

    let btn_text = btn;
    btn_text.innerHTML = "Naručite";

    sec_1_li.textContent = obj_pars_li;
    sec_1_li_1.textContent = obj_pars_li_1;
    sec_1_li_2.textContent = obj_pars_li_2;

    sec_2_li.textContent = obj_pars_li_sec2;
    sec_2_li_1.textContent = obj_pars_li_1_sec2;
    console.log(sec_3_txt.innerHTML);


    // definisala sam ikonica gde ide, koje atribute ima, i napravila element za tv ikonicu 
    let imgTVurl = obj_pars_imgTVicon;//obj url
    let img_tv_icon = document.createElement('img');
    img_tv_icon.src = imgTVurl;
    img_tv_icon.classList.add('icon-imgTV' , )
    
    img_tv_icon.setAttribute("alt", "icon_tv");
    sec_1_icon.appendChild(img_tv_icon);


    // definisala sam ikonica gde ide, koje atribute ima, i napravila element za net ikonicu 

    let imgNETurl = obj_pars_imgNETicon;//obj url
    let img_NET_icon = document.createElement('img');
    img_NET_icon.src = imgNETurl;
    img_NET_icon.setAttribute("class", "icon-imgNET");
    img_NET_icon.setAttribute("alt", "icon_net");
    sec_2_icon.appendChild(img_NET_icon);

    //img televizor
    let imgUrl = obj_pars_img;//obj url
    let img = document.createElement('img');
    img.src = imgUrl;
    img.setAttribute("class", "img");
    img.setAttribute("alt", "img");
    sec_3_img.appendChild(img);


    // ubacujem elemente i pravim strukturu


    box_1.appendChild(box_wrap_title);
    box_1.appendChild(sec_1);
    box_1.appendChild(sec_2);
    box_1.appendChild(sec_3);
    box_1.appendChild(sec_price);
    box_1.appendChild(sec_btn);

    box_wrap_title.appendChild(box_title);


    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_1_list.appendChild(sec_1_ul);
    sec_1_ul.appendChild(sec_1_li);
    sec_1_ul.appendChild(sec_1_li_1);
    sec_1_ul.appendChild(sec_1_li_2);



    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_2_list.appendChild(sec_2_ul);
    sec_2_ul.appendChild(sec_2_li);
    sec_2_ul.appendChild(sec_2_li_1);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);
    sec_3.appendChild(hr);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);


    console.log(box_1);
    console.log(imgTVurl);
}

// popunjavam drugi ugovor, pravim elemente, unosim podatke

function populatebox_2(jsonObj) {


    //pravim elemente dinamicki i dajem im klase

    //div preporucujemo
    let recomendation = document.createElement('div');
    recomendation.classList.add('recomendation')

    //div sa naslovom
    let box_wrap_title = document.createElement('div');
    box_wrap_title.classList.add('box_wrap_title')

    let box_title = document.createElement('div')
    box_title.classList.add('box_title', 'second_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon','sec_1_icon_second');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list', 'sec_1_list_third');
    //lista
    let sec_1_ul = document.createElement('ul');
    sec_1_ul.classList.add('sec_1_ul');

    let sec_1_li = document.createElement('li');
    sec_1_li.classList.add('sec_1_li');

    let sec_1_li_1 = document.createElement('li');
    sec_1_li_1.classList.add('sec_1_li_1');

    let sec_1_li_2 = document.createElement('li');
    sec_1_li_2.classList.add('sec_1_li_2');

    let sec_1_li_3 = document.createElement('li');
    sec_1_li_3.classList.add('sec_1_li_3');


    let hr = document.createElement('hr');
    hr.classList.add('hr');

    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    let sec_2_ul = document.createElement('ul');
    sec_2_ul.classList.add('sec_2_ul');

    let sec_2_li = document.createElement('li');
    sec_2_li.classList.add('sec_2_li');

    let sec_2_li_1 = document.createElement('li');
    sec_2_li_1.classList.add('sec_2_li_1');

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
    let obj_string_imgTVicon = JSON.stringify(contract.assets.tv_category);

    let obj_string_imgNETicon = JSON.stringify(contract.assets.net_category);

    let obj_string_img = JSON.stringify(contract.items[1].promotions[0].promotion_image);

    let obj_string_texsec3 = JSON.stringify(contract.items[1].promotions[0].promo_text);

    let obj_string_fusnote = JSON.stringify(contract.items[1].prices.old_price_promo_text);

    let obj_string_li = JSON.stringify(contract.items[1].included[0].long_name);
    let obj_string_li_1 = JSON.stringify(contract.items[1].included[1].long_name);
    let obj_string_li_2 = JSON.stringify(contract.items[1].included[4].long_name);
    let obj_string_li_3 = JSON.stringify(contract.items[1].included[5].long_name);
    let obj_string_li_sec2 = JSON.stringify(contract.items[1].included[2].long_name);
    let obj_string_li_1_sec2 = JSON.stringify(contract.items[1].included[3].long_name);

   

    // json parse - ovde pretvaram u obj

    let obj_pars = JSON.parse(obj_string);

    let obj_pars_imgTVicon = JSON.parse(obj_string_imgTVicon);

    let obj_pars_imgNETicon = JSON.parse(obj_string_imgNETicon);

    let obj_pars_img = JSON.parse(obj_string_img);

    let obj_pars_texsec3 = JSON.parse(obj_string_texsec3);

    let obj_pars_fusnote = JSON.parse(obj_string_fusnote);

    let obj_pars_li = JSON.parse(obj_string_li);

    let obj_pars_li_1 = JSON.parse(obj_string_li_1);

    let obj_pars_li_2 = JSON.parse(obj_string_li_2);

    let obj_pars_li_3 = JSON.parse(obj_string_li_3);

    let obj_pars_li_sec2 = JSON.parse(obj_string_li_sec2);

    let obj_pars_li_1_sec2 = JSON.parse(obj_string_li_1_sec2);

   


    //// ubacujem tekst, slike.. itd
    box_title.textContent = obj_pars;

    recomendation.textContent = jsonObj['promo_text'];
    sec_3_txt.innerHTML = obj_pars_texsec3;

    sec_price_fusnote.innerHTML = obj_pars_fusnote;

    sec_1_li.textContent = obj_pars_li;
    sec_1_li_1.textContent = obj_pars_li_1;
    sec_1_li_2.textContent = obj_pars_li_2;
    sec_1_li_3.textContent = obj_pars_li_3;

    sec_2_li.textContent = obj_pars_li_sec2;
    sec_2_li_1.textContent = obj_pars_li_1_sec2;

    let btn_text = btn;
    btn_text.innerHTML = "Naručite";
    //ikonica tv 
    let imgTVurl = obj_pars_imgTVicon;//obj url
    let img_tv_icon = document.createElement('img');
    img_tv_icon.src = imgTVurl;
    img_tv_icon.classList.add('icon-imgTV' , 'icon-imgTV_second');
    img_tv_icon.setAttribute("alt", "icon_tv");
    sec_1_icon.appendChild(img_tv_icon);

    //ikonica net
    let imgNETurl = obj_pars_imgNETicon;//obj url
    let img_NET_icon = document.createElement('img');
    img_NET_icon.src = imgNETurl;
    img_NET_icon.setAttribute("class", "icon-imgNET");
    img_NET_icon.setAttribute("alt", "icon_net");
    sec_2_icon.appendChild(img_NET_icon);

    //img televizor
    let imgUrl = obj_pars_img;//obj url
    let img = document.createElement('img');
    img.src = imgUrl;
    img.setAttribute("class", "img");
    img.setAttribute("alt", "img");
    sec_3_img.appendChild(img);



    // ubacujem elemente i pravim strukturu
    box_2.appendChild(recomendation);
    box_2.appendChild(box_wrap_title);
    box_2.appendChild(sec_1);
    box_2.appendChild(sec_2);
    box_2.appendChild(sec_3);
    box_2.appendChild(sec_price);
    box_2.appendChild(sec_btn);

    box_wrap_title.appendChild(box_title);

    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_1_list.appendChild(sec_1_ul);
    sec_1_ul.appendChild(sec_1_li);
    sec_1_ul.appendChild(sec_1_li_1);
    sec_1_ul.appendChild(sec_1_li_2);
    sec_1_ul.appendChild(sec_1_li_3);

    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_2_list.appendChild(sec_2_ul);
    sec_2_ul.appendChild(sec_2_li);
    sec_2_ul.appendChild(sec_2_li_1);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);
    sec_3.appendChild(hr);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);

    console.log(box_2);

}

// popunjavam treci ugovor, pravim elemente, unosim podatke

function populatebox_3(jsonObj) {

    //pravim elemente dinamicki i dajem im klase

    //div sa naslovom
    let box_wrap_title = document.createElement('div');
    box_wrap_title.classList.add('box_wrap_title')

    let box_title = document.createElement('div')
    box_title.classList.add('box_title', 'third_box_title')

    // sekcija 1  sa ikonicom i listom
    let sec_1 = document.createElement('div');
    sec_1.classList.add('sec_1');

    let sec_1_icon = document.createElement('div');
    sec_1_icon.classList.add('sec_1_icon','sec_1_icon_third');

    let sec_1_list = document.createElement('div');
    sec_1_list.classList.add('sec_1_list', 'sec_1_list_third');

    let sec_1_ul = document.createElement('ul');
    sec_1_ul.classList.add('sec_1_ul');

    let sec_1_li = document.createElement('li');
    sec_1_li.classList.add('sec_1_li');

    let sec_1_li_1 = document.createElement('li');
    sec_1_li_1.classList.add('sec_1_li_1');

    let sec_1_li_2 = document.createElement('li');
    sec_1_li_2.classList.add('sec_1_li_2');

    let sec_1_li_3 = document.createElement('li');
    sec_1_li_3.classList.add('sec_1_li_3');

    let sec_1_li_4 = document.createElement('li');
    sec_1_li_4.classList.add('sec_1_li_4');

    let sec_1_li_5 = document.createElement('li');
    sec_1_li_5.classList.add('sec_1_li_5');

    let hr = document.createElement('hr');
    hr.classList.add('hr');

    // sekcija 2  sa ikonicom i listom
    let sec_2 = document.createElement('div');
    sec_2.classList.add('sec_2');

    let sec_2_icon = document.createElement('div');
    sec_2_icon.classList.add('sec_2_icon');

    let sec_2_list = document.createElement('div');
    sec_2_list.classList.add('sec_2_list');

    
    let sec_2_ul = document.createElement('ul');
    sec_2_ul.classList.add('sec_2_ul');

    let sec_2_li = document.createElement('li');
    sec_2_li.classList.add('sec_2_li');

    let sec_2_li_1 = document.createElement('li');
    sec_2_li_1.classList.add('sec_2_li_1');

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

    let obj_string_imgTVicon = JSON.stringify(contract.assets.tv_category);

    let obj_string_imgNETicon = JSON.stringify(contract.assets.net_category);

    let obj_string_img = JSON.stringify(contract.items[2].promotions[0].promotion_image);

    let obj_string_texsec3 = JSON.stringify(contract.items[2].promotions[0].promo_text);

    let obj_string_fusnote = JSON.stringify(contract.items[2].prices.old_price_promo_text);

    let obj_string_li = JSON.stringify(contract.items[2].included[3].long_name);
    let obj_string_li_1 = JSON.stringify(contract.items[2].included[4].long_name);
    let obj_string_li_2 = JSON.stringify(contract.items[2].included[5].long_name);
    let obj_string_li_3 = JSON.stringify(contract.items[2].included[5].long_name);
    let obj_string_li_4 = JSON.stringify(contract.items[2].included[6].long_name);
    let obj_string_li_5 = JSON.stringify(contract.items[2].included[7].long_name);
    let obj_string_li_sec2 = JSON.stringify(contract.items[2].included[0].long_name);
    let obj_string_li_1_sec2 = JSON.stringify(contract.items[2].included[1].long_name);


    // json paarse - ovde pretvaram u obj

    let obj_pars = JSON.parse(obj_string);

    let obj_pars_imgTVicon = JSON.parse(obj_string_imgTVicon);

    let obj_pars_imgNETicon = JSON.parse(obj_string_imgNETicon);

    let obj_pars_img = JSON.parse(obj_string_img);

    let obj_pars_texsec3 = JSON.parse(obj_string_texsec3);

    let obj_pars_fusnote = JSON.parse(obj_string_fusnote);

    let obj_pars_li = JSON.parse(obj_string_li);

    let obj_pars_li_1 = JSON.parse(obj_string_li_1);

    let obj_pars_li_2 = JSON.parse(obj_string_li_2);

    let obj_pars_li_3 = JSON.parse(obj_string_li_3);
    let obj_pars_li_4 = JSON.parse(obj_string_li_4);
    let obj_pars_li_5 = JSON.parse(obj_string_li_5);

    let obj_pars_li_sec2 = JSON.parse(obj_string_li_sec2);

    let obj_pars_li_1_sec2 = JSON.parse(obj_string_li_1_sec2);


    //// ubacujem tekst, slike.. itd

    box_title.textContent = obj_pars;

    sec_3_txt.innerHTML = obj_pars_texsec3;

    sec_price_fusnote.innerHTML = obj_pars_fusnote;

    sec_1_li.textContent = obj_pars_li;
    sec_1_li_1.textContent = obj_pars_li_1;
    sec_1_li_2.textContent = obj_pars_li_2;
    sec_1_li_3.textContent = obj_pars_li_3;
    sec_1_li_4.textContent = obj_pars_li_4;
    sec_1_li_5.textContent = obj_pars_li_5;


    sec_2_li.textContent = obj_pars_li_sec2;
    sec_2_li_1.textContent = obj_pars_li_1_sec2;
    
    let btn_text = btn;
    btn_text.innerHTML = "Naručite";

    ///ikonica tv 
    let imgTVurl = obj_pars_imgTVicon;//obj url
    let img_tv_icon = document.createElement('img');
    img_tv_icon.src = imgTVurl;
    img_tv_icon.classList.add('icon-imgTV','icon-imgTV_third')
    img_tv_icon.setAttribute("alt", "icon_tv");
    sec_1_icon.appendChild(img_tv_icon);

    //ikonica net
    let imgNETurl = obj_pars_imgNETicon;//obj url
    let img_NET_icon = document.createElement('img');
    img_NET_icon.src = imgNETurl;
    img_NET_icon.setAttribute("class", "icon-imgNET");
    img_NET_icon.setAttribute("alt", "icon_net");
    sec_2_icon.appendChild(img_NET_icon);

    //img televizor
    let imgUrl = obj_pars_img;//obj url
    let img = document.createElement('img');
    img.src = imgUrl;
    img.setAttribute("class", "img");
    img.setAttribute("alt", "img");
    sec_3_img.appendChild(img);

    // ubacujem elemente i pravim strukturu

    box_3.appendChild(box_wrap_title);
    box_3.appendChild(sec_1);
    box_3.appendChild(sec_2);
    box_3.appendChild(sec_3);
    box_3.appendChild(sec_price);
    box_3.appendChild(sec_btn);


    box_wrap_title.appendChild(box_title);

    sec_1.appendChild(sec_1_icon);
    sec_1.appendChild(sec_1_list);
    sec_1.appendChild(hr);

    sec_1_list.appendChild(sec_1_ul);
    sec_1_ul.appendChild(sec_1_li);
    sec_1_ul.appendChild(sec_1_li_1);
    sec_1_ul.appendChild(sec_1_li_2);
    sec_1_ul.appendChild(sec_1_li_3);
    sec_1_ul.appendChild(sec_1_li_4);
    sec_1_ul.appendChild(sec_1_li_5);



    sec_2.appendChild(sec_2_icon);
    sec_2.appendChild(sec_2_list);

    sec_2_list.appendChild(sec_2_ul);
    sec_2_ul.appendChild(sec_2_li);
    sec_2_ul.appendChild(sec_2_li_1);

    sec_3.appendChild(sec_3_img);
    sec_3.appendChild(sec_3_txt);
    sec_3.appendChild(hr);

    sec_price.appendChild(sec_price_old);
    sec_price.appendChild(sec_price_new);
    sec_price.appendChild(sec_price_fusnote);

    sec_btn.appendChild(btn);

    console.log(box_3);
}