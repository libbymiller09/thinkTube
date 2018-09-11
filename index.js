const youtube_search_url = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    part : 'snippet',
    key : 'AIzaSyDd6hcZU-Ukn3bQwDwlDk8W76DL4O6a_dw',
    q: `${searchTerm} in:name`
  }
  $.getJSON(youtube_search_url, query, callback);
}

function renderResult(result) {
  const result = (
    `<div>
      <button class="playVideo" type="button"><a href="https://www.youtube.com/watch?v=" + "${result.id}"><img src="${result.snippet.thumbnails.medium.url}"></a></button>
    </div>
  `);
  result
    .prop('hidden', false)
    .html(result);
}

function displayYouTubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(watchSubmit);