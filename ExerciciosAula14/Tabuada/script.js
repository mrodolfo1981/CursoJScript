function tabuada (){
    var numero =  document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (numero.value.length == 0) {
        window.alert('[ERR0} verifique o valor digitado ')
    } else {
             var i = Number(numero.value)
             var c=1
             tab.innerHTML = ''
                while   (c<=10){  
                     var item = document.createElement('option')
                        item.text = ` ${i} X ${c} = ${i * c} `
                        tab.appendChild(item)
                         c++
                }
    }
 
   
}