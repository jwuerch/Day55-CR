var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.search-btn').click(function() {
    var username = $('#user-name').val();
    console.log($('#user-name').val());
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
