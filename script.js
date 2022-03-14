$(document).ready(function(){
    
    $("#design").click(function(){
        $("#d-showing").toggle();
        $(".h-image").toggle();
      });
    
      $("#development").click(function(){
        $("#dp-showing").toggle();
        $(".hd-image").toggle();
      })
    
      $("#productManagement").click(function(){
        $("#pm-showing").toggle();
        $(".h-pmanagement").toggle();
      })
      $(".Hover").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
})