/*

criando um vetor e percorrendo usando o "for"
    let num=[5,8,2,9,3]
    for(i=0;i<=num.length;i++){
        console.log(num[i])
    }
   

// acrescentando itens ao vetor


console.log(`o vetor tem ${num.length} posições`)
console.log(num)
num.push(20)
console.log(num)
num.sort()
num.push(1)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro item do vetor é ${num[0]}`)
num.sort()
console.log(num)


// exemplo formatando os vetores e usanso o for 


let valores=[5,8,2,9,3,1,7]
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// for mais simples para uso em vetores

let valores=[5,8,2,9,3,1,7]
valores.sort()
for ( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}

// comando que faz busca em vetores "indexOf" o valor que vc busca fica dentro do "()" no exenplo
//a baixo foi buscado o valor 8 

var item =6
let posicao = valores.indexOf(item)

if(posicao==-1){
    console.log(`O valor ${item} nao foi encontrado`)
}else{
    console.log(`O valor ${item}  esta  na posição ${posicao}`)
}