/* Dicas Curso JavaScipt
 ORDEN DE PRECEDENCIA DOS OPERADORES ARITMETICOS
 1ª ()  
 2º **
 3º * / %
 4º + - 
 auto encremento ex n=n+1 ou n +=1 vale para as outra operçoes tambem tem o n++
 o sinal de == compara igualadade mesmo se for number com string para comaparar
 tambem o tipo usa-se === que verifica tambem o tipo alem do valor em si

 > 5==5
 true
 > 5=="5"
 true
 > 5==="5"
   false
 > 5===5
   true
 Quando se tem valores aritmeticos , realacionais e lógicos  a ordem é
 1º aritmeticos 2º relacionais e 3º lógicos. na ordem ! && ||.
 ex
		> var a=5
		undefined
		>
		> a
		5
		> var b=8
		undefined
		> b
		8
		> a > b && b% 2 ==0
		false
		>
OPERADORES TERNARIOS
EX DE ESTRUTURA: 
					TESTE ? TRUE : FALSE
					EX media >= 7.0 ? "aprovado" : " reprovado"
					media = 5.5
					media >=7.0 ? "aprovado":"reprovado"
					reprovado
					
					ex:
						> idade = 29
						29
						>
						> var r = idade >= 18? 'MAIOR' : 'MENOR'
						undefined
						> R
						Uncaught ReferenceError: R is not defined
						> r
						'MAIOR'
						> idade = 17
						17
						> r
						'MAIOR'
						> var r = idade >= 18? 'MAIOR' : 'MENOR'
						undefined
						> r
						'MENOR'
						

	DOM
	
	
	DOCUMENT OBJECT MODEL
	
	ARVORE D.O.M 
	
	MANIPULADO D.O.M 
	o uso do dom e possivel utilizar elementos que estao dentro do document
	 por exemplo usando o  getElementByTagName , ou pode-se atribuir id ao elemento
	 e utilizalos usando o getElementById outra forma tambem e recomendade e o 
	 querySelector e querySelectorAll.
	 ex:
	
			window.document.write('Esta escrito assim :'+p1.innerText)
            var d = window.document.getElementById('msg')  por id
            d.style.background ='green'
            d.innerText ='Estou aguardando...'
            
            var d = window.document.getElementsByName('msg')[0] por nomw
            d.innerText = 'Ola'
			
			ex usando o querySelector
			
			<!DOCTYPE html>
				<html lang="pt-BR">
				<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Primeiros Passos com o DOM</title>
				<Style>
				body{
					background: rgb(135, 148, 223);
					color: gold;
					font: normal 18pr Arial;

				}
					
				
				</Style>
				</head>
					body<>
					 
					<h1> Iniciando Estudos com DOM </h1>
					<p> Aqui vai o resultado</p>
					<p> Aprendendo a usar o <strong> DOM </strong> em JavaScript.</p>
					<div id="msg">Clique em mim </div>
					<script>
						//o uso do window e opcional 

					var corpo = window.document.body
					var p1 = window.document.getElementsByTagName('p')[0] 
					d.innerText = 'Ola'
					var d = window.document.querySelector('div#msg')//qundo usar id div usar # clase usar ponto .
					d.style.color = 'blue'//mudou a cor da fonte da mensagem 
					d.style.background = 'pink' //muda a cor do fundo da mensagem




				</script>
				</body>
				</html>

	ESTRUTAS DE REPETIÇÃO 
	
		WHILE = ENQUATO
		enquanto for verdade executa-se o bloco de instruções
		while(condição){

		}
		ex:
				var c=1 
				while (c<6){
				console.log('tudo becm!')
				c++
				}

		do while executa primeiro e testa depois 
		ex:
				var c=1

				do {
				console.log(`teste passo ${c}`)
				c++
				}while(c<=10)
		
		
		ESTRUTURA FOR

					EX:
					for (inicio;teste;incr){
						bloco de execução se o teste der verdeiro
					}
					segue o codigo se for falso  cai aqui
					
*/


var nome = window.prompt('Qual seu nome')
       
         // contando as letras do nome 
        document.write(`Seu nome é ${nome} e tem ${nome.length} letras`)
		// alterando para maiusculo o mome
        document.write(`Seu nome em maiusculo é ${nome.toLocaleUpperCase()}`)
       




// fixando 2 casa decimais em um Number 

//ex:

	n1 = 1545.5

	n1.toFixed(2)
	'1545.50'

	n1.toFixed(2).replace('','') // com esse comando vc troca um coisa por outra

// exemplo trocar o . por ,

	n1.toFixed(2).replace('.',',')
	'1545,50'

// FORMATANDO UM VALOR PARA MOEDA REAL

	 n1.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})
	'R$ 1,545.50'

// FORMATANDO PARA DOLAR AMERICANO

	n1.toLocaleString('pt-BR',{style: 'currency',currency:'USD'})
	'US$ 1,545.50'

// FORMATANDO PARA EURO

	n1.toLocaleString('pt-BR',{style: 'currency',currency:'EUR'})

	€ 1,545.50'

// recebendo um valor em uma variavel e formatando em reais

	var s = Number(window.prompt('Qual seu salario'))
	var salario_formatado = s.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})

// exibindo o salario formatado
	
	document.write('E o seu salario é '+ salario_formatado)

 
 /*
 Ex de uma caixa de texto que recebe um numero com botao na mesma linha
 <div id= "dados">
            <p>Numero :<input type="number" name="txtnum" id="txtnum" >
			<input type="button" value ="Gerar Tabuada" onclick="tabuada()"></p>

	resolução usando o for exercicio tabuada :
	
	  if (numero.value.length == 0) {
        alert('[ERRP} verifique o valor digitado ')
    }else{
       for (c=1; c<=10;c++){
       resultado = i * c
       res.innerHTML += ` ${i} X ${c} = ${resultado} <br>`
       }
	}
	 soluçao usando o while

	 else {
        var i = Number(numero.value)
        var c=1
        while   (c<=10){  
        var item = document.createElement('option')
        item.text = ` ${i} X ${c} = ${i * c} `
        tab.appendChild(item)
        c++



        
       }
    }








*/