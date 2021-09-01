//List of pokemon
let pokemonList = [
  {
    name: 'Charmander',
    height: 2,
    types: ['Lizard', 'Blaze']
  },
  {
    name: 'Squirtle',
    height: 1,
    types: ['Tiny Turtle', 'Torrent']
  },
  {
    name: 'Vulpix',
    height: 2,
    types: ['Fox', 'Flash Fire']
  },
  {
    name: 'Oddish',
    height: 1,
    types: ['Weed', 'Chlorophyll']
  },
  {
    name: 'Psyduck',
    height: 2,
    types: ['Duck', 'Damp', 'Cloud Nine']
  },
  {
    name: 'Hypno',
    height: 5,
    types: ['Hypnosis', 'Insomnia', 'Forewarn']
  },
];

for (let i=0; i < pokemonList.length - 1; i++) {
if (pokemonList[i].height > 1) {
  document.write(pokemonList.name + ' ' + pokemonList[i].height);
  document.write('</br>')
} else {
  document.write("More info coming soon!</br>");
}
}
