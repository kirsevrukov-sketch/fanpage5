const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

const routes = {
  "иккинг": "hiccup.html",
  "беззубик": "toothless.html",
  "астрид": "astrid.html"
};


searchInput.addEventListener("input", function() {
  const query = this.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query.length > 0) {
    const matches = Object.keys(routes).filter(key => key.startsWith(query));
    matches.forEach(match => {
      const div = document.createElement("div");
      div.textContent = match;
      div.classList.add("suggestion");

      
      div.addEventListener("click", () => {
        searchInput.value = match;
        suggestionsBox.innerHTML = "";
        doSearch();
      });

      suggestionsBox.appendChild(div);
    });
  }
});

// поиск по Enter
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    doSearch();
  }
});

function doSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (routes[query]) {
    window.location.href = routes[query];
  } else {
    alert("Страница не найдена!");
  }
}




document.querySelector('#toTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


  function toggleContent(id) {
      const block = document.getElementById(id);
      block.classList.toggle("show");   
    }


    

