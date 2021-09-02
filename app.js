//-----------Declaration---------//
const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const errorMsg = document.getElementById('error-msg');
const searchResults = document.getElementById('search-result');
const searchCount = document.getElementById('search-count');

/* -------Click Handler---------- */
searchBtn.addEventListener('click', function () {
    const searchText = searchField.value;
    if (searchText === "") {
      errorMsg.innerText = "Search field cannot be empty.";
      searchResults.innerHTML='';
      return;
    }

    /* -------Clearing Previous Data--------- */
    


    // ------URL-------//
    const url = `http://openlibrary.org/search.json?q=${searchText}`

    /*-------Fetching Data--------*/
    fetch(url)
    .then(res=>res.json())
    .then(data=> displaySearchResult(data.docs))
});




const displaySearchResult = (docs) =>{


   searchCount.innerText=`total search results:${docs.length}`
    /* looping through */
    docs?.forEach(doc => {
         
        const div = document.createElement('div');
        div.classList.add('w-25', 'd-flex', 'flex-column', 'ms-5','mb-3','px-3','border','border-3','border-primary','flex-wrap')
        div.innerHTML = `
       
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" alt="" class=" mx-auto pt-3 w-75">
        
        <p class="mt-3">Name: ${doc.text[4]}</p>
        <p class="mt-3">First published year: ${doc.first_publish_year}</p>
        <p class="mt-3">Publisher: ${doc.publisher[0]}</p>
        <p class="mt-3">Author name:${doc.author_name}</p>
        
      `
    
        searchResults.appendChild(div);
    });


} 