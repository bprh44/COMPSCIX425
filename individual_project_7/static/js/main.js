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
    const url = `https://openlibrary.org/search.json?q=${query}&limit=10&offset=${page}`;
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
        .catch(error => {
            console.error("Error fetching data:", error);
        })
        .finally(() => {
            isLoading = false;
            render(); // Render after data is fetched or an error occurs
        });
}

function onSearch() {
    // TODO: This function will need some updating...
    query = document.querySelector('#search_input').value;
    doFetch();
}

// TODO: This function will need some updating...
function decrementPage() { 
    page--;
    if (page < 0) {
        page = 0;
    }
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
    console.log("rendering", isLoading, books);
    let bookDiv = document.querySelector('#books_div');
    let pagesSpan = document.querySelector('#pages_span');
    pagesSpan.textContent = `${page + 1} of ${totalPages + 1}`;
    if (isLoading) {
        bookDiv.innerHTML = '<div class="loader">Loading...</div>';
    } 
    else {
        bookDiv.innerHTML = ''; // Clear previous content
        books["docs"].forEach(book => {
            const bookElement = `
            <div class="Books-book">
                <img src="http://covers.openlibrary.org/b/id/${book['cover_i']}.jpg" alt="cover" width="125" height="200" style="object-fit: cover;>
                <div class="Books-book-details">
                    <div class="Books-book-title">${book['title']}</div>
                    <strong>Author:</strong> ${book['author_name']}<br>
                    <strong>Language:</strong> <span style="display: inline-block; max-width: 100%; overflow-wrap: break-word;">${book['language'] ? book['language'].join(', ') : 'N/A'}</span><br>
                    <strong>Year Published:</strong> ${book['first_publish_year']}<br>
                </div>
            </div>`;
        bookDiv.innerHTML += bookElement;
        });
        console.log(bookDiv);
    }
}
