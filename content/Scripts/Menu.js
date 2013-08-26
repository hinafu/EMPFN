$(document).ready(function() {
  $(".submenu li").on({
    mouseenter: function() {
      var p1 = $(this).parent().get(0);
      var p2 = $(p1).parent().get(0);
      $(p2).css("background-color","rgb(66,93,117)");
      $(p1).on("mouseleave",function() {
        $(p2).css("background-color","rgb(67,158,186)");
        $(p2).on("mouseleave",function() {
          $(this).css("background-color","rgb(255,255,255)");
        })
      });
    }
  });
  $("ul#menu >li").on({
    mouseenter: function() {
      $(this).css("background-color","rgb(67,158,186)");
    },
    mouseleave: function() {
      $(this).css("background-color","rgb(255,255,255)");
    }
  });
});