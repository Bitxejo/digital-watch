const mostrarReloj =() =>{
    let fecha =new Date();
    let hour = formatoHora(fecha.getHours());
    let min =formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    let year =fecha.getFullYear();
    document.getElementById("hora").innerHTML = `${hour}:${min}:${sec}`;
    const meses = [ "Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo", "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"];
    const dias = ["Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado" ];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto =`${diaSemana},${dia},${mes}` ;
    document.getElementById("fecha").innerHTML = fechaTexto ;

    document.getElementById("contenedor").classList.toggle("animar");
}
setInterval(mostrarReloj, 1000);
const formatoHora = (hora) =>{
    if(hora < 10)
    hora ="0" + hora;
    return hora;
}