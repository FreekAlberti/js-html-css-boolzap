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

  // $(".conversazione-totale .chat .corrente i").on("click", function(){
  //   $(this).find(".lista-azioni").show();
  // });

  // $(document).on("click", function(){
  //   $(".conversazione-totale").find("i").toggle();
  // });

  // /angle hover


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
      console.log(time);
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
      });    // var accesso = $(".chat-corrente .accesso-chat-corrente").text();
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

//WIP TIME SET UP

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
    // var accesso = $(".chat-corrente .accesso-chat-corrente").html();
    // console.log(accesso);
    $(".chat-corrente .accesso-chat-corrente").text("Sta scrivendo...");
    var angleDown = $(".invisible .messaggio-testo-inviato-template i").clone();
    myClone.find(".messaggio-testo-inviato-template").text(inputValue).append(angleDown);
    myClone.find(".orario-template").text(time);
    $(".corrente").find(".nuovi-messaggi").append(myClone);
    $("#addTest").val("");
    setTimeout(function() {
      rispostaCPU();
      var ora = $(".casella.active").find(".ultimo-messaggio").text();
      $(".chat-corrente .accesso-chat-corrente").text("Ultimo accesso oggi alle ore " + "<span class=\"time\">" + ora + "</span>");
    }, 2000);
  }
}

//WIP TIME SET UP

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
