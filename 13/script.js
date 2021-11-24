// fetch
// const buttonKey = document.querySelector('.search-btn');

// buttonKey.addEventListener('click', function () {
//   const inputField = document.querySelector('.input-keyword');

//   fetch('http://www.omdbapi.com/?apikey=7f269e68&s=' + inputField.value)
//     // karena response mash berbentuk promise diubah config yang diinginkan
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = '';
//       movies.forEach((m) => (cards += showMovie(m)));
//       const cardContainer = document.querySelector('.card-container');
//       cardContainer.innerHTML = cards;

//       // modal
//       const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
//       modalDetailBtn.forEach((btn) => {
//         btn.addEventListener('click', function () {
//           const dataImdb = this.dataset.imdb;
//           fetch('http://www.omdbapi.com/?apikey=7f269e68&i=' + dataImdb)
//             .then((response) => response.json())
//             .then((m) => {
//               const modalBody = document.querySelector('.modal-body');
//               const movieDetail = showMovieDetail(m);
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// async, await, and fetch Refactory
// movie cards
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', async function () {
  const inputField = document.querySelector('.input-keyword');
  const movies = await getMovie(inputField.value);
  getMovieUI(movies);
});

// modal detail
// binding event
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const dataImdb = e.target.dataset.imdb;
    const imdbId = await getImdb(dataImdb);
    getImdbUI(imdbId);
  }
});

// function untuk mendapatkan filmnya
function getMovie(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=7f269e68&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => response.Search);
}

// funtion memasukan movie ke cards
function getMovieUI(movies) {
  let cards = '';
  movies.forEach((m) => (cards += showMovie(m)));
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = cards;
}

// function mendapatkan imdb
function getImdb(dataImdb) {
  return fetch('http://www.omdbapi.com/?apikey=7f269e68&i=' + dataImdb)
    .then((response) => response.json())
    .then((m) => m);
}

// function menampilkan detail
function getImdbUI(m) {
  const modalBody = document.querySelector('.modal-body');
  const movieDetail = showMovieDetail(m);
  modalBody.innerHTML = movieDetail;
}

function showMovie(movie) {
  return `<div class="col-md-4 my-5">
            <div class="card">
              <img src=${movie.Poster} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#moviesDetailsModal" data-imdb="${movie.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title}</h4></li>
                  <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actor: </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
