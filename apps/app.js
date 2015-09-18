$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    console.log(searchTerm);
    getRequest(searchTerm);
  });

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    q: searchTerm,
    // r: 'json',
    key: 'AIzaSyASPbBq7_stRpHmcpgeYYEUYw12sr_hI_c'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, callback);
}
function callback(response){
    showResults(response.items);
  }

function showResults(results){
  var html = "";
  $.each(results, appendTitleAndDescription);

   function appendTitleAndDescription(index,value){
    html += '<p>' + '<strong>' + value.snippet.title + '</strong>'+ ':' + value.snippet.description +'</p>' ;
    html += '<p>' +"<a href='https://www.youtube.com/watch?v=" + value.id.videoId + "'> <img src='" + value.snippet.thumbnails.medium.url +"' height='350px' width='460px'> </a>"  
    console.log(value.snippet.title);
  }
  $('#search-results').html(html);
  console.log(results)
}

// console.log(results)
});