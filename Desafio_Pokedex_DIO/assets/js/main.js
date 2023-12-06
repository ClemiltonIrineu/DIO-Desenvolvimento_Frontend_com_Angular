const pokemonList = document.getElementById('pokemonList')
const tipo = document.getElementById('tipoPok')
const habilidades = document.getElementById("habilidadePok")
const estatistica = document.getElementById('statistic')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151
const limit = 10
let offset = 0;


function convertPokemonToLi(pokemon) {
    return `
        <li type="button" onclick="poke(' ${pokemon.name}', '${pokemon.number}' , '${pokemon.photo}')" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}"> ${type} </li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>    
    `
}



function poke(name, number, photo) {

    let el = document.getElementById('staticBackdrop');
    let modal = new bootstrap.Modal(el);

    document.getElementById("nomePok").innerHTML = name;
    document.getElementById("numeroPok").innerHTML = "#00" + number;
    document.getElementById("imgPok").src = photo;

    getProfilePokemonTipo(number);
    getProfilePokemonHabiliti(number);
    getProfilePokemonStatistic(number);

    modal.show();
}


function getProfilePokemonTipo(id) {
    pokeApi
        .getPokemonDetailsToProfile(id)
        .then((pokemon) => {
            const newHtml1 =
                `
                <div>
                <h3>Level: </h3>
               
                  <span id="level">Lvl: ${pokemon.level}</span>
                <h3>Dimensões: </h3>
                  <span id="height">Height: ${pokemon.height}</span><br>
                  <span id="weight">Weight: ${pokemon.weight}</span>
                  <h3>Tipo: </h3>
                  ${pokemon.types.map((type) => `<span> ${type} </span> <br>`).join('')}
              </div>
        `;
            if (tipo) {
                tipo.innerHTML = newHtml1;
            }
        })
        .catch((error) => console.log(error));
}


function getProfilePokemonHabiliti(id) {
    pokeApi
        .getPokemonDetailsToProfile(id)
        .then((pokemon) => {
            const newHtml2 =
                `
            <div>
              <h3> Habilidades: </h3>
              <span ${pokemon.abilities.map((ability) => `<span>${ability} </span><br>`).join('')}
              </span>
            </div>
            `;
            if (habilidades) {
                habilidades.innerHTML = newHtml2;
            }
        })
        .catch((error) => console.log(error));
}



function getProfilePokemonStatistic(id) {
    pokeApi
        .getPokemonDetailsToProfile(id)
        .then((pokemon) => {

            const newHtml3 =
                `
            <div>
              <h3> Estatisticas: </h3>

              <table>
              <tr>
              <th>HP: </th>
              <td> ${pokemon.hp}</td>
              <tr>
              <tr>
              <th>Attack: </th>
              <td>${pokemon.attack}</td>
              <tr>
              <tr>
              <th>Defense: </th>
              <td> ${pokemon.defense}</td>
              <tr>
              <tr>
              <th>Attack Special: </th>
              <td> ${pokemon.specialAttack}</td>
              <tr>
              <tr>
              <th>Defense Special: </th>
              <td> ${pokemon.defense}</td>
              <tr>
              <tr>
              <th>Speed: </th>
              <td> ${pokemon.speed}</td>
              <tr>
            </table>
            `;
            if (estatistica) {
                estatistica.innerHTML = newHtml3;
            }
        })
        .catch((error) => console.log(error));
}





























function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
