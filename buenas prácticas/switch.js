const tratamiento = "nutrición";
const tratamientosDisponibles = new Array("faciales", "masajes", "aparatología", "nutrición", "hilos");

let valorTratamiento = 3500;

console.log(`Verificando disponibilidad para ${tratamiento}`);

switch(tratamiento){
	case "faciales": 
		valorTratamiento = 350;
		break;
	case "masajes": 
		valorTratamiento = 800;
		break;
	case "aparatología": 
		valorTratamiento = 350;
		break;
	case "nutrición": 
		valorTratamiento = 500;
		break;
	case "hilos": 
		valorTratamiento = 1500;
		break;
	default:
		console.log(`No hay tratamientos disponibles`);
		break;
}

if (valorTratamiento >0)
	console.log(`El valor del tratamiento es: ${valorTratamiento}`);