const formulario = document.getElementById('fichaPaciente')

let inputName =   document.getElementById('name');

const selectConvenio = document.querySelector('#convenio');
let possuiConvenio = selectConvenio.value === "true";

const selectEspecialidade = document.querySelector('#especialidade')
let qualEspecialidade = selectEspecialidade.value === "true"

const data = document.querySelector('#data').value;

const tel = document.querySelector('#tel').value;

const paciente = {

    name : inputName,
    convenio : possuiConvenio,
    especialidade : qualEspecialidade,
    data : data,
    telefone : tel,

};

formulario.addEventListener('submit', function(event) {
event.preventDefault();

alert("entraremos em contato");

});

