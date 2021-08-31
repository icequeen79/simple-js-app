//List of pokemon
let pokemonList = [
  {
    name: 'Charmander',
    height: '2',
    types: ['Lizard', 'Blaze']
  },
  {
    name: 'Squirtle',
    height: '1',
    types: ['Tiny Turtle', 'Torrent']
  },
  {
    name: 'Vulpix',
    height: '2',
    types: ['Fox', 'Flash Fire']
  },
  {
    name: 'Oddish',
    height: '1',
    types: ['Weed', 'Chlorophyll']
  },
  {
    name: 'Psyduck',
    height: '2',
    types: ['Duck', 'Damp', 'Cloud Nine']
  },
  {
    name: 'Hypno',
    height: '5',
    types: ['Hypnosis', 'Insomnia', 'Forewarn']
  },
];

for (let i=0; i < pokemonList.length; i++) {
if (pokemonList[i].length > 0){
  document.write({pokemonList.name}, {pokemonList.height});
} else (pokemonList[i].length < 10){
  document.write("More info coming soon!");
}
}
