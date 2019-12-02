$(document).ready(function() {
    $(".container-right input").change(function() {
        var testo = $(".container-right input").val();
        $(".message-container").append("<div class='message user'></div>");
        $(".message-container div:last-child").text(testo);
        // alert(testo);

    })
})

// $(document).ready(function(){
//     //Immetto le celle nel mio container: lo devo fare per 64 volte! -> Ciclo for.
//     for (var i = 0; i < 64; i++) {
//         $(".container").append("<div class='quadrato'></div>");
//     }
//     //Generiamo un array di 15 numeri casuali diversi che vanno da 0 a 64 (il numero di mie caselle!): questo indicherà quali delle caselle sono bombe.
//     function random_generator_sixtyfour() {
//         var risultato = Math.floor(Math.random()*64);
//         return risultato;
//     } //Questa funzione genera un numero casuale tra 0 e 63.
//     var lista_mine = []; //Generiamo un array di 15 valori.
//     var elemento_corrente = 0; //Utilizzato nel ciclo come flag.
//     for (var i = 0; i < 15; i++) {
//         elemento_corrente = random_generator_sixtyfour();
//         while (lista_mine.includes(elemento_corrente)) {
//             elemento_corrente = random_generator_sixtyfour();
//         }
//         lista_mine[i] = elemento_corrente;
//         //Ora che abbiamo verificato che l'elemento corrente non sia già contenuto nell'array delle bombe, segniamo il quadratino corrispondente!
//         $(".container .quadrato").eq(elemento_corrente).addClass("pericoloso");
//     }
//     console.log(lista_mine); //Per permettere cheats.
//     //Ora che abbiamo creato l'array con valori validi e meno, valutiamo cosa accade con ogni click...
//     $(".container .quadrato").click(function() {
//         if ($(this).hasClass("pericoloso")) {
//             $(this).addClass("rosso");
//         } else {
//             $(this).addClass("blu");
//         };
//     });
// });
