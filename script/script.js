const body = {
   body_id: document.getElementById("body_id").style,
   header_id: document.getElementById("header_id").style,
   nav_id: document.getElementById("nav_id").style,
   section_id: document.getElementById("section_id").style,
   main_id: document.getElementById("main_id").style,
   aside_id: document.getElementById("aside_id").style,
   footer_id: document.getElementById("footer_id").style,
}
const fonts = {
    paragraph : document.getElementById("paragraf_id").style

}

const bg_colors = {
    color1: document.getElementById('buttomone').value="#fc3030",
    color2: document.getElementById('buttomtwo').value="#0352e4",
    color3: document.getElementById('buttomthree').value="#05b330",

}

//BACKGOUNDS

function colorOne(){
    body.body_id.backgroundColor=bg_colors.color1;
}

function colorTwo(){
    body.body_id.backgroundColor=bg_colors.color2;
}

function colorThree(){
    body.body_id.backgroundColor=bg_colors.color3;
}


//TAMANHO DE FONTES

function size14(){
    const size = document.getElementById("size14").value=14+"px";
    fonts.paragraph.fontSize = size;
}

function size18(){
    const size = document.getElementById("size14").value=18+"px";
    fonts.paragraph.fontSize = size;
}

function size24(){
    const size = document.getElementById("size14").value=24+"px";
    fonts.paragraph.fontSize = size;
}




//BOTÃO DE RESET

function resetButtom(){
    const default_settings_body = document.getElementById("resetButtom").value="#fff";
    const default_settings_font = document.getElementById("resetButtom").value="medium";

    body.body_id.backgroundColor=default_settings_body;
    fonts.paragraph.fontSize=default_settings_font;
}