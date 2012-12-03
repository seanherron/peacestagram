$(function(){
  var
    insta_container = $(".instagram")
  , insta_next_url

  insta_container.instagram({
      hash: 'peacecorps',
	  image_size: 'low_resolution'
    , clientId : '00164c6486764bef86ec564be699c0bd'
    , show : 24
    , onComplete : function (photos, data) {
      insta_next_url = data.pagination.next_url
    }
  })
  
  

  $('button').on('click', function(){
    var 
      button = $(this)
    , text = button.text()

    if (button.text() != 'Loading…'){
      button.text('Loading…')
      insta_container.instagram({
          next_url : insta_next_url
        , show : 24
        , onComplete : function(photos, data) {
          insta_next_url = data.pagination.next_url
          button.text(text)
        }
      })
    }		
  }) 
  
});
	
	$(window).scroll(function () {
	   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
	      $("button.load_btn").click()
	   }
	});
	
	$("img.instagram-image").live("click", function(){
	  $(this).next().toggleClass("active");
	});
	
	$("div.overlay").live("click", function(){
	  $(this).removeClass("active");
	});