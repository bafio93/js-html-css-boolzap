$(document).ready(function() {
    $(".container-right input").change(function() {
        // Sezione della ricezione del messaggio scritto dall'utente.
        var testo = $(".container-right input").val();
        var nuovo = $(".template .message.user").clone();
        nuovo.children("p:first-child").text(testo);
        $(".message-container").append(nuovo);
        $(".container-right input").val("");
        // Sezione del messaggio automatico di risposta del sistema.
        var clock = setTimeout(function(){
            var nuovo = $(".template .message.machine").clone();
            nuovo.children("p:first-child").text("Messaggio ricevuto!");
            $(".message-container").append(nuovo);
        }, 1000)
    });
    // Ora proviamo a cambiare icona da microphone a paper-plane con focus sull'elemento.
    $(".container-right input").focus(function() {
        $(".container-right i").removeClass("fa-microphone").addClass("fa-paper-plane");
    });
    $(".container-right input").blur(function() {
        $(".container-right i").removeClass("fa-paper-plane").addClass("fa-microphone");
    });
})
