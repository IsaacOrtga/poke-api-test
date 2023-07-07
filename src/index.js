import { getPokemon } from './getPokemon.js';

function init() {
  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("inputValue").value; //paso el valor del input una vez hago click
    
    const id = parseInt(searchInput, 10);
    if(searchInput === '') alert('Ha de introducir un valor para realizar la búsqueda')
    if (!isNaN(id) && id >= 1 && id <= 1010) { //niego isNaN para saber si es un number, y entonces si es true lo paso como id a getPokemon, así como restringo el rango en el que se puede buscar por id
      getPokemon(id);
    //   getMoves(id);
    } else { //si no se cumple el if, entonces es string y se pasa a buscar como nombre
      getPokemon(searchInput.toLowerCase());
    //   getMoves(searchInput.toLowerCase());
    }
  });
  const randomButton = document.getElementById('random');
  randomButton.addEventListener('click', (e) => {
    e.preventDefault()
    const randomN = Math.floor(Math.random() *100 +1);
    getPokemon(randomN)
  })

  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', () =>  {
const results = document.getElementById('results');
if(results.firstChild){ //verifico si el div results tiene algún hijo, y si es así paso a elminarlo
    results.firstChild.remove()
}else{ //en caso de que no tenga nada, saco mensaje por alert
    alert('No hay resultados para eliminar')
}
  })
}
window.addEventListener("DOMContentLoaded",() => {
    init()
} );
