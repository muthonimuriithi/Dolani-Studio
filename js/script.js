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

    $(`#first`).submit(function(){
        alert(`Hi` + $("#name").val()+ `` + `We have received your message. Thank you for reaching out to us`);
    });
    
    $("#pic1").mouseover(function(){
        $(".bar").show();
    }).mouseout(function(){
        $(".bar").hide();
    });
    $("#pic2").mouseover(function(){
        $(".bar2").show();
    }).mouseout(function(){
        $(".bar2").hide();
    });
    $("#pic3").mouseover(function(){
        $(".bar3").show();
    }).mouseout(function(){
        $(".bar3").hide();
    });
    $("#pic4").mouseover(function(){
        $(".bar4").show();
    }).mouseout(function(){
        $(".bar4").hide();
    });
    $("#pic5").mouseover(function(){
        $(".bar5").show();
    }).mouseout(function(){
        $(".bar5").hide();
    });
    $("#pic6").mouseover(function(){
        $(".bar6").show();
    }).mouseout(function(){
        $(".bar6").hide();
    });
    $("#pic7").mouseover(function(){
        $(".bar7").show();
    }).mouseout(function(){
        $(".bar7").hide();
    });
    $("#pic8").mouseover(function(){
        $(".bar8").show();
    }).mouseout(function(){
        $(".bar8").hide();
    });

});




