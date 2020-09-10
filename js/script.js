$(document).ready(function() {
  // search chat
  $(".search-box").keyup(function() {
      var toSearch = $(".search-box").val().toUpperCase();
      $(".nome-chat").each(function() {
          var match = $(this).text().toUpperCase();
          if (match.includes(toSearch) == true) {
            $(this).parents(".casella").show();
          } else {
            $(this).parents(".casella").hide();
          }
        }
      )
    }
  );
  // /search chat

  // select chat
  $(".casella").on("click", function() {
    if ($(this).hasClass("active") == false) {
      $(".casella.active").removeClass("active");
      $(this).addClass("active");
      var utente = $(this).attr("data-utente");
      $(".chat").each(function (index) {
      console.log(index + ": " + $(this).attr("data-conversazione"));
      });
    }
  });
  // /select chat

  // send message click icon
  $(".inserimento-testo .fas").click(function() {
    sendMessage();
  });
  // /send message click icon

  // send message click enter
  $("#addTest").keydown(function(event) {
    if (event.which == 13) {
      sendMessage();
    }
  });
  // /send message click enter

});

// FUNCTION
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
    setTimeout(rispostaCPU, 2000);
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
// /FUNCTION
