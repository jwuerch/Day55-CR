var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').ModuleOne;

$(document).ready(function() {
  $('.search-btn').click(function() {
    var username = $('#user-name').val();
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      getRepos(response).forEach(function(element){
        $('.results-box').append('<p>' + element + '</p>');
      });
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
