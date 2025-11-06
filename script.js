const form = document.getElementById('plannerForm');
const lista = document.getElementById('lista');
const total = document.getElementById('total');
const limpar = document.getElementById('limpar');


let horasTotal = 0;


form.onsubmit = e => {
e.preventDefault();
const materia = document.getElementById('materia').value;
const horas = Number(document.getElementById('horas').value);
if (!materia || !horas) return;


const li = document.createElement('li');
li.textContent = `${materia} - ${horas}h`;
lista.appendChild(li);


horasTotal += horas;
total.textContent = horasTotal;
form.reset();
};


limpar.onclick = () => {
lista.innerHTML = '';
total.textContent = 0;
horasTotal = 0;
};