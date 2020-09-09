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
  var date = new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = hours + ":" + minutes;
  if (inputValue != "") {
    var myClone = $(".linea-inviati .messaggi-inviati").clone();
    myClone.find(".messaggio-testo-inviato").text(inputValue);
    myClone.find(".orario").text(time);
    $(".nuovi-messaggi").append(myClone);
    $("#addTest").val("");
  }
}
