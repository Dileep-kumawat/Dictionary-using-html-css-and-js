let inp = document.querySelector("#wordInput");
let btn = document.querySelector("#searchBtn");
let result = document.querySelector("#result");

async function search(dets) {
    if (dets.key === "Enter" || dets.type
        === "click") {
        result.textContent = "Loading..."
        let word = inp.value;
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            result.textContent = "Please enter a valid word to search..."
            return;
        }
        let data = await response.json();
        const meaning = data[0].meanings[0].definitions[0].definition;
        result.textContent = meaning;
    }
}

inp.addEventListener("keydown", search);
btn.addEventListener("click", search);