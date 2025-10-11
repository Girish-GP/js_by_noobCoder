//function to be debounced
function searchText(text) {
  console.log(`Searching for ${text}`);
  document.getElementById("search-text").textContent = `Searching for ${text}`;
}

//debounce function
function debounceSearch(fnc, delay) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fnc.apply(this,args);
    }, delay);
  };
}
//debounced function reference
const debouncedFncRef = debounceSearch(searchText,5000);

//execution call
const inputRef = document.getElementById("search-input");
inputRef.addEventListener("input", (e) => {
    debouncedFncRef(e?.target?.value)
});
