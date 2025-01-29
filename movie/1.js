// JavaScript code to display a list of the best Indian thriller movies of all time with trailers and ratings

const thrillerMovies = [
    {
        title: "Kahaani (2012)",
        trailer: "https://www.youtube.com/watch?v=9WXrU9NPOY0",
        rating: "8.1/10"
    },
    {
        title: "Andhadhun (2018)",
        trailer: "https://www.youtube.com/watch?v=2iVYI99VGaw",
        rating: "8.2/10"
    },
    {
        title: "Drishyam (2015)",
        trailer: "https://www.youtube.com/watch?v=AuuX2j14NBg",
        rating: "8.2/10"
    },
    {
        title: "Ratsasan (2018)",
        trailer: "https://www.youtube.com/watch?v=2Oii5f2qG7M",
        rating: "8.4/10"
    },
    {
        title: "Talaash (2012)",
        trailer: "https://www.youtube.com/watch?v=NWlOtBV5J3A",
        rating: "7.2/10"
    },
    {
        title: "Ugly (2013)",
        trailer: "https://www.youtube.com/watch?v=9H2SBEd4Dtk",
        rating: "8.0/10"
    },
    {
        title: "Papanasam (2015)",
        trailer: "https://www.youtube.com/watch?v=miBDP1N3qE8",
        rating: "8.4/10"
    },
    {
        title: "A Wednesday! (2008)",
        trailer: "https://www.youtube.com/watch?v=2kWZ4-6pRnw",
        rating: "8.1/10"
    },
    {
        title: "Manorama Six Feet Under (2007)",
        trailer: "https://www.youtube.com/watch?v=TfH12JW6DcA",
        rating: "7.6/10"
    },
    {
        title: "No One Killed Jessica (2011)",
        trailer: "https://www.youtube.com/watch?v=RZlTTONC9kE",
        rating: "7.2/10"
    }
];

function displayThrillerMovies() {
    const movieListElement = document.createElement('ul');
    thrillerMovies.forEach(movie => {
        const listItem = document.createElement('li');
        
        const title = document.createElement('strong');
        title.textContent = movie.title;

        const trailerLink = document.createElement('a');
        trailerLink.href = movie.trailer;
        trailerLink.textContent = " (Watch Trailer)";
        trailerLink.target = "_blank";

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.rating}`;

        listItem.appendChild(title);
        listItem.appendChild(trailerLink);
        listItem.appendChild(rating);

        movieListElement.appendChild(listItem);
    });
    
    const heading = document.createElement('h1');
    heading.textContent = "Best Indian Thriller Movies of All Time";
    document.body.appendChild(heading);
    document.body.appendChild(movieListElement);
}

// Call the function when the page loads
window.onload = displayThrillerMovies;
