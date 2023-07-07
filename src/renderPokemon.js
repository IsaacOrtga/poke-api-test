export async function renderPokemon(pokemonData) {
    const results = document.getElementById("results");
    if(!pokemonData){ //Revisar esta condición, por ahora no me crea el h3
        const error = document.createElement('h3');
        error.innerHTML = 'Error 404 - No se encontraron Pokemons';
        results.appendChild(error);
    }else{ //si pokemonData existe, entonces me muestra los resultados en el DOM, eliminando el resultado anteriormente mostrado
        results.innerHTML = ''
        results.classList.add('results'); //añado la clase results, que en el css genera un pequeño estilo que no ha de mostrarse si no hay resultados
        const pokemonInfo = document.createElement("div");
        pokemonInfo.classList.add("pokemonInfo");
        pokemonInfo.innerHTML = pokemonData;
        results.appendChild(pokemonInfo);
    }
    
  }
  