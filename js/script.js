$(document).ready(function() {
  $(".inserimento-testo .fas").click(function() {
    var inputValue = $("#addTest").val();
    if (inputValue != "") {
      var myClone = $(".linea-inviati .messaggi-inviati").clone();
      myClone.text(inputValue);
      $(".nuovi-messaggi").append(myClone);
      $("#addTest").val("");
    }
  });

  $("#addTest").keydown(function(event) {
    if (event.which == 13) {
      var inputValue = $("#addTest").val();
      if (inputValue != "") {
        var myClone = $(".linea-inviati .messaggi-inviati").clone();
        myClone.text(inputValue);
        $(".nuovi-messaggi").append(myClone);
        $("#addTest").val("");
      }
    }
  });
});
