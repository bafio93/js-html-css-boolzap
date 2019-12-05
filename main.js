$(document).ready(function() {
    // MILESTONE 3 - SELEZIONE CONVERSAZIONI
    $(".conversation-container .user").click(function() {
        // Utilizzo classe "user-active" per vedere a quale utente sto messaggiando.
        // Rimuovo a tutti gli utenti l'active
        $(".message-container").removeClass("user-active");
        // Rimuovo a tutti i box-conversazioni l'active
        $(".conversation-container .user").removeClass("user-active");
        // Aggiungo all'utente selezionato e al box-conversazioni corrispondente l'active
        var indice = $(this).index();
        $(this).addClass("user-active");
        $(".message-container").eq(indice).addClass("user-active");
        // ATTENZIONE! CON QUESTO METODO SI SUPPONE DI AVERE LO STESSO NUMERO DI BOX-CONVERSAZIONI E DI UTENTI. EVENTUALMENTE SI POSSONO GENERARE DINAMICAMENTE UN NUMERO DI BOX = AL NUMERO DI UTENTI
        //
        // (POTREBBE ESSERE UN'AGGIUNTA)
        //
        // ----- CERCO E CAMBIO IMMAGINE E NOME DELL'UTENTE ATTIVO! -----
        // Trovo immagini e nome
        var questo_nome = $(this).find("strong").text();
        var questa_img = $(this).find("img").attr("src");
        // Setto immagine e nome
        $(".container-right .grey .row-middle strong").text(questo_nome);
        $(".container-right .grey .row-left img").attr("src",questa_img);
    })
    // FINE MILESTONE 3  - SELEZIONE CONVERSAZIONI
    $(".container-right input").change(function() {
        // Sezione della ricezione del messaggio scritto dall'utente.
        var testo = $(".container-right input").val();
        var nuovo = $(".template .message.user").clone();
        nuovo.children("p.testo").text(testo);
        $(".message-container.user-active").append(nuovo);
        $(".container-right input").val("");
        // Sezione del messaggio automatico di risposta del sistema.
        var clock = setTimeout(function(){
            var nuovo = $(".template .message.machine").clone();
            nuovo.children("p.testo").text("OK!");
            $(".message-container.user-active").append(nuovo);
        }, 1000);
    });
    // Ora proviamo a cambiare icona da microphone a paper-plane con focus sull'elemento.
    $(".container-right .message-box input").focus(function() {
        $(".container-right .message-box .row-right i").removeClass("fa-microphone").addClass("fa-paper-plane");
    });
    $(".container-right .message-box input").blur(function() {
        $(".container-right .message-box .row-right i").removeClass("fa-paper-plane").addClass("fa-microphone");
    });
    // Aggiungo funzione di ricerca dei contatti in base alla ricerca nella barra di sinistra.
    $(".container-left .searchbar input").keyup(function() {
        // Seleziono l'input dell'utente e lo uniformo ad uppercase per un confronto corretto (JS è case-sensitive)
        var ricerca = $(".container-left .searchbar input");
        var testo = ricerca.val().toUpperCase();
        // Con questo ciclo if, valutiamo se l'utente sta cancellando il campo di ricerca, nel caso mostro tutto nuovamente.
        if (testo.length != 0) {
            // Vedo di ottenere ogni nome utente:
            $(".container-left .conversation-container .user").each(function() {
                // Stiamo ciclando i vari elementi .user: valutiamo se lo strong contiene una parte dell'input.
                var corrente = $(this).find("strong").text().toUpperCase();
                if (!corrente.includes(testo)) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            })
        }
        else {
            $(".container-left .conversation-container .user").show();
        }
    });
    // MILESTONE 3 - OPZIONI MESSAGGIO
    // Intercetto click sulle opzioni
    $(".container-right").on("click",".fa-angle-down",function(){
        // Toggle class active
        $(this).siblings(".options").toggleClass("user-active");
    });
    // Elimino il messaggio: deve funzionare sulla seconda opzione.
    $(".container-right").on("click",".options p:last-child",function(){
        // Elimino il messaggio corrispondente
        $(this).closest(".message").remove();
    });
    // MILESTONE 3 - FINE OPZIONI MESSAGGIO
    // SPOSTATO PARTE DELLA MILESTONE 2 QUI SOTTO
    $(".container-left input").blur(function() {
        var clock = setTimeout(function(){
            $(".container-left .user").show();
            // Resetto il valore del campo di ricerca!
            $(".container-left input").val("");
        }, 1500)
    });
})
