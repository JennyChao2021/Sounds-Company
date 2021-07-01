
 $ ( ".kv" ) .backstretch ( [ 
    "pic/banner3.png" , 
    "pic/banner2.png" , 
    "pic/banner4.png"     
  ] ,  { duration : 4000 } ) ;



$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('.botton').toggleClass('menu-show');
  });
  $(".botton li a").on("click", function (event) {
    $('.botton').toggleClass('menu-show');
  });
}); 