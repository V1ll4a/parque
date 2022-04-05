do{
pais= Number(prompt("Indique el país de proveniencia con los numeros 1 o 2(USA: 1 o Colombia: 2"))
}while(isNaN(pais) || pais<1|| pais>2|| pais%1 !=0)
if(pais==1){
    do{
        aPies=Number(prompt("Indique su altura en pies"))
    }while(isNaN(aPies) || aPies<0)
        do{
            temperaturaFar=Number(prompt("Escriba la temperatura en FARENHEITS"))
        }while(isNaN(temperaturaFar) || temperaturaFar <0)
        do{
            acompañanteUno=Number(prompt("Si viene com acompañante escriba 1 si no escriba 2"))
        }while(isNaN(acompañanteUno) || acompañanteUno <1|| acompañanteUno>2)
}else if (pais==2){
do{
    aMetros=Number(prompt("Indique su altura en metros"))
    }while(isNaN(aMetros) || aMetros<0)
        do{
            temperaturaCelc=Number(prompt("Escriba la temperatura en grados Celcius"))
        }while(isNaN(temperaturaCelc))
        do{
            acompañanteDos=Number(prompt("Si viene com acompañante escriba 1 si no escriba 2"))
        }while(isNaN(acompañanteDos) || acompañanteDos <1|| acompañanteDos>2)

}
if(pais==1){
    if((aPies<4.6 && acompañanteUno==2) || temperaturaFar>104){
        alert("No puede entrar")
    }else
    alert("Si puede entrar")
}
if(pais==2){
    if((aMetros<1.4 && acompañamnteDos==2) || temperaturaCelc>38){
        alert("No puede entrar")
    }else
    alert("Si puede entrar")
}
