const WORD = document.getElementById("word");
async function getFwords() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      WORD.innerHTML = data[0].toUpperCase() + " YOU  " || "FUSS YOU  ";
    })
    .catch(() => {
      WORD.innerHTML = "WHAT THE HELL DUDE";
    });
}
getFwords();
