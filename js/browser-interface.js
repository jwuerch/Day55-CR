var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').ModuleOne;

$(document).ready(function() {
  $('.search-btn').click(function() {
    $('.results-box').empty();
    var username = $('#user-name').val();
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      getRepos(response).forEach(function(element){
        console.log(element.name);
        $('.results-box').append('<p><a href="https://github.com/' + username + '/' + element.name + '">' + element.name + '</a> - ' + element.description + '<p><li><span style="text-decoration:underline;">Date Created</span>: ' +  moment(element.pushed_at).format('MMMM Do YYYY') + '</li></p>');
      });
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    $('.results-box-two').pagination({
      totalPage: 5,
      callback: function(currentPage){

        $.get('https://api.github.com/users/' + username + '/repos?page=' + currentPage + '&per_page=30').then(function(response){
          $('.results-box').empty();
          getRepos(response).forEach(function(element){
            $('.results-box').append('<p><a href="https://github.com/' + username + '/' + element.name + '">' + element.name + '</a> - ' + element.description + '<p><li><span style="text-decoration:underline;">Date Created</span>: ' +  moment(element.pushed_at).format('MMMM Do YYYY') + '</p>');
          });
        }).fail(function(error){
          console.log(error.responseJSON.message);
        });
      }
    });
  });
});
