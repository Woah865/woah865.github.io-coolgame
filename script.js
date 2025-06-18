const pokedexContainer = document.getElementById("pokedex");
const searchInput = document.getElementById("search");
const randomBtn = document.getElementById("random-btn");

const totalPokemon = 151;
const baseURL = "https://img.pokemondb.net/sprites/black-white/anim/normal/";

const pokedex = [];

async function loadPokemon() {
    for (let i = 1; i <= totalPokemon; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokedex.push({
            name: data.name,
            id: data.id,
            sprite: `${baseURL}${data.name}.gif`
        });
    }
    renderPokedex(pokedex);
}

function renderPokedex(list) {
    pokedexContainer.innerHTML = "";
    list.forEach(pokemon => {
        const card = document.createElement("div");
        card.className = "pokemon-card";

        card.innerHTML = `
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
            <h3>#${pokemon.id.toString().padStart(3, "0")}</h3>
            <p>${capitalize(pokemon.name)}</p>
        `;
        pokedexContainer.appendChild(card);
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

searchInput.addEventListener("input", e => {
    const val = e.target.value.toLowerCase();
    const filtered = pokedex.filter(p => p.name.includes(val));
    renderPokedex(filtered);
});

randomBtn.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * totalPokemon);
    renderPokedex([pokedex[rand]]);
});

loadPokemon();
