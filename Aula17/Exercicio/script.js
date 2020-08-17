var res = window.document.getElementById('res')
var numero =  document.getElementById('txtnum')
var tab = document.getElementById('seltab')
    //tamanhodalista = listgadenumeros.length
var listadenumeros=[] 

Array.min = function(array) {
    return Math.min.apply(Math, array)
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array)
};

function addvalor(){
    
    var i=Number(numero.value)
    if (numero.value.length == 0 || i<=0 || i>100 ) {
        window.alert('[ERR0} verifique o valor digitado ')
    } else {
        listadenumeros.push(i)
        var itens = document.createElement('option')
        itens.text =`O valor ${i} foi add `
        tab.appendChild(itens)
        res.innerHTML =`valor ${i} foi add`
        
    }
    
}
function finalizar(){
    listadenumeros.sort
    res.innerHTML  = `Ao todo temos ${listadenumeros.length} numeros cadastrados . <br>`
    res.innerHTML += `O maior valor foi ${(Array.max(listadenumeros))} . <br>`
    res.innerHTML += `O menor valor foi ${(Array.min(listadenumeros))} . <br>`
    var total=0
    for(var j=0;j<listadenumeros.length; j++){
        total =total+listadenumeros[j];
    }
    res.innerHTML += `A soma de todos os valores temos ${total}.`
    res.innerHTML += `A media dos valores é ${total/listadenumeros.length} .`
}