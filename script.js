$(document).ready(function(){
    
    $("#design").click(function(){
        $("#d-showing").toggle();
        $(".h-image").toggle();
      });
    
      $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hide-development-image").toggle();
      })
    
      $("#productManagement").click(function(){
        $("#product-management-showing").toggle();
        $(".hide-product-management").toggle();
      })
      $(".Hover").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
})