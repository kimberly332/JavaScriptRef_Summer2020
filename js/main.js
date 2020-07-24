let person = {
  name: "tervor",
  role: "troll",
  height: "180",
  hair: "fabulous",
  eyeColor: "blue",
  textLabel: document.querySelector('p')
}

let car = {
  wheels: 4,
  make: "Honda",
  model: "Pilot",
  mileage: 400,
  year: 2012,
  fuel: 20
}

document.querySelector('p').textContent = `My name is ${person.name} and i am a ${person.role}`;
