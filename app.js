//Definicion de las clases

class Libro{
    constructor(titulo, autor,isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}
class UI{
    static mostrarLibros(){
        const libros = Datos.traerLibros(); 
        libros.forEach((libro) => UI.agregarLibroLista(libro));

    }

    static agregarLibroLista(libro){
        const lista = document.querySelector('#user-list');

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        
        `;
        lista.appendChild(fila);

    }
    static eliminarLibro(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }
    static mostrarAlerta(mensaje, className){
        const div= document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container  = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        setTimeout(() =>document.querySelector('.alert').remove(), 3000);

    }
    static limpiarDatos(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';

    }
}
class Datos{
    static traerLibros(){
        let libros;
        if(localStorage.getItem('libros') === null){
            libros = []; }
        else{
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }
    static agregarLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros', JSON.stringify(libros));

    }
    static removerLibro (isbn){

    }
}

//carga de la pagina
document.addEventListener('DOMContentLoaded', UI.mostrarLibros());

//Eventosubmit
document.querySelector('#libro-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    
    //Obtener valores
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if(titulo === '' || autor === '' || isbn === ''){
        UI.mostrarAlerta('Por favor ingrese todos los datos', 'danger');
    }
    else{
        const libro = new Libro(titulo, autor, isbn);
        Datos.agregarLibro(libro); 
        UI.agregarLibroLista(libro);
        UI.mostrarAlerta('Libro Agregado exitosamente', 'Success')
        UI.limpiarDatos(); 
    }
});

document.querySelector('user-list').addEventListener('click', (e) =>{
    UI.eliminarLibro(e.target);
});