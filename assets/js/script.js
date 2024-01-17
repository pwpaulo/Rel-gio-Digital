/*------------------VAR/CONST------------------------------------------------------------------------*/
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let datahoje = new Date();
    let hora = datahoje.getHours();
    let minuto = datahoje.getMinutes();
    let segundo = datahoje.getSeconds();

    if (hora < 10){
    horas.textContent = "0" + hora;} else {
        horas.textContent = hora;
    }
    if (minuto < 10){
        minutos.textContent = "0" + minuto;} else {
            minutos.textContent = minuto;
        }
    if (segundo < 10){
        segundos.textContent = "0" + segundo;} else {
            segundos.textContent = segundo;
        }
})
/*---------------------------------------------------------------------------------------------------*/

