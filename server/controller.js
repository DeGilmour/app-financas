
function transformDate(dt_fim){
    if (dt_fim != null){
        var date_new = new Date(dt_fim);
        var dia  = date_new.getDay();
        var mes  = date_new.getMonth();
        var ano  = date_new.getYear();
        var dt_fim_parsed = dia + "/" + mes +"/" + ano;
        console.log(dt_fim_parsed);
        
        }
    return dt_fim_parsed;
}
module.exports = { transformDate }

function calculaValor(){
    //calcula o valor restante para completar o objetivo
}