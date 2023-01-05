//VARIABLES GLOBALES
const FotoDefault = "IMAGENES/Usuarios/userdefault.jpg";
const ROLES = [
    "ADMINISTRADOR",
    "DIRECTOR DE ESTUDIOS",
    "PROFESOR",
    "PRECEPTOR",
    "ALUMNO",
    "INSCRIPTO",
    "EXCLUIDO"
];
let BaseUsers; //BASE DE DATOS EN MEMORIA
let MainUser, Rol;
//CLASE
const $$ClassUser = function () {
    //FUNCTIONS
    const ErrorExists = function (user) {
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.ID !== user.ID) {
                if (usuario.Dni + "" === user.Dni + "") {
                    Clear();
                    throw "EXISTE OTRO USUARIO CON EL MISMO DNI";
                }
                if (usuario.Mail === user.Mail + "") {
                    Clear();
                    throw "EXISTE OTRO USUARIO CON EL MISMO MAIL";
                }
            }
        }
    };
    const Load = function () {
        $a.loadUsers();
    };
    const Save = function () {
        $a.saveUsers();
    };
    const Clear= function () {
        BaseUsers = undefined;
    };




    //METHODS
    //metodo de agregar
    this.add = function (user) {
        try {
            Load();
            user.ID = ++BaseUsers.ID;
            ErrorExists(user);
            BaseUsers.Users.push(user);
            Save();
        } catch (e) {
            alert(e);
        }
    };
    //metodo de eliminar
    this.erase = function (id) {
        Load();
        let aux = new Array();
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.ID + "" !== id + "") {//se elimina al usuario si son distintos, si son iguales no
                aux.push(usuario);
            }
        }
        BaseUsers.Users = aux;
        Save();
    };
    this.modify = function (user) {
        Load();
            ErrorExists(user);
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.ID + "" === user.ID + "") {
                BaseUsers.Users[i] = user;
                Save();
                return;
            }
        }
        Clear();
    };
    this.login = function (mail, password) {
        Load();
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.Mail === mail && usuario.Password === password) {
                Clear();
                return usuario;
            }
        }
        Clear();
        throw ("LOS DATOS INGRESADOS NO CORRESPONDEN A UN USUARIO DEL SISTEMA");
    };
    this.forgot = function (mail, dni) {
        Load();
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.Mail === mail && usuario.Dni + "" === dni + "") {
                usuario.Password = dni;
                Clear(); throw "PARA INGRESAR AL SISTEMA UTILIZARA SU DNI COMO CONTRASEÑA Y LUEGO LA CAMBIARÁ EN PERFIL";
            }
        }
        Clear();  throw ("LOS DATOS INGRESADOS NO CORRESPONDEN A UN USUARIO DEL SISTEMA");
    };
    this.findByMail = function (mail) {
        Load();
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.Mail === mail) { Clear(); return usuario; }

        };
        Clear();
        throw "NO EXISTE UN USUARIO CON UN MAIL " + mail;
    };
    this.findByDni = function (dni) {
        Load();
        for (var i = 0; i < BaseUsers.Users.length; i++) {
            let usuario = BaseUsers.Users[i];
            if (usuario.Dni + "" === dni + "") { Clear(); return usuario; }

        };
        Clear();
        throw "NO EXISTE UN USUARIO CON UN DNI " + dni;
    };
    this.list = function () {
        Load();
        let aux = BaseUsers.Users;
        Clear();
        return aux;
    };
};
const $cu = new $$ClassUser();

