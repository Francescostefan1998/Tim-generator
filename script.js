let teamm = 1;

const addTeam = function (event) {
  const inputValue = document.querySelector("#input2");
  console.log(inputValue.value);
  for (let i = 0; i < inputValue.value; i++) {
    const getWrapped = document.getElementById("wrapped");
    const bigDiv = document.createElement("div");
    const heade = document.createElement("h1");
    heade.innerText = "Team" + teamm;
    const newElement = document.createElement("div");
    const getM = document.querySelector("#main").innerHTML;
    console.log(getM);
    newElement.innerHTML = getM;
    newElement.classList.add("smallWrapped");
    bigDiv.appendChild(heade);
    bigDiv.appendChild(newElement);
    getWrapped.appendChild(bigDiv);
    teamm++;

  }

};
let arrOfName = [
  "Antonio Stella",
  "Marco Scarpa",
  "Paul Czech",
  "Manuel Sans",
  "Francesco Rossi",
  "Giulia Manchin",
  "Sabrina Amadion",
  "George Vik",
  "Sergio Sperti",
  "Lisa Michelin",
  "Maria Presti",
  "Sam Villa",
  "Antonis bella",
  "Marzia arpa",
  "Pamel poech",
  "Manuele vans",
  "Franco Rossi",
  "jusy Manchin",
  "Sabrina daltodion",
  "Geo Vik",
  "Serj Sperti",
  "Lisa belin",
  "Maria pesti",
  "Sam lla",
];

/*let btn = document.querySelector("#generateRandom");
let output = document.querySelector("#wrapper");

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];

    for(let i = start; i <= end; i++) {
        myArray.push(i);
console.log(myArray);

    }
}
    let numbersArray = createArrayOfNumbers(2,12);
    btn.addEventListener("click", () =>{
        if(numbersArray.length === 0) {
            output.innerText = "No more people";
            return;
        }
        let randomIndex = getRandomNumber(0,numbersArray.length-1);
        console.log(randomIndex);
        let randomNumber = numbersArray[randomIndex];
        console.log(randomNumber);
        numbersArray.splice(randomIndex, 1);
        output.innerText = randomNumber;
    })

*/
let arrTeam = [];
console.log(arrTeam);
const addRandomName = function (event) {
  const randomNumber = Math.floor(Math.random() * 24);
  console.log(randomNumber);
  const randomName = arrOfName[randomNumber];
  console.log(randomName);
  const getMain = document.querySelector("#main");
  const createDiv = document.createElement("div");
  createDiv.innerText = randomName;
  if(randomName !== arrTeam[arrTeam.length]) {
  getMain.appendChild(createDiv);
  arrTeam.push[randomName];
}
};
const takeNumberToInput = function (event) {
    const getinput = document.querySelector("#input2")
    getinput.value = getinput.value - 1;
}

const addNumberToInput = function (event) {
    const getinput = document.querySelector("#input2")
console.log(getinput.value);
  getinput.value = getinput.value - (1*(-1) );

}

const reset = function (event) {
    const body = document.querySelector('#main');

    body.innerHTML = '';
}

const cancel = function (event) {
    const body = document.querySelector('#wrapped');

    body.removeChild(body.lastChild);
    teamm--;
}



window.onload = function () {
  addTeam(event);
};
