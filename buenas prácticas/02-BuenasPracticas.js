const diaCita = "Lunes";
const diaDisponible = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes");

let dia = 18;
let findeSemana = true;

console.log(`Verificando disponibilidad para ${diaCita}`);
//Verificamos que el pasajero cumple las reglas
if (dia <= 30 && !findeSemana) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (diaDisponible.indexOf(diaCita) >= 0 ) {
        console.log('Día disponible para cita');
    } else {
        console.log('Día no disponible para cita');
    }
} else {
    if (dia >= 16 && diaCita == 'Lunes') {
        console.log('Puedes agendar');
    } else {
        console.log('No puedes agendar');
    }
    
}
