var res = window.document.getElementById('res')

function addvalor(){
    var numero =  document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    //tamanhodalista = listgadenumeros.length
    var listadenumeros=[] 
    var i=Number(numero.value)
    if (numero.value.length == 0 || i<=0 || i>100) {
        window.alert('[ERR0} verifique o valor digitado ')
    } else {
        listadenumeros.push(i)
        var itens = document.createElement('option')
        itens.text =`O valor ${i} foi add ${listadenumeros}`
        tab.appendChild(itens)
        res.innerHTML =`valor ${i} foi add`
        
    }
    
}
function finalizar(){
    var listagem = listadenumeros.text()
    res.innerHTML += `${listagem}`


}