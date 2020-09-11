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

  // angle hover WIP

  // $(document).on("click", function(){
  //   $(".messaggio-testo-ricevuto-template").children("i").toggle();
  // });
  //
  // $(document).on("click", function(){
  //   $(".messaggio-testo-inviato-template").children("i").toggle();
  // });

  // /angle hover


  // select chat
  $(".casella").on("click", function() {
    // selezione chat
    if ($(this).hasClass("active") == false) {
      $(".casella.active").removeClass("active");
      $(this).addClass("active");
      // /selezione chat

      // chat visionata
      var utente = $(this).attr("data-utente");
      console.log(utente);
      $(".chat").each(function () {
        var chatSelezionata = $(this).attr("data-conversazione");
        console.log(chatSelezionata);
        if (chatSelezionata == utente) {
          $(".chat").removeClass("corrente");
          $(this).addClass("corrente");
        }
      });
      // /chat visionata

    }
  });
  // /select chat

  // send message click icon
  $(".inserimento-testo .fas").on("click", function() {
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
    var angleDown = $(".invisible .messaggio-testo-inviato-template i").clone();
    console.log(angleDown);
    myClone.find(".messaggio-testo-inviato-template").text(inputValue).append(angleDown);
    myClone.find(".orario-template").text(time);
    $(".corrente").find(".nuovi-messaggi").append(myClone);
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
  var angleDown = $(".invisible .messaggio-testo-ricevuto-template i").clone();
  myClone.find(".messaggio-testo-ricevuto-template").text("D'altronde").append(angleDown);
  myClone.find(".orario-template").text(time);
  $(".corrente").find(".nuovi-messaggi").append(myClone);
}
// /FUNCTION
