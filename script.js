const addTeam = function (event) {
  const inputValue = document.querySelector("#input2");
  console.log(inputValue.value);
  for (let i = 0; i < inputValue.value; i++) {
    const getWrapped = document.getElementById("wrapped");
    const newElement = document.createElement("div");
    const getM = document.querySelector("#main");
    console.log(getM);
    newElement.innerText = getM;
    newElement.classList.add("smallWrapped");
    getWrapped.appendChild(newElement);

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

const addRandomName = function (event) {
  const randomNumber = Math.floor(Math.random() * 12);
  console.log(randomNumber);
  const randomName = arrOfName[randomNumber];
  console.log(randomName);
  const getMain = document.querySelector("#main");
  const createDiv = document.createElement("div");
  createDiv.innerText = randomName;
  getMain.appendChild(createDiv);
  arrTeam.push[randomName];

};


window.onload = function () {
  addTeam(event);
};
