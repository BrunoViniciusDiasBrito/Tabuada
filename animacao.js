function tabuada(){
    //variaveis
    var enumb = window.document.getElementById('enumb')        
    var seletor = window.document.getElementById('seltab')
    var alertar = window.document.getElementById('alertafrase')
    //condicional
    if(enumb.value == ''){
        //se for vazio
        window.alert('[ERRO] Por favor digite um numero!')        
        alertar.style.color ='red'
    }else{
        //se houver numero
        seletor.innerHTML=''
        for(let c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${enumb.value} x ${c} = ${enumb.value*c}`
            item.value = `seletor${c}`
            seletor.appendChild(item)            
        }
    }
}