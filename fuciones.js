let numero = 12
function ParImpar(){

    if (numero % 2 == 0){
        return  console.log("El numero es par")
    }else{
        return console.log("El numero es impar")
    }

}

function FormulaPrimo(numero){
     
    let acumulador = 0
    for(let i = 0; i <= numero; i++){
        if (numero % i == 0){
            acumulador += 1
            
            
        }
    }
    if(acumulador < 3){

       
        return true
    }
    else{
        
        return false
    }

}
function PrimoSiguiente(){
    let primos = []
    let elegido  = 11
    for (let j = 1; j < 100 ; j++){
        if(FormulaPrimo(j)){
            primos.push(j)
        }
        
    }
    console.log(primos)
    let escogido =primos.indexOf(elegido)
    console.log("El numero primo siguiente al " +escogido+ " es "+  primos[escogido+1])
}



function Primo(){
    if(FormulaPrimo(numero)){
        console.log("Es primo")
    }else{
        console.log("No es primo")
        
    }
}
function Cuadrado(){
    let ladoX = 3
    let ladoY = 4
    let cuadro = ""
        for(let i = 1; i <= ladoX; i++){

            for(let j = 1; j <= ladoY; j++){
                cuadro += "o"
            }
            console.log(cuadro)
            cuadro = ""
        }
}
Cuadrado()
