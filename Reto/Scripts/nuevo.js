$(document).ready(function () {
    LlenadoDeDatos();
});

function LlenadoDeDatos() {
    $('#tablaDatosBody').html("");
    $.ajax({
        type: "POST",
        url: "../Home/Consultar",
        dataType: "json",
        success: function (data) {
            //  <div class="btn-group">
            //    <button class="btn  btn-rounded btn-primary" @@click="editar" id="btnEditar">Editar</button>
            //    <button class="btn  btn-rounded btn-success" @@click="final" id = "btnFinalizar" > Finalizar</button >
            //    <button class="btn  btn-rounded btn-danger" @@click="eliminar" id = "btnEliminar" > Eliminar</button >
            //</div >
            $.each(data, function (registro, datos) {
                $('#tablaDatosBody').append("<tr><td>" + datos.Id + "</td>" +
                    "<td>" + datos.Nombre + "</td>" +
                    "<td>" + moment(datos.FechaI).format("DD/MM/YYYY HH:mm:ss") + "</td>" +
                    "<td>" + moment(datos.FechaF).format("DD/MM/YYYY HH:mm:ss") + "</td>" +
                    "<td>" + datos.Estado + "</td>" +
                    "<td><button class=\"btn btn-rounded btn-primary\" id=\"btnEditar" + datos.Id + "\" onclick=editar(" + datos.Id + ")> Editar </button>" +
                    "<button class=\"btn btn-rounded btn-success\" id=\"btnFinalizar" + datos.Id +  "\" onclick=finalizar(" + datos.Id + ")> Finalizar </button>" +
                    "<button class=\"btn btn-rounded btn-danger\" id=\"btnEliminar" + datos.Id + "\"onclick=eliminar(" + datos.Id + ")> Eliminar </button></td></tr>");
            })
        },
        error: function (error) {
            alert("Error");
        }

    });
}


var btnNuevo = document.getElementById("btnNuevo");
btnNuevo.onclick = function () {
    $('#mdlUsuario').modal('show');
    $("#txtId").val(" ");
}

var btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.onclick = function () {
    registrar();
}

function registrar(id) {
    /*$("#txtId").val("");*/
    let recibe = $("#txtNombre").val();


    $.ajax({
        type: "POST",
        url: "../Home/Agregar",
        data: {
            idTask: id
        },
        dataType: "json",
        success: function (data) {
           /* $("#txtId").val(data.Id);*/
            $("#txtNombre").val(data.Nombre);
            $("fecha").val(data.FechaI);
            $("fecha").val(data.FechaF);
            LlenadoDeDatos()
        },
        error: function (error) {
        }
    })
    /*$('#mdlUsuario').modal('hide');*/
}

function editar(id) {
    /*$("#txtId").val("");*/
    $.ajax({
        type: "POST",
        url: "../Home/Editar",
        data: {
            idTask: id
        },
        dataType: "json",
        success: function (data) {
            $("#txtId").val(data.Id);
            $("#txtNombre").val(data.Nombre);
            LlenadoDeDatos()
        },
        error: function (error) {
        }
    })
    $('#mdlUsua').modal('show');
}

function finalizar(id) {
    $("#btnEditar" + id).prop("disabled", true);
    $("#btnFinalizar" + id).prop("disabled", true);
}

function eliminar(id) {
    $.ajax({
        type: "DELETE",
        url: "../Home/Eliminar",
        data: {
            idTask: id
        },
        dataType: "json",
        success: function (data) {
            $("#txtId").val(data.Id);
            LlenadoDeDatos();
        },
        error: function (error) {
           alert("error")
        }
    })
}

var btnClose = document.getElementById("btnClose");
btnClose.onclick = function () {
    $('#mdlUsuario').modal('hide');
}

var btnCerrar = document.getElementById("btnCerrar");
btnCerrar.onclick = function () {
    $('#mdlUsuario').modal('hide');
}

document.getElementById("fecha").innerHTML = Date();





