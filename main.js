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
            nuovo.children("p:first-child").text("OK!");
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
    // Aggiungo funzione di ricerca dei contatti in base alla ricerca nella barra di sinistra.
    $(".container-left .searchbar input").keyup(function() {
        // Seleziono l'input dell'utente e lo uniformo ad uppercase per un confronto corretto (JS è case-sensitive)
        var ricerca = $(".container-left .searchbar input");
        var testo = ricerca.val().toUpperCase();
        // Vedo di ottenere ogni nome utente:
        $(".container-left .conversation-container .user").each(function() {
            // Stiamo ciclando i vari elementi .user: valutiamo se lo strong contiene una parte dell'input.
            var corrente = $(this).find("strong").text().toUpperCase();
            if (!corrente.includes(testo)) {
                $(this).hide();
            }
        })
    })
    // Necessario resettare il tutto se usciamo dalla barra di ricerca: uso un blur.
    // (Nel caso volessi mettere la possibilità di swichare tra conversazioni, sopra il blur che segue.)
    $(".container-left input").blur(function() {
        $(".container-left .user").show();
        // Resetto il valore del campo di ricerca!
        $(".container-left input").val("");
    });
})
