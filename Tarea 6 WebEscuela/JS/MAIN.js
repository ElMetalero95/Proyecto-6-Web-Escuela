const Home = function () {
    Section.innerHTML = "";
};

const HomeIMG = function () {
    Home();
    let img = $dc.img(Section, "IMAGENES/alumnos3.jpg")
    img.className = "portada";
};

window.onload = function () {
    HomeIMG();
    $n.init();
};

