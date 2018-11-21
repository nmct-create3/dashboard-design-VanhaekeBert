document.addEventListener("DOMContentLoaded", function(e) {
  selectedHandler();
});

function selectedHandler() {
  $(".c-main-nav li").click(function() {
    if ($(this).hasClass("is-selected")) {
      $(this).removeClass("is-selected");
    } else {
      $(this).addClass("is-selected");
    }
    $(this)
      .siblings()
      .removeClass("is-selected");
  });
}
