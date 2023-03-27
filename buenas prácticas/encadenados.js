const diacita = "martes";
const diaDisponible = new Array("lunes", "martes", "miércoles", "jueves", "viernes");

let horario = 10;
let nuevoPaciente = false;
let pagoAnticipado = true;

console.log(`Verificando disponibilidad de citas para ${diacita}`);

if (diaDisponible.indexOf(diacita) > -1 &&
horario >= 10 &&
pagoAnticipado && !nuevoPaciente){
    console.log('Día disponible para agendar cita');
} else {
    console.log('Día u horario no disponible para agendar cita. Verifica de nuevo');
}