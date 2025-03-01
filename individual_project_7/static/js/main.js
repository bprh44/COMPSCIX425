const PAGE_SIZE = 10;


// Hint: You can use these for global state variables...
let query = '';
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
    const url = `http://openlibrary.org/search.json?q=${query}&limit=10&offset=${page}`;
    console.log('making query to ', url);
    isLoading = true;
    render();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            books = data;
            totalPages = ~~(books["numFound"] / 10);
            console.log(totalPages);
        })

    isLoading = false;
    render();
}

function onSearch() {
    // TODO: This function will need some updating...
    query = document.querySelector('#search_input').value;
    doFetch();
}

// TODO: This function will need some updating...
function decrementPage() { 
    page--;
    doFetch();
}

// TODO: This function will need some updating...
function incrementPage() {
    page++;
    if (page > totalPages) {
        page = totalPages;
    }
    doFetch();
}

function render() {
    // TODO: This function will need some updating...

    let bookDiv = document.querySelector('#books_div');
    let pagesSpan = document.querySelector('#pages_span');
    pagesSpan.textContent = '0 / 1';
    if (isLoading) {
        bookDiv.innerHTML = '<div class="loader">Loading...</div>';
    } else {
        books.forEach(book => {
            bookDiv.innerHTML = `<div class="Books-book">
                <img src="http://covers.openlibrary.org/b/id/${book['cover_i']}.jpg" alt="cover">
                <div class="Books-book-details">
                    <div class="Books-book-title">${book['title']}</div>
                    <strong>Author:</strong> ${book['author_name']}<br>
                    <strong>Language:</strong> ${book['language']}<br>
                    <strong>Year Published:</strong> ${book['first_publish_year']}<br>
                </div>
            </div>`

        });
        console.log(bookDiv);
    }
}
