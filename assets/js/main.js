$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".header_top-menu").toggleClass("header_top-menu-toggle");
  });
  $(window).on("scroll load", function () {
    $(".fa-bars").remove("fa-times");
    $(".header_top-menu").remove("header_top-menu-toggle");
  });
});
