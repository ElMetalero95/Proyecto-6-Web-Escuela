const $$Form = function () {
    //FUNTIONS
    const ModifyUser = function (user, opcion) {
        const Submit = function () {
            try {
                if (user.Roles.length === 0) throw "NO SE PUEDE MODIFICAR UN USUARIO SIN ROLES";
                user.Nombre = Nombre.value ;
                user.Dni = Dni.value ;
                user.Mail = Mail.value ;
                user.Direccion = Direccion.value ;
                user.Telefono = Telefono.value;
                $cu.modify(user);
                opcion();
            } catch (e) { alert(e);}
            return false;
        };
        const MakeRols = function () {
            const RolExists = function (ROL) {
                for (var i = 0; i < user.Roles.length; i++) {
                    if (user.Roles[i] === ROL) return true;
                }
                return false;
            };
            rolPosible.innerHTML = "";
            roles.innerHTML = "";
            for (var i = 0; i < ROLES.length; i++) {//le pregunta al usuario si tiene ese rol para ponerlo
                if (!RolExists(ROLES[i])) { $dc.option(rolPosible, ROLES[i], ROLES[i]) };
            }
            for (var j = 0; j < ROLES.length; j++) {
                if (RolExists(ROLES[j])) $dc.option(roles, ROLES[j], ROLES[j]);
            }
        };
        const CargarControles = function () {
            Nombre.value = user.Nombre;
            Dni.value = user.Dni;
            Direccion.value = user.Direccion;
            Telefono.value = user.Telefono;
            Mail.value = user.Mail;
            MakeRols();
        };
        const AddRol = function () {
            user.Roles.push(rolPosible.value);
            MakeRols();
        };
        const EraseRol = function () {
            let r = roles.value;
            if (r === "ADMINISTRADOR" && user.ID + "" === "1") return;
            let aux = new Array();
            for (var i = 0; i < user.Roles.length; i++) {
                if (user.Roles[i] !== r) aux.push(user.Roles[i]);
            }
            user.Roles = aux;
            MakeRols();

        };



        Home();
        let f = $dc.form("Modificar usuario " + user.Nombre, "agregar");
        f.className = "w80 l18";
        let Nombre = $dc.inputText("nombre");
        let Dni = $dc.inputNumber("dni");
        let Mail = $dc.inputMail("mail");
        let Direccion = $dc.inputText("direccion");
        let Telefono = $dc.inputText("teléfono");
        let rolPosible = $dc.select("Roles Posibles");
        rolPosible.className = "dblButton";
        let roles = $dc.select("Roles");
        CargarControles();
        let double = $dc.doubleButton();
        double[0].innerText = "AGREGAR ROL";
        double[1].innerText = "QUITAR ROL";
        double[0].onclick = AddRol;
        double[1].onclick = EraseRol;
        f.onsubmit = Submit;



    };
    //METHODS
    this.abmUser = function () {
        //FUNCIONES
        const Submit = function () {
            let user = new Object();
            user.Nombre = Nombre.value;
            user.Dni = Dni.value;
            user.Direccion = Direccion.value;
            user.Telefono = Telefono.value;
            user.Mail = Mail.value;
            user.Password = user.Dni;
            user.Roles = new Array();
            user.Foto = FotoDefault;
            try {
                $cu.add(user);
                ModifyUser(user, $f.abmUser);
            } catch (e) {
                alert(e);
            }
            return false;
        };
        const Listar = function () {
            let header = ["NOMBRE", "MAIL", "DNI" , "MODIFICAR", "ELIMINAR"]
            let rows = 5;
            let lista = $cu.list();
            let frow = function (tr, user) {
                tr.childNodes[0].innerText = user.Nombre;
                tr.childNodes[1].innerText = user.Mail;
                tr.childNodes[2].innerText = user.Dni;
                tr.childNodes[3].innerText = "Modifica";
                tr.childNodes[4].innerText = "Elimina";
            };
            $dt.Table(header,lista,rows,frow);
        };
        //DESARROLLO
        Home();
        let f = $dc.form("alta de usuario", "agregar");
        f.className = "w80 l12";
        let Nombre = $dc.inputText("nombre");
        let Dni = $dc.inputNumber("dni");
        let Mail = $dc.inputMail("mail");
        let Direccion = $dc.inputText("direccion");
        let Telefono = $dc.inputText("teléfono");
        Listar();
        f.onsubmit = Submit;
    };
    this.findByDni = function () {
        const Submit = function () {
            try {
                let user = $cu.findByDni(dni.value);
                ModifyUser(user, $f.findByDni);
            }
            catch (e) {
                alert(e);
            }
            return false;
        };
        Home();
        let f = $dc.form("Modificar usuario", "buscar");
        f.className = "w60 l14";
        let dni = $dc.inputNumber("DNI del usuario");
        f.onsubmit = Submit;
    };
    this.findByMail = function () {
        const Submit = function () {
            try {
                let user = $cu.findByMail(mail.value);
                ModifyUser(user, $f.findByMail);
            } catch (e) {
                alert(e);
            }
            return false;
        };
        Home();
        let f = $dc.form("Modificar usuario", "buscar");
        f.className = "w60 l14";
        let mail = $dc.inputMail("Mail del usuario");
        f.onsubmit = Submit;
    };
    this.login = function () {

        const Submit = function () {
            try {
                MainUser = $cu.login(mail.value, password.value);
                $f.logout();
            }
            catch (e) { alert(e) };
           
            return false;
        };

        Home();
        let f = $dc.form("ingresar al sistema", "ingresar");
        f.className = "w40";
        let mail = $dc.inputMail("Mail");
        let password = $dc.inputPassword("contraseña");
        $dc.forgot(f).onclick = $f.forgot;
        f.onsubmit = Submit;

    };
    this.logout = function () {

        const Change = function () {
            Rol = roles.value;
            $n.init();
        };
        const Submit = function () {
            MainUser = undefined;
            Rol = undefined;
            $n.init();
            HomeIMG();
            return false;
        };
        const MakeRoles = function () {
            for (var i = 0; i < MainUser.Roles.length; i++) {
                let rol = MainUser.Roles[i];
                $dc.option(roles, rol, rol);
            }
            Change();
        };


        Home();
        let f = $dc.form("Usuario " + MainUser.Nombre, "Salir");
        f.className = "w60 l8 ";
        let roles = $dc.select("ROL");
        MakeRoles();
        roles.onchange = Change;
        Reset.style.display = "none";
        $dc.img(Cform, MainUser.Foto).className = "foto";
        f.onsubmit = Submit;
    };
    this.perfil = function () {
        //FUNCTIONS
        const Submit = function () {
          //  let user = new Object();
            MainUser.Nombre = Nombre.value;
            MainUser.Direccion = Direccion.value;
            MainUser.Telefono = Telefono.value;
            if (password.value !== "") { MainUser.Password = password.value; }
            $cu.modify(MainUser);
            //$f.logout();
            //return false;
            return true;
        };
        const Fload = function (res) {
            if (MainUser.Foto !== res) {
                MainUser.Foto = res;
                $cu.modify(MainUser);
            }
            $f.logout();
        };
        Home();
        let f = $dc.formImg("Perfil de " + MainUser.Nombre, "Modificar", Fload);
        f.className = "w50 l15 ";
        let Nombre = $dc.inputText("Nombre");
        Nombre.value = MainUser.Nombre;
        let Direccion = $dc.inputText("Direccion");
        Direccion.value = MainUser.Direccion;
        let Telefono = $dc.inputText("teléfono");
        Telefono.value = MainUser.Telefono;
        let password = $dc.inputsPasswordConfirm();
        $dc.inputFileImg("cargar imagen", "archimagen");
        accion.value = "MODIFICARIMGUSUARIO";
        ID.value = MainUser.ID;
        f.onsubmit = Submit;

    };
    this.forgot = function () {
        const Submit = function () {
            try {
               $cu.forgot(mail.value, dni.value);
            } catch (e) {
                alert(e);
                HomeIMG();
            }
            return false;
        };

        Home();
        let f = $dc.form("recuperar contraseña", "ingresar");
        f.className = "w40";
        let mail = $dc.inputMail("Mail");
        let dni = $dc.inputNumber("Dni");
        f.onsubmit = Submit;

    };
};
const $f = new $$Form();