let tratamientoSeleccionado = '';
const datos = [
    {
        'tratamiento':'faciales',
        'precio': 2000
    },
    {
        'tratamiento':'masajes',
        'precio': 800 
    },
    {
        'tratamiento':'aparatología',
        'precio': 350 
    },
    {
        'tratamiento':'nutrición',
        'precio': 500
    },
    {
        'tratamiento':'hilos',
        'precio': 1500
    },
]

const presupuestoDisponible = 1600;

for (let i = 0; i < datos.length  && tratamientoSeleccionado == ''; i++){

    if(datos[i].precio <= presupuestoDisponible){
        tratamientoSeleccionado = datos[i].tratamiento;
    }
}

if (tratamientoSeleccionado == '')
    console.log("No hay tratamientos disponibles");
else
    console.log("Puedes adquirir: " +tratamientoSeleccionado);

