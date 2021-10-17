const API_KEY = "AIzaSyAY_uFHtButPFcseO1eA99z15qDrfasy9Y"
const baseURL = "https://www.googleapis.com/books";
const path = "/v1/volumes"
const params = "?q="
const authorParam = "&key="

const comedy = async () => {
    const url = baseURL + path + params + "comedy" + authorParam + API_KEY;
    let response = await fetch(url);
    let data = await response.json();
    let comedyBooks = data.items;
    const comedyInfo = comedyBooks.map((e) => { return e.volumeInfo})
    const comedySection = document.getElementById("comedy");
    const htmlOutput = comedyInfo.map((e) => {
        return renderComedy(e);
    })
    comedySection.innerHTML = htmlOutput.join("")
    
    function renderComedy(singleComedy) {
        return `
        <div class="row flex-row flex-nowrap">
            <div class="col">
                    <div class="card myCard">
                        <img src="${singleComedy.imageLinks.thumbnail}" class="card-img-top" atl="Book cover">
                        <div class="card-body">
                        <h5 class="card-title">${singleComedy.title}</h5>
                        <p class="card-text">${singleComedy.authors}</p>
                        <a href="detail/index.html">Read more</a>
                        </div>
                    </div>
                </div>
        </div>
        `
    };
}
comedy()

const romance = async() => {
        const url = baseURL + path + params + "romance" + authorParam + API_KEY;
        let response = await fetch(url);
        let data = await response.json();
        const books = data.items;
        const booksInfo = books.map((e) => { return e.volumeInfo})
        const resultHTML = document.getElementById("romance")
        const htmlOutput = booksInfo.map((singleBook) => {
            return renderBooks(singleBook)
        })
        resultHTML.innerHTML = htmlOutput.join("");
        return;
    }
    function renderBooks(singleBook) {
        return `
        <div class="row flex-row flex-nowrap">
            <div class="col">
                    <div class="card myCard">
                        <img src="${singleBook.imageLinks.thumbnail}" class="card-img-top" atl="Book cover">
                        <div class="card-body">
                        <h5 class="card-title">${singleBook.title}</h5>
                        <p class="card-text">${singleBook.authors}</p>
                        <a href="detail/index.html">Read more</a>
                        </div>
                    </div>
                </div>
        </div>
        `
};
romance()

const business = async () => {
    const url = baseURL + path + params + "business" + authorParam + API_KEY;
    let response = await fetch(url);
    let data = await response.json();
    let businessBooks = data.items;
    const businessInfo = businessBooks.map((e) => { return e.volumeInfo})
    const businessSection = document.getElementById("business");
    const htmlOutput = businessInfo.map((e) => {
        return renderBusiness(e);
    })
    businessSection.innerHTML = htmlOutput.join("")
    
    function renderBusiness(singleBusiness) {
        return `
        <div class="row flex-row flex-nowrap">
            <div class="col">
                    <div class="card myCard">
                        <img src="${singleBusiness.imageLinks.thumbnail}" class="card-img-top" atl="Book cover">
                        <div class="card-body">
                        <h5 class="card-title">${singleBusiness.title}</h5>
                        <p class="card-text">${singleBusiness.authors}</p>
                        <a href="detail/index.html">Read more</a>
                        </div>
                    </div>
                </div>
        </div>
        `
    };
}
business()