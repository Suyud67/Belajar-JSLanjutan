$('.search-btn').on('click', function () {
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=7f269e68&s=' + $('.input-keyword').val(),

    success: (result) => {
      const movies = result.Search;

      let cards = '';
      movies.forEach((movie) => {
        cards += showMovie(movie);
      });

      $('.card-container').html(cards);

      // ketika tombol detail di-click
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url: 'http://www.omdbapi.com/?apikey=7f269e68&i=' + $(this).data('imdb'),

          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $('.modal-body').html(movieDetail);
          },
          error: (err) => {
            console.log(err.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
});

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
