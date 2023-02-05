$("h1").addClass("big-title margin-50");

$(document).keydown(function(e) {
    $("h1").text(e.key);
});