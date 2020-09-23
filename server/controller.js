const moment = require('moment')
function transformDate(dt_fim){
    if (dt_fim != null){
        var date_new = new Date(dt_fim);
        //Usando a api do moment eu pego horario do reino unido e passo para o index
        moment.locale("en-gb"); 
        var parsedCurrentDate = moment(date_new).format('L')
        var dias_mes = calculaValor(date_new);
        var lista_valores =[];
        for (c= 0; c < dias_mes.length; c++){
            lista_valores.push(dias_mes[c]);
        }
        lista_valores.push(parsedCurrentDate);
        }
    return lista_valores;
}
module.exports = { transformDate }

function calculaValor(date){
    //calcula o valor restante para completar o objetivo
    var today = moment()
    const dif_datas = Math.abs(date - today);
    const diff_dias = Math.ceil(dif_datas / (1000 * 60 * 60 * 24)); 
    const diff_mes = Math.ceil(diff_dias / 30);
    var vals_lista = [];
    vals_lista.push(diff_dias);
    vals_lista.push(diff_mes);
    return vals_lista;

}