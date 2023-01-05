const $$Nav = function () {
    //FUNCTIONS
    const Anonimous = function () {
        $dn.clear();
        $dn.makeButton("inicio", HomeIMG);
        $dn.makeButton("Carreras", "");
        $dn.makeButton("Noticias", "");
        $dn.makeButtonLogin("INGRESAR AL SISTEMA", $f.login);
    };
    const Administrador = function () {
        $dn.clear();
        $dn.makeButton("Inicio", HomeIMG);
        $dn.makeButton("perfil", $f.perfil);
        $dn.makeDropdownButton("funciones",
            ["abm usuario",
                "mod. usuario por Dni",
                "mod. usuario por mail",
                "abm carreras"],
            [$f.abmUser,
            $f.findByDni,
            $f.findByMail,
                ""
            ]
        );
        $dn.makeButtonLogin(MainUser.Nombre.toUpperCase(), $f.logout);

    };
    const DirEstudios = function () {
        $dn.clear();
        $dn.makeButton("Inicio", HomeIMG);
        $dn.makeButton("perfil", $f.perfil);
        $dn.makeDropdownButton("funciones",
            ["abm materias",
                "abm correlativas",
                "abm cursadas"],
            ["",
                "",
                ""
            ]);
        $dn.makeButtonLogin(MainUser.Nombre.toUpperCase(), $f.logout);

    };
    const Preceptor = function () {
        $dn.clear();
        $dn.makeButton("Inicio", HomeIMG);
        $dn.makeButton("perfil", $f.perfil);
        $dn.makeDropdownButton("funciones",
            ["alta alumnos",
                "controlar",
                "abm cursadas"],
            ["",
                "",
                ""
            ]);
    };
    const Alumno = function () {
        $dn.clear();
        $dn.makeButton("Inicio", HomeIMG);
        $dn.makeButton("perfil", $f.perfil);
        $dn.makeDropdownButton("funciones",
            ["mis materias",
                "inscribirse",
                ""],
            ["",
                "",
                ""
            ]);
    };
    const Profesor = function () {
        $dn.clear();
        $dn.makeButton("Inicio", HomeIMG);
        $dn.makeButton("perfil", $f.perfil);
        $dn.makeDropdownButton("funciones",
            ["mis cursos",
                "controlar",
                ""],
            ["",
                "",
                ""
            ]);
    };
    //MethodS
    this.init = function () {
        switch (Rol) {
            case undefined: Anonimous(); break;
            case "ADMINISTRADOR": Administrador(); break;
            case "DIRECTOR DE ESTUDIOS": DirEstudios(); break;
            case "PROFESOR": Profesor(); break;
            case "PRECEPTOR": Preceptor(); break;
            case "ALUMNO": Alumno(); break;
            case "INSCRIPTO": Alumno(); break;
            case "EXCLUIDO": Anonimous(); break;
        }
    };
};
const $n = new $$Nav();