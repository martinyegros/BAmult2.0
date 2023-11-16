const clientes = [];

//DOM
const inputNombre = document.getElementById('nomb');
const inputNacimiento = document.getElementById('nacim');
const inputCorreo = document.getElementById('corr');
const inputTelefono = document.getElementById('tele');
const inputDescripcion = document.getElementById('desc');

const formRegistro = document.getElementById('form-registrar');

//Escuchador de botones

const clientesList = document.querySelector('.clasDos')

let clientess = '';

clientesList.addEventListener('click', e => {

    if(e.target.classList.contains('envNos')) {
        e.preventDefault()
        textoSel(e.target.parentElement)
        if (validarCamposVacios()) {
            registrarUsuario();
            limpiarFormulario(formRegistro);
            Swal.fire(
                'Usted envió el mensaje',
                'Gracias por comuncarte con nosotros',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto!',
                text: 'No pudo realizar la operación!',
                })
                
        }
    }
})

const textoSel = objeto => {
    const client = {
        texto: objeto.querySelector('.nosCinco').textContent
    }

    clientess = client.texto
}

function validarCamposVacios() {
    return inputNombre.value !== '' && inputNacimiento.value !== ''  && inputCorreo.value !== '' && +inputTelefono.value !== '' && +inputDescripcion.value !== '';
}

function registrarUsuario() {
    const nuevoCliente = new Cliente(inputNombre.value, inputNacimiento.value, inputCorreo.value, +inputTelefono.value, inputDescripcion.value);
    clientes.push(nuevoCliente);
}

function limpiarFormulario(form) {
    form.reset();
}