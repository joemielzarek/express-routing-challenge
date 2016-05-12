

$(document).ready(function() {

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(bios) {
      console.log(bios);

      var likes0 = 0;
      var likes1 = 0;
      var likes2 = 0;

      appendBios(bios);

      $('.likes-btn0').on('click', function(){
        likes0++;
        $(this).text(likes0);

        $.ajax({
          type: 'POST',
          url: '/bios',
          data: likes0,
          success: function(response) {
            console.log(response);
          }
        });
      });

      $('.likes-btn1').on('click', function(){
        likes1++;
        $(this).text(likes1);
      });

      $('.likes-btn2').on('click', function(){
        likes2++;
        $(this).text(likes2);
      });
    }
  });

function appendBios(bios) {
  $('.bios-container').append('<div class="person"></div>');
  var $el = $('.bios-container').children().last();
  for (var i = 0; i < bios.urls.length; i++){
    $el.append('<h3 class="person-name">'+ bios.urls[i].name +'</h3>');
    $el.append('<p class="person-bio">'+ bios.urls[i].bio +'</p>');
    $el.append('<img src="' + bios.urls[i].image +'"/>');
    $el.append('<button class="likes-btn'+ [i] +'">'+ 0 +'</button>');
  }
}







});
