var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.search-btn').click(function() {
    var username = $('#user-name').val();
    console.log($('#user-name').val());
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      var i = 0;
      while (i < response.length) {
        i++;
        console.log(response[i].name);
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
