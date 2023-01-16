console.log('movies add conected');

window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');



}
document.getElementById('tituloPelicula').addEventListener('mouseover',function() {
    this.style.color = 'green'
    document.getElementById('tituloPelicula').addEventListener('mouseout',function() {
        this.style.color = 'black'
        
    });
    
});

let estadoSecreto = 0;

   let inputTitle = document.getElementById('titulo')
   inputTitle.addEventListener('keyup',function(e){
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 1:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 2:
                e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 3:
                e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 4:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 5:
                e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 6:
                e.key == "o" ? alert('Secreto Mágico') : (estadoSecreto = 0) ;
                break;
            default:
                break;
        }
    console.log(e.key,estadoSecreto);
   })
    
    

