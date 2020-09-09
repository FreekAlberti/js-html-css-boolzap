$(document).ready(function() {
  $(".inserimento-testo .fas").click(function() {
    sendMessage();
  });

  $("#addTest").keydown(function(event) {
    if (event.which == 13) {
      sendMessage();
    }
  });
});

function sendMessage() {
  var inputValue = $("#addTest").val();
  if (inputValue != "") {
    var myClone = $(".linea-inviati .messaggi-inviati").clone();
    myClone.text(inputValue);
    $(".nuovi-messaggi").append(myClone);
    $("#addTest").val("");
  }
}
