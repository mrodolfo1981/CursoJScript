function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new  Date()
    var hora = 19 //data.getHours()
  
    msg.innerHTML = `Agora São ${hora} horas.`
    
    if(hora>= 0 && hora < 12 ){
        img.src = 'fotomanha.png'
        document.body.style.background ='#e2d4b2'
    }else if(hora>=12 && hora<=18){
        img.src = 'fototarde.png'
        document.body.style.background ='#b6bad3'
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background ='#3d7395'
    }
}

