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
  return `
    <div>
      <h2>
        <button class="playVideo" type="button"><img src="${result.snippet.thumbnails.medium.url}"></button>
      </h2>
    </div>
  `;
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

function playVideo(){
  $('.playVideo').click(function(event) {
    console.log("clicked");
    generateVideo();
  }); 
}

function generateVideo() {
  return `
      <div>
        <a href="https://www.youtube.com/watch?v=E5yFcdPAGv0">
      </div>
    `;
}


