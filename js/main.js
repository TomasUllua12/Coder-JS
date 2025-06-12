let montoTotal;
let cantidadCuotas;
const interes = 3;

// Funcion 1: solicitarMonto() | Solicito el monto del producto
function solicitarMonto() {

    let monto = parseFloat(prompt("Ingrese el monto total del producto:"));
    while (isNaN(monto) || monto <= 0) { // Si el monto es invalido, lo solicito nuevamente
        monto = parseFloat(prompt("Monto invalido. Ingrese nuevamente el monto total:"));
    }

    return monto;
}

// Funcion 2: solicitarCuotas() | Solicito la cantidad de cuotas
function solicitarCuotas() {

    let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas (entre 1 y 12):"));
    while (isNaN(cuotas) || cuotas <= 1) { // Si la cantidad es invalida, la solicito nuevamente
        cuotas = parseFloat(prompt("Cantidad invalida. Ingrese nuevamente la cantidad de cuotas:"));
    }

    return cuotas;
}

// Funcion 3: calcularCuotas() | Calculo el valor de las cuotas y muestro el resultado
function calcularCuotas(monto, cuotas, interes) {

    let montoConInteres = monto * Math.pow(1 + interes / 100, cuotas);
    let valorCuota = montoConInteres / cuotas;

    alert(
        `Resumen del plan de pago:
        
        Monto original: $${monto.toFixed(2) /*uso toFixed() para especificar cantidad de decimales*/}
        Cantidad de cuotas: ${cuotas}
        Interes: ${interes}%
        Valor de cada cuota: $${valorCuota.toFixed(2)}`
    );

    // Muestro por consola
    console.log("Plan de pagos:");
    for (let i = 1; i <= cuotas; i++) {
        console.log(`Cuota ${i}: $${valorCuota.toFixed(2)}`);
    }
}

// Ejecuto la calculadora
alert("Bienvenido a la calculadora de cuotas");
montoTotal = solicitarMonto();
cantidadCuotas = solicitarCuotas();
calcularCuotas(montoTotal, cantidadCuotas, interes);