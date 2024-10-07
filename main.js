export function agregarParrafo(){
    //1. Seleccionar el elemento HTML donde vamos a añadir el parrafo
    let seleccionElemento=document.querySelector('#contenedor');
    //2. Crear el elemneto HTML p
    let p=document.createElement('p');
    //3. Añadir el contenido (lorem) al p
    p.innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia';
    //4. Añadir el p al elemento seleccionado en el paso 1
    seleccionElemento.append(p);
}

export function agregarLista(){
    //Creamos un elemento para pedir al usuario la informacion necesaria
    let elemento=prompt('Introduce lo que quiera añadir:');
    //Creamos un elemento que seleccione donde se va a guardar 
    //query.selector devuelve un array por eso se selecciona entre [] el 0 para seleccionar 
    //cual es por si hubiese mas de uno
    let ul=document.querySelectorAll('ul')[0];
    //Creamos un elemento li
    let li=document.createElement('li');
    //Añadimos al li la informacion indicad por el usuario
    li.innerHTML=elemento;
    //Añadimos a la lista el elemento li
    ul.append(li);
}
export function creaConEstilo(){
    //Creamos el elemento div
    let div=document.createElement('div');
    //Creamos un prompt para que el usuario introduzca su nombre y apellidos
    let mensaje=prompt('Introduce tu nombre y apellidos:');
    //Escribimos dentro del div la informacion introducida por el usuario
    div.innerHTML=mensaje;
    div.style='font-weight : bold; color: red; font-size:xx-large;';
    //Creamos una variable donde se asigne donde se va a mostrar
    let seleccion=document.querySelector('#contenedor');
    //Le añadimos el div a la seleccion del sitio
    seleccion.append(div);
}

window.agregarParrafo=agregarParrafo;