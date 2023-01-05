const $$DomBasic = function () {
    //parametros
    //funciones
    //métodos
    this.id = function (id) { return document.getElementById(id); };
    this.ce = function (type) { return document.createElement(type); };
    this.ac = function (parent, child) { parent.appendChild(child); };
    this.rc = function (parent, child) { parent.removeChild(child); };
};//Clase
const $d = new $$DomBasic();//Instancia
const $$DomControls = function () {
    //Funciones
    const AddControl = function (parent, strelem) {
        let control = $d.ce(strelem);
        $d.ac(parent, control);
        return control;
    };
    const AddInput = function (parent, type) {
        let input = AddControl(parent, "input");
        input.type = type;
        input.required = true;
        return input;
    };

    //Metodos
    this.form = function (title, texinput) {
        let f = AddControl(Section, "form");
        let header = $dc.div(f);
        header.className = "header";
        let lbl = $dc.label(header, title);
        let img = $dc.img(header, "IMAGENES/Button_Delete-01_25095 (2).png");
        img.onclick = HomeIMG;
        let cform = $dc.div(f);
        cform.id = "Cform";
        let foot = $dc.div(f);
        foot.id = "Foot";
        let submit = AddInput(foot, "submit");
        submit.value = texinput.toUpperCase();
        submit.id = "Submit";
        let reset = AddInput(foot, "reset");
        reset.value = "CANCELAR";
        reset.id = "Reset";
        return f;
    };
    this.formImg = function (title, textinput, Fload) {
        //FUNCTIONS
        const Load = function () {
            let res = this.contentWindow.document.childNodes[0].innerText;
            if (res === "") return;
            Fload(res);
        };
        const MakeHiddens = function () {
            let accion = AddInput(Cform, "hidden");
            accion.name = "accion";
            accion.id = "accion";
            let id = AddInput(Cform, "hidden");
            id.id = "ID";
            id.name = "ID";
        };
        //DESARROLLO
        let f = $dc.form(title, textinput);
        f.method = "POST";
        f.action = "default.aspx";
        f.enctype = "multipart/form-data";
        let ifr = $d.ce("iframe");
        ifr.name = "iframe";
        ifr.style.display = "none";
        $d.ac(Section, ifr);
        f.target = "iframe";
        ifr.onload = Load;
        MakeHiddens();
        return f;
    };
    this.div = function (parent) {
        return AddControl(parent, "div");
    };
    this.label = function (parent, innertext) {
        let lbl = AddControl(parent, "label");
        lbl.innerText = innertext.toUpperCase();
        return lbl;
    };
    this.img = function (parent, src) {
        let imagen = AddControl(parent, "img");
        imagen.src = src;
        return imagen;
    }
    this.inputText = function (textlabel) {
        $dc.label(Cform, textlabel);
        let itext = AddInput(Cform, "text");
        return itext;
    };
    this.inputNumber = function (textlabel) {
        $dc.label(Cform, textlabel);
        let itext = AddInput(Cform, "number");
        return itext;
    };
    this.inputMail = function (textlabel) {
        $dc.label(Cform, textlabel);
        let itext = AddInput(Cform, "email");
        return itext;
    };
    this.inputDate = function (textlabel) {
        $dc.label(Cform, textlabel);
        let idate = AddInput(Cform, "date");
        return idate;
    };
    this.select = function (textlabel) {
        $dc.label(Cform, textlabel);
        let sel = AddControl(Cform, "select");
        return sel;
    };
    this.option = function (parent, innertext, value) {
        let opt = AddControl(parent, "option");
        opt.innerText = innertext;
        opt.value = value;
        return opt;
    };
    this.inputPassword = function (textlabel) {
        $dc.label(Cform, textlabel);
        let pass = AddInput(Cform, "password");
        return pass;
    };
    this.inputsPasswordConfirm = function () {
        let pass = $dc.inputPassword("contraseña");
        pass.placeholder = "Si no modifica contraseña no ingrese";
        let confirm = $dc.inputPassword("conf. contraseña");
        confirm.style.display = "none";
        confirm.required = false;
        pass.required = false;
        pass.onchange = function () {
            if (pass.value === "") {
                confirm.style.display = "none";
                confirm.value = "";
                confirm.required = false;
                confirm.setCustomValidity("");
                return;
            }
            confirm.style.display = "block";
            confirm.required = true;
        };
        confirm.onchange = function () {
            if (pass.value === confirm.value) confirm.setCustomValidity("");
            else confirm.setCustomValidity("NO COINCIDEN LAS CONTRASEÑAS");
        };
        return pass;


    };
    this.inputFile = function (textlabel, name) {
        $dc.label(Cform, textlabel);
        let file = AddInput(Cform, "file");
        file.name = name;
        file.required = false;
        return file;
    };
    this.inputFileImg = function (textlabel, name) {
        const Change = function () {
            if (this.files.length === 0) return;
            if (this.files[0].type.match('image.*')) { this.setCustomValidity(""); }
            else { this.setCustomValidity("No es un archivo de imagen".toUpperCase()); }
        };
        let fileimg = $dc.inputFile(textlabel, name);
        fileimg.onchange = Change;
        fileimg.required = false;
        return fileimg;
    };
    this.inputFilePdf = function (textlabel, name) {
        const Change = function () {
            if (this.files.length === 0) return;
            let filename = this.files[0].name;
            let datos = filename.split(".");
            let extensión = datos[datos.length - 1];
            if (extensión === "pdf") { this.setCustomValidity(""); }
            else { this.setCustomValidity("No es un archivo pdf".toUpperCase()); }
        };
        let filepdf = $dc.inputFile(textlabel, name);
        filepdf.onchange = Change;
        filepdf.required = false;
        return filepdf;
    };
    this.forgot = function (parent) {
        let forg = $dc.div(parent);
        forg.className = "forgot";
        forg.innerText = "OLVIDE MI CONTRASEÑA";
        return forg;
    };
    this.a = function (parent, innertext) {
        let A = AddControl(parent, "a");
        A.innerText = innertext.toUpperCase();
        return A;
    };
    this.doubleButton = function () {
        let = d1 = AddControl(Cform, "div");
        let = d2 = AddControl(Cform, "div");
        d1.className = "dblbutton1";
        d2.className = "dblbutton2";
        return [d1, d2];
    };
};
const $dc = new $$DomControls();//INSTANCIA
const $$DomNav = function () {
    let ul;
    const MakeUl = function () {
        if (ul !== undefined) return;
        ul = $d.ce("ul");
        $d.ac(Nav, ul);
    };
    this.clear = function () {
        MakeUl();
        ul.innerHTML = "";
    };
    this.makeButton = function (innertext, eventclick) {
        let a = $d.ce("a");
        a.innerHTML = innertext.toUpperCase();
        a.onclick = eventclick;
        let li = $d.ce("li");
        $d.ac(ul, li);
        $d.ac(li, a);
        return li;
    };
    this.makeButtonLogin = function (text, eventclick) {
        let li = $d.ce("li");
        $d.ac(ul, li);
        li.className = "right";
        let a = $dc.a(li, text.toUpperCase());
        a.id = "Login";
        a.onclick = eventclick;
    };
    this.makeDropdownButton = function (text, arraytext, arrayeventsclik) {
        let li = $d.ce("li");
        $d.ac(ul, li);
        $dc.a(li, text);
        let div = $dc.div(li);
        for (var i = 0; i < arraytext.length; i++) {
            $dc.a(div, arraytext[i]).onclick = arrayeventsclik[i];
        };
    };
};
$dn = new $$DomNav();
const $$DomTable = function () {
    //PARAMETROS
    let table, Header,
        List, Rows, Frow,
        Pos, MaxPos, Footer,
        BtStart, BtPrevious, BtEnd;
    //FUNCIONES
    const Tr = function () {
        let tr = $d.ce("tr");
        $d.ac(Table, tr);
        return tr;
    };
    const Th = function (tr) {
        let th = $d.ce("th");
        $d.ac(tr, th);
        return th;
    };
    const Td = function (tr) {
        let td = $d.ce("td");
        $d.ac(tr, td);
        return td;
    };
    const MakeWheel = function () {
        Table.onmousewheel = function (e) {
            if (e.wheelDelta > 0) {
                Pos--;
                if (Pos < 0) Pos = 0;
            } else {
                Pos++;
                if (Pos > MaxPos) Pos = MaxPos;
            }
            MakeTable();
        };
    };
    const MakeClick = function () {
        BtStart.onclick = function () { Pos = 0; MakeTable(); };
        BtPrevious.onclick = function () {
            Pos -= Rows;
            if (Pos < 0) Pos = 0;
            MakeTable();
        };
        BtNext.onclick = function () {
            Pos += Rows;
            if (Pos > MaxPos) Pos = MaxPos;
            MakeTable();
        };
        BtEnd.onclick = function () {
            Pos = MaxPos;
            MakeTable();

        };
        MakeWheel();//utliliza el mousewheel
    };

    const MakeVisibility = function () {
        BtStart.style.display = "none";
        BtPrevious.style.display = "none";
        BtNext.style.display = "none";
        BtEnd.style.display = "none";
        //visibilidad en funcion de pos
        if (Pos > 0) {
            BtStart.style.display = "block";
            BtPrevious.style.display = "block";
        }
        if (Pos < MaxPos) {
            BtNext.style.display = "block";
            BtEnd.style.display = "block";
        }
        MakeClick();//eventos on click de los botones
    };
    const MakeFooter = function () {
        let tr = Tr();
        Footer = Th(tr);
        Footer.id = "Footer";
        Footer.colSpan = Header.length;
        BtStart = $dc.div(Footer);
        BtPrevious = $dc.div(Footer);

        BtEnd = $dc.div(Footer);
        BtNext = $dc.div(Footer);
        BtStart.innerText = "<<";
        BtPrevious.innerText = "<";
        BtNext.innerText = ">";
        BtEnd.innerText = ">>";
        BtStart.className = "btfoot left";
        BtPrevious.className = "btfoot left";

        BtEnd.className = "btfoot right";
        BtNext.className = "btfoot right";
        MakeVisibility();//visibilidad de los botones en funcion de la posición iniciada
    };
    const MakeBody = function () {
        for (var i = Pos; i < Pos + Rows && i < List.length; i++) {
            let tr = Tr();
            for (var j = 0; j < Header.length; j++) {
                Td(tr);
            }
            Frow(tr, List[i]);
        }
        MakeFooter();
    };
    const MakeHeader = function () {
        let tr = Tr();
        for (var i = 0; i < Header.length; i++) {
            Th(tr).innerText = Header[i].toUpperCase();
        }
        MakeBody();
    };
    const MakeTable = function () {
        table = $d.id("Table");
        if (table === null || table === undefined) {
            table = $d.ce("table");
            $d.ac(Section, table);
            table.id = "Table";
        }
        table.innerHTML = "";
        MakeHeader();
    };
    //METODOS
    this.Table = function (header, list, rows, frow) {
        Header = header;
        List = list;
        Rows = rows;
        Frow = frow;
        Pos = 0;//fija la fila que se va a visualizar primero
        MaxPos = List.length - Rows;
        MakeTable();
    };
   
};
$dt = new $$DomTable();
//Header=["NOMBRE","DNI","MAIL","MODIFICAR","ELIMINAR"]