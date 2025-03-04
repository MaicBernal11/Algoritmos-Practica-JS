// Funcion que realiza una suma

function suma(){
    let n1= 0
    let n2= 0
    let suma = 0
    alert("Este programa realiza una suma entre dos valores ingresados por el usuario")

    n1 = parseInt(prompt("Ingrese el primer valor a sumar"))
    n2 = parseInt(prompt("Ingrese el segundo valor a sumar"))

    suma = n1 + n2

    alert("EL RESULTADO DE LA SUMA ES " + suma)


}

// Funcion que realiza las 4 operaciones basicas (suma, resta, multiplicacion y division) de 2 numeros ingresados 

function operacionesBasicas(){
    let n1= 0
    let n2= 0
    let suma = 0
    let resta = 0
    let multiplicacion = 0
    let division = 0
    alert("Este programa realiza las operaciones basicas(suma, resta, multiplicacion y division) de dos numeros ingresados por el usuario")

    n1 = parseInt(prompt("Ingrese el primer valor"))
    n2 = parseInt(prompt("Ingrese el segundo valor"))

    suma = n1 + n2
    resta = n1 - n2
    multiplicacion = n1 * n2
    division = n1 / n2

    alert("EL RESULTADO DE LA SUMA ES " + suma)
    alert("EL RESULTADO DE LA RESTA ES " + resta)
    alert("EL RESULTADO DE LA MULTIPLICACION ES " + multiplicacion)
    alert("EL RESULTADO DE LA DIVISION ES " + division)

}

// Funcion que determina al cuadrado de un numero ingresado

function cuadradoDeUnNumero(){
    let A = 0
    let M = 0
    alert("Este programa determina al cuadrado de un numero ingresado por el usuario")

    A = parseInt(prompt("Ingrese el valor"))

    M = A * A

    alert("EL RESULTADO DEL NUMERO AL CUADRADO ES " + M)


}

// Funcion que determina los CM y PG de un valor dado en Metros

function conversionDeUnidades(){
    let M = 0
    let Cm = 100
    let Pg = 39.3701
    let centimetrosEnMetros = 0
    let pulgadasEnMetros = 0
    alert("Este programa determina los centimetros y pulgadas de un valor dado en metros")

    M = parseInt(prompt("Ingrese el valor"))

    centimetrosEnMetros = M * 100
    pulgadasEnMetros = M * 39.3701

    alert("La cantidad de centimetros en " + M + " metros es de " + centimetrosEnMetros)
    alert("La cantidad de pulgadas en " + M + " metros es de " + pulgadasEnMetros)


}

// Funcion que determina el area de un triangulo a partir de la base y la altura ingresados

function areaDeUnTriangulo(){
    let BASE = 0
    let ALTURA = 0
    let AREA = 0
    alert("Este programa determina el area de un triangulo a partir de la base y la altura ingresados por el usuario")

    BASE = parseFloat(prompt("Ingrese el valor de la BASE"))
    ALTURA = parseFloat(prompt("Ingrese el valor de la ALTURA"))

    AREA = (BASE*ALTURA)/2

    alert("EL RESULTADO DEL AREA DEL TRIANGULO ES " + AREA)


}

// Funcion que determina la ganancia final de una inversion de capital a una cantidad de años que especifique el usuario o cliente a un interes mensual de 1.7 %

function inversionDeCapital(){
    let AÑOS = 0
    let CAPITAL = 0
    let GANANCIAS = 0
    alert("Este programa determina la ganancia final de una inversion de capital a una cantidad de años que especifique el usuario o cliente a un interes mensual de 1.7 % ")

    AÑOS = parseInt(prompt("Ingrese el valor de los años que desea"))
    CAPITAL = parseInt(prompt("Ingrese el valor del capital invertido"))

    GANANCIAS = CAPITAL+AÑOS*(12*(CAPITAL*0.017))

    alert("EL RESULTADO DE LA GANANCIA TOTAL ES " + GANANCIAS)


}

// Funcion que determina el numero mayor de dos valores ingresados

function numeroMayor(){
    let A = 0
    let B = 0
    alert("Este programa determina el numero mayor de dos valores ingresados por el usuario ")

    A = parseInt(prompt("Ingrese el primer valor"))
    B = parseInt(prompt("Ingrese el segundo valor"))

    if(A==B){
        alert("Ambos numeros son iguales")
    }
    else if(A>B){
        alert("El numero mayor es "+ A)
    }
    else{
        alert("El numero mayor es " + B)
    }


}

// Funcion que determina el numero menor de tres valores, ingresados por el usuario


function numeroMenor () {
    alert("Este algoritmo esta hecho para hallar el numero menor de tres posibles, los cuales sin ingresados por el usuario")
    let A = 0
    let B = 0
    let C = 0
    A = parseInt(prompt("Ingrese el primer valor"))
    B = parseInt(prompt("Ingrese el segundo valor"))
    C = parseInt(prompt("Ingrese el tercer valor"))
    if ((A == B) && (B == C)){
        alert("Los tres numeros son iguales")
    }
    else if ((A < B) && (A < C)){
        alert("el numero menor es " + A)
    }
    
    else if ((B < A) && (B < C)){
        alert("El numero menor es " + B)
    }
    else {
        alert("El numero menor es " + C)
    }
}

// Funcion que determina si un numero que ingresa el usuario es par o inpar

function parOImpar(){
    alert("Este algoritmo determina si un numero ingresado por el usuario es PAR o INPAR")
    let A = 0
    A = parseInt(prompt("Ingrese el valor que desea saber si es PAR o INPAR"))
    if (A % 2 === 0) {
        alert("El numero " + A + " es Par")
    }
    else {
        alert("El numero " + A + " es Impar")
    }
}

// Funcion que permite calcular el promedio de los estudiantes en la clase de ingles , las calificaciones  que son en escala de 1 a 5, donde reprueba entre 0 y 2.9, y aprueba si es superior o igual a 3.0'

function promedioDeEstudiantes(){
    alert("Este algoritmo permite calcular el promedio de un alumno que tiene 7 calificaciones en la materia de ingles. Las calificaciones son en escala de 1 a 5, donde reprueba entre 0 y 2.9, y aprueba si es superior o igual a 3.0")
    let C1 = 0
    let C2 = 0
    let C3 = 0
    let C4 = 0
    let C5 = 0
    let C6 = 0
    let C7 = 0
    let Promedio = 0
    C1 = parseInt(prompt("Ingrese el valor de las calificaciones C1"))
    C2 = parseInt(prompt("Ingrese el valor de las calificaciones C2"))
    C3 = parseInt(prompt("Ingrese el valor de las calificaciones C3"))
    C4 = parseInt(prompt("Ingrese el valor de las calificaciones C4"))
    C5 = parseInt(prompt("Ingrese el valor de las calificaciones C5"))
    C6 = parseInt(prompt("Ingrese el valor de las calificaciones C6"))
    C7 = parseInt(prompt("Ingrese el valor de las calificaciones C7"))
    Promedio = ((C1+C2+C3+C4+C5+C6+C7)/7)
    if (((C1+C2+C3+C4+C5+C6+C7)/7)>=30) {
        alert("El estudiante ha aprobado exitosamente con una nota de " + Promedio)
    } 
    else {
        alert("El estudiante ha reprobado con una nota de " + Promedio)
    }
}

// Funcion que detrmina el valor que debe pagar una persona al comprar cierta cantidad de kilos de fruta, dependiendo de los kilos comprados podra adquirir descuentos

function fruteria(){
    alert("Una  fruteria vende manzanas a $4.500 el kilo: Este algoritmo permite saber al vendedor cuanto debe pagar un cliente teniendo en cuenta los descuentos que tiene la fruteria")
    let K = 0
    let V = 4500
    K = parseInt(prompt("Ingrese el numero de kilos que compro el cliente"))
    valorAPagar = K * V
    if (K <= 2) {
        alert("El cliente no tendra descuento")
        alert("El cliente debe pagar un valor de " + valorAPagar)
    }
    else if (K <= 5) {
        primerDescuento = (valorAPagar-(valorAPagar*0.10))
        alert("El cliente tendra un descuento del 10% en su compra y debe pagar un valor de " + primerDescuento)
    }
    else if (K <= 9) {
        segundoDescuento = (valorAPagar-(valorAPagar*0.15))
        alert("El cliente tendra un descuento del 15% en su compra y debe pagar un valor de" + segundoDescuento)
    }
    else {
        tercerDescuento = (valorAPagar-(valorAPagar*0.20))
        alert("El cliente tendra un descuento del 20% en su compra y debe pagar un valor de" + tercerDescuento)
    }
}

// Funcion que halla el valor que debe cobrar un obrero de sus horas trabajadas, su horario normal es de 40 horas las cuales se le pagara cada una a 10000, las horas extras debera cobrar 20000 por cada hora extra

function horasExtras(){
    alert("Este algoritmo determina el valor que debe cobrar un obrero de sus horas trabajadas, su horario normal es de 40 horas las cuales se le pagaran cada una a 10000, las horas extras debera cobrar 20000 por cada hora extra")
    let HT = 0
    let PN = 10000
    let PE = 20000
    HT = parseInt(prompt("Ingresa el numero de horas trabajadas "))
    if (HT <= 40) {
        pagoNormal = HT * PN
        alert("El pago de sus horas trabajadas es " + pagoNormal)
    }
    else {
        pagoExtra = ((pagoNormal)+((HT-40)*PE))
        alert("El pago de sus horas trabajadas mas sus horas extras ed de " + pagoExtra)
    }
}

// Funcion que determina la suma de numeros continuos ingresados por el usuario pero si se ingresa el valor 0 se detiene la suma

function sumaDeNumerosDiferentesACero(){
    alert("Este algortimo esta hecho para sumar todos los numeros ingresados por el usuario, hasta que ingrese el numero cero")
    let suma = 0
    let numero = 0
// while ejecuta un bloque de código mientras la condición sea verdadera. Es útil cuando no se sabe cuántas veces se debe repetir el ciclo, pero depende de una condición.
    while (true) {
        numero = parseInt(prompt("Ingresa un número (0 para salir): "), 10)
        if (isNaN(numero)) {  
// isNaN() es una función que significa "is Not a Number". Sirve para comprobar si un valor no es un número y devuelve un true o false. false si es un numero y true si no es un numero no valido
            alert("Por favor, ingresa un número válido.")
            continue
        }
        if (numero === 0) {
            break // Este if esta puesto para que al mometo que el usuario ponga un 0 se detenga el bucle con termino "break", el 0 se determia con el numero === o
        }
        suma += numero
    }
    alert("El resultado total de la suma es " + suma)
    return suma
}

// Funcion que imprime los numeros de 1 a 10

function imprimirDeUnoADiez(){
    alert("Este algoritmo esta hecho para imprimir en pantalla los numeros de 1 a 10 al momento de que actives el boton de la funcion")
    N = 1
    for ( N = 1 ; N <= 10; N++ ) {
        alert(N)
    }
}

// Funcion que imprime los numeros de 100 a 0 de 10 en 10

function imprimirDeCienACero(){
    alert("Este algoritmo esta hecho para imprimir en pantalla los numeros de 100 a 0 de 10 en 10")
 
    for ( i = 100 ; i >= 0; i = i -10) {
        alert(i)
    }
}

// Funcion que imprime la tabla de multiplicar de un numero que ingrese el usuario

function tablaDeMultiplicar(){
    alert("Este algortimo esta hecho para impirmir la tabla de multiplicar de un numero, este numero sera determinado por el usuario")
    let N = 0
    let C = 1
    let M = 0
    N = parseInt(prompt("Ingresa el numero que desea saber su tabla de multiplicar"))
    if (isNaN(N)) {
        alert("Por favor, ingresa un número válido.")
        return
    }   // Este if lo establecemos para verificar el valor que ingresara el usuario, verificando si el usuario ingreso un valor valido para continuar el algoritmo de no ser asi le arrojara una alerta pidiendole que ingrese un valor valido
    for (C = 1; C <= 10; C++) {
        M = N * C
        // Este for esta hecho para realizar el bucle con el fin de poner el numero con el cual se multiplicara el valor que ingreso el ususario
        alert(N + " x " + C + " = " + M);
    }
}

// Funcion hecha con el fin de simular un cajero automatico, este cajero tendra un saldo inicial de un $ 1.000.000 y el usuario ira haciendo retiros hasta llegar a cero

function cajeroElectronico(){
    alert("Este algoritmo hecho con el fin de simular un cajero automatico, este cajero tendra un saldo inicial de un $ 1.000.000 y el usuario ira haciendo retiros hasta llegar a cero")
    let SaldoInicial = 1000000
    let Monto = 0
    let continuar = true; // Variable de control para continuar o detener el proceso, esto obviamente lo saque de chatgpt
        // Bucle para realizar los retiros
    while (SaldoInicial > 0 && continuar) {
        Monto = parseInt(prompt("Saldo disponible: $" + SaldoInicial + "\n¿Cuánto deseas retirar?")) // Validar si el monto es un número y si el monto solicitado es mayor que el saldo restante
        if (isNaN(Monto) || Monto <= 0) { // Esta condicion esta puesta, para que el usuario al momento de ingresar un valor no valido, le arroje un mensaje para que lo haga bien, este valor no valido va desde que ingrese una letra o signo a tambien un valor en negativo.
            alert("Por favor, ingresa un monto válido.")
        } else if (Monto > SaldoInicial) { //Esta condicion esta puesta, para que al momento de que el usuario ponga mas de lo que tiene en saldo, le alerte que no puede hacer eso, y proceda a ingresar un monto valido para retirar.
            alert("Saldo insuficiente. Solo tienes $" + SaldoInicial + " disponibles.")
        } else {
            SaldoInicial -= Monto
            alert("Retiro exitoso. Tu saldo actual es de: $" + SaldoInicial)
        }
        if (SaldoInicial > 0) {
            continuar = confirm("¿Deseas realizar otro retiro?")
        }
    }
    if (SaldoInicial === 0) {
        alert("Tu saldo ha llegado a cero. No puedes realizar más retiros.")
    } else {
        alert("Gracias por usar el cajero. ¡Hasta pronto!")
    }
}

// Funcion que imprime los numeros de 100 en 100 hasta 1000

function imprimirDeCienEnCienHastaMil(){
    alert("Este algoritmo imprime los numeros de 100 en 100 hasta 1000")
    N = 1000
    for ( N = 100 ; N <= 1000; N+=100 ) {
        alert(N)
    }
}

// Funcion promedio #2

function promedioDeEstudiantes2(){

    let materia = ""
    let estudiante = ""
    let nNotas = 0
    let calificacion = 0
    let sumaNotas = 0
    let promedio = 0
    let iteracion = 0
    
    materia = prompt("Ingrese la materia que imparte")
    estudiante = prompt("Ingrese el nombre del estudiante")
    nNotas = parseInt(prompt("Ingrese el numero de notas o calificaciones"))
    
    while (iteracion<nNotas) {

        calificacion = parseFloat(prompt("Ingrese la calificacion"))
        sumaNotas = sumaNotas + calificacion 
        iteracion = iteracion + 1
    }

    promedio = sumaNotas/nNotas

    if (promedio>2.9){
        alert("El estudiante " + estudiante + " Aprobo la materia de " + materia +  "con un promedio de " + promedio)
    }
    else {
        alert("El estudiante " + estudiante + " Reprobo la materia de " + materia + "con un promedio de " + promedio)
    }
}

 




