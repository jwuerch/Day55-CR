var getRepos = function(response) {
  var i = 0;
  var arr = [];
  while (i < response.length) {
    arr.push((response[i].name));
    i++;
  }
  return arr;
}

exports.ModuleOne = getRepos;
