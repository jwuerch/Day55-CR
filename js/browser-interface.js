var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.search-btn').click(function() {
    var username = $('#user-name').val();
    console.log($('#user-name').val());
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(JSON.stringify(response));
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
