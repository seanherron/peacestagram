$(function(){var e=$(".instagram"),t;e.instagram({hash:"peacecorps",image_size:"low_resolution",clientId:"00164c6486764bef86ec564be699c0bd",show:24,onComplete:function(e,n){t=n.pagination.next_url}});$("button").on("click",function(){var n=$(this),r=n.text();if(n.text()!="Loading…"){n.text("Loading…");e.instagram({next_url:t,show:24,onComplete:function(e,i){t=i.pagination.next_url;n.text(r)}})}})});$("a.overlay_toggle").click(function(){alert("Handler for .click() called.")});$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-$(window).height()-10&&$("button.load_btn").click()});