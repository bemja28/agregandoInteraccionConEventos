console.log('lista de pelicilas conectada');

window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    
    
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}


modo = document.getElementById('logoDh').addEventListener('mouseover',()=>{
    body = document.body       
    body.classList.toggle('fondoMoviesList');
    
});
