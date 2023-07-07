import { renderPokemon } from "./renderPokemon.js";

export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await getData(url);
  if (!pokemon) return;

  const abilitiesData = pokemon.abilities;
  const abilities = abilitiesData?.map((ability) => {
    //recojo cada una de las habilidades y su nombre con un map, siempre que exista (?), donde retorno directamente una lista con dichas habilidades
    const nameAbility = ability.ability.name;
    return `<li>${nameAbility}</li>`;
  });
  const listOfAbilities = abilities?.join(""); //pregunto (?) si existe la información buscada, y sólo si existe realiza el join
  const move = pokemon.moves[0].move.name;
  const [language, name] = await getMoves(move);
  const listPokemonData = `
    <h3>Name: ${pokemon.name}</h3>
        <img src=${pokemon?.sprites?.front_default} alt='imgPokemon'/> 
        <ul>
        <li><b>Language: ${language}</b> </li>
        <li><b>Abilities:</b>
        <ul>
        <li>${listOfAbilities}</li>
        </ul>
        </li>
        <li><b>Moves:</b> ${name}</li>
        <li><b>Weight:</b> ${pokemon.weight} </li>
        </ul>
    `;
  if (listPokemonData) return renderPokemon(listPokemonData); //si hay resultados, finalmente le paso como parámetro dichos resultados a la función que los renderizará
}

export async function getMoves(moves) {
  let url = `https://pokeapi.co/api/v2/move/${moves}`;
  const language = await getData(url).then(
    (moves) => moves.effect_entries[0].language.name
  );
const name = await getData(url).then(
    (moves) => moves.name
)
  

return [language, name];


}

// const movesData = await getData(url)
// .then((moves) => movesData.moves = moves)
//    .then(moves => {
//     pokemon.moves = moves;
//     console.log(pokemon)
//    })
// const movesPromise = await getData(url)
// .then((data) => data.moves.map((move) => console.log(move.name)));
// return Promise.all([language, movesPromise])
