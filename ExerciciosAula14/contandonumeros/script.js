function contar(){
   
var ini = document.getElementById('txtini')
var fim = window.document.getElementById('txtfim')
var passo = window.document.getElementById('txtpas')
var res = window.document.getElementById('res')
   
   
   if(ini.value.length==0||fim.value.lengt == 0 || passo.value.lengt == 0){
       //window.alert('[ERRO] faltan Dados!')
       res.innerHTML = 'Impossivel contar!'
   }else{
        res.innerHTML = 'Contando : <br> '
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p<=0){
        window.alert('Passo invalido !Considerando PASSO 1')
        p=1
       }
       if(i<f){
           //contagem crescente
          for (var c=i;c<= f; c+=p){
           // o += no res soma o que ja esta no modelo com o resultado
            res.innerHTML += ` ${c}\u{1F449}`
        }
      }else{
          // contagem decrescente
          for (var c=i; c>= f; c -= p)
          res.innerHTML += ` ${c} \u{1F449}`
        }
   } 
   res.innerHTML += `  \u{1F3C1}`  
}