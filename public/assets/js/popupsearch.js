const searchBar = document.getElementById('uv-address');

document.addEventListener('keydown', function(e) {
    if(e.key.toLowerCase() == 't') {
        searchBar.value = '';

        searchBar.classList.toggle("hidden");
        if(searchBar.classList.contains("hidden")) {
            searchBar.blur();
        }
    }
});
searchBar.addEventListener('input', async function(e) {
    const ac = await fetch("/autoc", {
        body: searchBar.value
    });
    console.log(ac);
});