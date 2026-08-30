const capitals = {  
  Spain: 'Madrid',  
  France: 'Paris',  
  Italy: 'Rome',  
  Germany: 'Berlin',  
  Portugal: 'Lisbon',  
  Poland: 'Warsaw',  
  Greece: 'Athens',  
  Austria: 'Vienna',  
  Hungary: 'Budapest',  
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (country in capitals) {
    return capitals[country];
  }
  return `Lo siento, el país "${country}" no está registrado en la lista.`;
}

console.log(getCapital('Spain'));
console.log(getCapital('Japan'));