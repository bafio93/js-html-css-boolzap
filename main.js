$(document).ready(function() {
    $(".container-right input").change(function() {
        var testo = $(".container-right input").val();
        $(".message-container").append("<div class='message user'></div>");
        $(".message-container div:last-child").text(testo);
        $(".container-right input").val("");
        var clock = setTimeout(function(){
            $(".message-container").append("<div class='message machine'>:)</div>")
        }, 1000)
    })
})

// while ($(".container-right input").val()!=0) {
//     $(".container-right i").removeClass("fa-microphone");
//     $(".container-right i").addClass("fa-paper-plane");
// }
