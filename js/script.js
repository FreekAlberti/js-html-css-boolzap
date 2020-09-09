$(document).ready(function() {
  $(".inserimento-testo .fas").click(function() {
    sendMessage();
    setTimeout(rispostaCPU, 2000);
  });

  $("#addTest").keydown(function(event) {
    if (event.which == 13) {
      sendMessage();
      setTimeout(rispostaCPU, 2000);
    }
  });
});

function sendMessage() {
  var inputValue = $("#addTest").val();
  var date = new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;
  if (inputValue != "") {
    var myClone = $(".invisible .linea-inviati-template").clone();
    myClone.find(".messaggio-testo-inviato-template").text(inputValue);
    myClone.find(".orario-template").text(time);
    $(".nuovi-messaggi").append(myClone);
    $("#addTest").val("");
  }
}

function rispostaCPU() {
  var date = new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;
  var myClone = $(".invisible .linea-ricevuti-template").clone();
  myClone.find(".messaggio-testo-ricevuto-template").text("D'altronde");
  myClone.find(".orario-template").text(time);
  $(".nuovi-messaggi").append(myClone);
}
