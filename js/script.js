// var 


function addToList(e) {
  e.preventDefault();
  var formData = $('form').serializeArray();
  $('.to-do').append("<li><input type='checkbox'/>" + formData[0].value + "</li><li><input type='checkbox'/>" + formData[1].value + "</li><li><input type='checkbox'/>" + formData[2].value + "</li>");
  
  $('input')[0].value = '';
  $('input')[1].value = '';
  $('input')[2].value = '';
}

$(document).ready(function() {
  console.log('jQuery running');
  $('form').submit(addToList);
})