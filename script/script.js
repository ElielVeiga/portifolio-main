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
    paragraph : document.getElementById("paragraf_id").style,
    description_projects_one: document.getElementById("description_projects_one").style,
    description_projects_two: document.getElementById("description_projects_two").style,
    description_projects_three: document.getElementById("description_projects_three").style,
    title: document.getElementById("title").style
}

//BACKGOUNDS

function colorOne(){
    body.body_id.backgroundColor="#2c1028";
    body.nav_id.backgroundColor = "#89006b"
    body.aside_id.backgroundColor = "#89006b"
    body.header_id.backgroundColor = "#fff"
    body.footer_id.backgroundColor = "#fff"

    fonts.paragraph.color = "#fff";
    fonts.description_projects_one.color = "#fff";
    fonts.description_projects_two.color = "#fff";
    fonts.description_projects_three.color = "#fff";
    fonts.title.color = "#fff";


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




//BOTÃO DE RESET

function resetButtom(){
    const default_settings_body = document.getElementById("resetButtom").value="#fff";
    const subBody = document.getElementById("resetButtom").value="#dadada";
    const default_settings_font = document.getElementById("resetButtom").value="medium";
    const default_color_font = document.getElementById("resetButtom").value="#000";


    body.nav_id.backgroundColor= subBody;
    body.aside_id.backgroundColor= subBody;
    body.body_id.backgroundColor=default_settings_body;
    fonts.paragraph={
        color:default_color_font,
        fontSize:default_settings_font,
    }
    fonts.description_projects_one.style={
        color:default_color_font,
        fontSize:default_settings_font,
    };
    fonts.description_projects_two={
        color:default_color_font,
        fontSize:default_settings_font,
    };
    fonts.description_projects_three={
        color:default_color_font,
        fontSize:default_settings_font,
    };

}