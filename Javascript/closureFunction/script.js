function Greetings(name) {
  return function () {
    console.log("Welcome to RICR!!!", name);
  };
}

const greetMahi = Greetings("Mahiii");
const greetSunny = Greetings("Sunny");

greetMahi();
greetSunny();