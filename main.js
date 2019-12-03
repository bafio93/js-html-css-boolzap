$(document).ready(function() {
    $(".container-right input").change(function() {
        var testo = $(".container-right input").val();
        var nuovo = $(".template .message.user").clone();
        nuovo.children("p:first-child").text(testo);
        $(".message-container").append(nuovo);
        $(".container-right input").val("");
        // Sezione del messaggio automatico di risposta.
        var clock = setTimeout(function(){
            var nuovo = $(".template .message.machine").clone();
            nuovo.children("p:first-child").text("Messaggio ricevuto!");
            $(".message-container").append(nuovo);
        }, 1000)
    })
})

// while ($(".container-right input").val()!=0) {
//     $(".container-right i").removeClass("fa-microphone");
//     $(".container-right i").addClass("fa-paper-plane");
// }
