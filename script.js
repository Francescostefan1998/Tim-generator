

const newTeam = function () {
    const getWrapped = document.getElementById("wrapped");
    const newElement = document.createElement("div");
    const addClass = newElement.classList.add("smallWrapped");
    getWrapped.appendChild(addClass);
}