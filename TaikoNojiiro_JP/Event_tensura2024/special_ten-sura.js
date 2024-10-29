/*=====================================================*/
/* アニメーション */
/*=====================================================*/
$(window).on("scroll load", function () {

  let imgPos = $("#tensuraLoad").offset().top;
  let h = $(window).height();
  let scrollTop = $(window).scrollTop();
  if (scrollTop > imgPos - h) {
    $("#tensuraLoad").addClass("s");
  }

});

$(function () {
  /*=====================================================*/
  /* アニメーション */
  /*=====================================================*/
  setTimeout(function () {
    $("#tensuraLoad").addClass("s");
  }, 5000);

});