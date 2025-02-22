const PAGE_SIZE = 10;


// Hint: You can use these for global state variables...
let query = 'the lord of the rings';
let isLoading = false;
let books = [];
let page = 0;
let totalPages = 0;


/*
  doFetch will do the fetch to the API based on state, updating the state with
  the books retrieved.
*/
function doFetch() {
    // TODO: This function will need some updating...
    const url = 'http://openlibrary.org/search.json?q=' + query + '&limit=10&offset=' + page;
    console.log('making query to ', url);
    isLoading = true;
    render();
}

function onSearch() {
    // TODO: This function will need some updating...
    query = 'what the heck'
    doFetch();
}


// TODO: This function will need some updating...
function decrementPage() { }


// TODO: This function will need some updating...
function incrementPage() { }

function render() {
    // TODO: This function will need some updating...
    let bookDiv = document.querySelector('#books_div');
    let pagesSpan = document.querySelector('#pages_span');
    pagesSpan.textContent = '0 / 1';
    if (isLoading) {
        bookDiv.innerHTML = '<div class="loader">Loading...</div>';
    } else {

    }
}
