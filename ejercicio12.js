const mutants = [  
  { name: 'Wolverine', power: 'regeneration' },  
  { name: 'Magneto', power: 'magnetism' },  
  { name: 'Professor X', power: 'telepathy' },  
  { name: 'Jean Grey', power: 'telekinesis' },  
  { name: 'Rogue', power: 'power absorption' },  
  { name: 'Storm', power: 'weather manipulation' },  
  { name: 'Mystique', power: 'shape-shifting' },  
  { name: 'Beast', power: 'superhuman strength' },  
  { name: 'Colossus', power: 'steel skin' },  
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutantsList, targetPower) {
  const foundMutants = [];
  
  for (const mutant of mutantsList) {
    if (mutant.power.toLowerCase() === targetPower.toLowerCase()) {
      foundMutants.push(mutant.name);
    }
  }
  
  if (foundMutants.length > 0) {
    return `¡Encontrado(s)! Mutante(s) con el poder "${targetPower}": ${foundMutants.join(', ')}`;
  } else {
    return `No se ha encontrado ningún mutante con el poder "${targetPower}".`;
  }
}

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'laser eyes'));