$(document).ready(function() {
  $("img").click(function() {
    $("h2").text("You clicked on the data.");
  });
});

$(document).ready(function() {
  $("body").hide().fadeIn("slow");
});

$(document).ready(function() {
  $("h2").click(function() {
    $("img").fadeOut("slow");
  });
});
