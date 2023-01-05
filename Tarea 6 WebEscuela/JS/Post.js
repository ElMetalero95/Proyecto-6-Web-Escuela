const $$Ajax = function () {
    //FUNCTION
    const POST = function (Data) {
        //funciona con browsers de ultima generación
        const xhttp = new XMLHttpRequest();
        const Change = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                resp = xhttp.responseText;
            }
        };
        var resp = null;
        xhttp.onreadystatechange = Change;
        xhttp.open("POST", "Default.aspx", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(Data);
        return resp;

    };
    //METHODS


    //let persona={Nombre:"Jose",Dni:12};
    //let Json='{"Nombre":"Jose","Dni":12}'
    this.saveUsers = function () {
        let Data = "accion=SAVEUSERS&baseusers=" + JSON.stringify(BaseUsers);
        let res = POST(Data);
        if (res === "ok") BaseUsers = undefined;
        else alert(e);
    };
    this.loadUsers = function () {
        let Data = "accion=READUSERS"
        try {
            let res = POST(Data);
            BaseUsers = JSON.parse(res);
        } catch (e) {
            alert(e);
        }
    };
};
const $a = new $$Ajax();