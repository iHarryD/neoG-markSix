// Variables

const inputDiv = document.querySelector("#input");
const translateBtn = document.querySelector("#translate-btn");
const outputDiv = document.querySelector("#output-div");
const minionAPI = "https://api.funtranslations.com/translate/minion.json";

// EventListeners

translateBtn.addEventListener("click", translate);

// Functions

function translate() {
  let inputText = inputDiv.value;
  if (inputText.length > 0) {
    let url = `${minionAPI}?text=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let translatedText = json.contents.translated;
        outputDiv.style.display = "block";
        outputDiv.innerText = translatedText;
      });
  } else {
    alert("Please enter valid text to translate.");
  }
}
