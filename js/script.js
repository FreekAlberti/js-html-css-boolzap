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
    // selezione chat
    if ($(this).hasClass("active") == false) {
      $(".casella.active").removeClass("active");
      $(this).addClass("active");
      // /selezione chat

      // aggiunta attributi
      var img = $(this).find("img").attr("src");
      var name = $(this).find(".nome-chat").text();
      var time = $(this).find(".ultimo-messaggio").text();
      // /aggiunta attributi

      // chat visionata
      var utente = $(this).attr("data-utente");
      $(".chat").each(function () {
        var chatSelezionata = $(this).attr("data-conversazione");
        if (chatSelezionata == utente) {
          $(".chat").removeClass("corrente");
          $(this).addClass("corrente");
          $(document).find(".chat-corrente .nome-chat-corrente").text(name);
          $(document).find(".chat-corrente img").attr("src", img);
          $(document).find(".chat-corrente .time").text(time);
        }
      });
      // /chat visionata

    }
  });
  // /select chat

  // angle hover WIP

  $(document).on("click", ".conversazione-totale i",
    function(){
      $(this).siblings(".lista-azioni").toggle();
  });
  
  // /angle hover

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
    var numeroChat = $(".chat.corrente").attr("data-conversazione");
    var myClone = $(".invisible .linea-inviati-template").clone();
    $(".chat-corrente .accesso-chat-corrente").text("Sta scrivendo...");
    var angleDown = $(".invisible .messaggio-testo-inviato-template i").clone();
    myClone.find(".messaggio-testo-inviato-template").text(inputValue).append(angleDown);
    myClone.find(".orario-template").text(time);
    $(".corrente").find(".nuovi-messaggi").append(myClone);
    $("#addTest").val("");
    setTimeout(function() {
      rispostaCPU(numeroChat);
      var ora = $(".casella.active").find(".ultimo-messaggio").text();
      $(".chat-corrente .accesso-chat-corrente").html("Ultimo accesso oggi alle ore " + "<span class=\"time\">" + ora + "</span>");
    }, 2000);
  }
}

function rispostaCPU(numeroChat) {
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
  $("[data-conversazione*=" + numeroChat + "]").find(".nuovi-messaggi").append(myClone);
}
// /FUNCTION
