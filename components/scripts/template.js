$(function() {
  var Mustache = require('mustache');
 
  $.getJSON('js/data.json', function(data) {
    var template = $('#artistinfo').html();
    var html = Mustache.to_html(template, data);
    $('#artists').html(html);    
  }); //getJSON
  
}); //function