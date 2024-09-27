const body = {
    body_id: document.getElementById("body_id").style,
    header_id: document.getElementById("header_id").style,
    nav_id: document.getElementById("nav_id").style,
    section_id: document.getElementById("section_id").style,
    main_id: document.getElementById("main_id").style,
    aside_id: document.getElementById("aside_id").style,
    footer_id: document.getElementById("footer_id").style,
 };
 
 const fonts = {
     paragraph: document.getElementById("paragraf_id").style,
     description_projects_one: document.getElementById("description_projects_one").style,
     description_projects_two: document.getElementById("description_projects_two").style,
     description_projects_three: document.getElementById("description_projects_three").style,
     title: document.getElementById("title").style
 };
 
 function colorOne() {
    body.body_id.backgroundColor="#2c1028";
    body.nav_id.backgroundColor = "#89006b"
    body.aside_id.backgroundColor = "#89006b"
    body.header_id.backgroundColor = "#fff"
    body.footer_id.backgroundColor = "#000";
    fonts.paragraph.color = "#fff";
    fonts.description_projects_one.color = "#fff";
    fonts.description_projects_two.color = "#fff";
    fonts.description_projects_three.color = "#fff";
    fonts.title.color = "#fff";

    document.querySelector('.buttom_github').style.backgroundColor = "#000";
    document.querySelector('.buttom_github').style.color = "#fff";

    document.querySelector('.buttom_linkedin').style.backgroundColor = "#000";
    document.querySelector('.buttom_linkedin').style.color = "#fff";
 }
 
 function colorTwo() {
     body.body_id.backgroundColor = "#003459";
     body.header_id.backgroundColor = "#00A7E1";
     body.nav_id.backgroundColor = "#007EA7";
     body.section_id.backgroundColor = "#00171F";
     body.main_id.backgroundColor = "#fff";
     body.aside_id.backgroundColor = "#007EA7";
     body.footer_id.backgroundColor = "#00A7E1";
 
     fonts.paragraph.color = "#fff";
     fonts.description_projects_one.color = "#fff";
     fonts.description_projects_two.color = "#fff";
     fonts.description_projects_three.color = "#fff";
     fonts.title.color = "#fff";
 }
 
 function colorThree() {
     body.body_id.backgroundColor = "#FFDE00";
     body.header_id.backgroundColor = "#282828";
     body.nav_id.backgroundColor = "#FFC700";
     body.section_id.backgroundColor = "#FFFFFF";
     body.main_id.backgroundColor = "#FFD700";
     body.aside_id.backgroundColor = "#282828";
     body.footer_id.backgroundColor = "#282828";
 
     fonts.paragraph.color = "#000";
     fonts.description_projects_one.color = "#000";
     fonts.description_projects_two.color = "#000";
     fonts.description_projects_three.color = "#000";
     fonts.title.color = "#282828";
 }
 function resetButtom() {
    // Definindo as cores e tamanhos padrão
    const defaultSettingsBody = "#fff";
    const subBody = "#dadada";
    const defaultFontSize = "medium";
    const defaultFontColor = "#000";
    const footerBackground = "#929292"; // Cor original do footer

    // Resetando o background das seções
    document.querySelector('#body_id').style.backgroundColor = defaultSettingsBody;
    document.querySelector('#nav_id').style.backgroundColor = subBody;
    document.querySelector('#aside_id').style.backgroundColor = subBody;
    document.querySelector('#footer_id').style.backgroundColor = footerBackground;

    // Resetando as fontes
    document.querySelector('.paragraph').style.color = defaultFontColor;
    document.querySelector('.paragraph').style.fontSize = defaultFontSize;

    document.querySelector('.description_projects_one').style.color = defaultFontColor;
    document.querySelector('.description_projects_one').style.fontSize = defaultFontSize;

    document.querySelector('.description_projects_two').style.color = defaultFontColor;
    document.querySelector('.description_projects_two').style.fontSize = defaultFontSize;

    document.querySelector('.description_projects_three').style.color = defaultFontColor;
    document.querySelector('.description_projects_three').style.fontSize = defaultFontSize;

    // Resetando cores dos botões no footer
    let githubButton = document.querySelector('.buttom_github');
    let linkedinButton = document.querySelector('.buttom_linkedin');

    if (githubButton && linkedinButton) {
        githubButton.style.backgroundColor = "#383838"; // Cor original do GitHub
        githubButton.style.color = "#fff"; // Texto branco

        linkedinButton.style.backgroundColor = "#0059ff"; // Cor original do LinkedIn
        linkedinButton.style.color = "#fff"; // Texto branco
    } else {
        console.error("Os botões GitHub ou LinkedIn não foram encontrados.");
    }
}

//TAMANHO DE FONTES

function size14(){
    const size = document.getElementById("size14").value=14+"px";
    fonts.paragraph.fontSize = size;
    fonts.description_projects_one.fontSize = size;
    fonts.description_projects_two.fontSize = size;
    fonts.description_projects_three.fontSize = size;
}

function size18(){
    const size = document.getElementById("size14").value=18+"px";
    fonts.paragraph.fontSize = size;
    fonts.description_projects_one.fontSize = size;
    fonts.description_projects_two.fontSize = size;
    fonts.description_projects_three.fontSize = size;
}

function size24(){
    const size = document.getElementById("size14").value=24+"px";
    fonts.paragraph.fontSize = size;
    fonts.description_projects_one.fontSize = size;
    fonts.description_projects_two.fontSize = size;
    fonts.description_projects_three.fontSize = size;
}
