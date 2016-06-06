//console.log('incluso Plugin');


(function ($) { //Per usare il dollaro in sicurezza

    $.prototype.messaggio = function () {
        return this.each($.proxy(function (i, element) {
            $(element).css('color', 'red');
        }, this));
    };

//typeof FUNZIONE CHE RESTITUISCE IL TIPO

    $.prototype.colore = function (opzioni) {
        var settings = $.extend({}, $.prototype.colore.defaults, opzioni);    //Funzione jQuery per settare i defaults
        return this.each($.proxy(function (i, element) {
            $.prototype.colore.apply(element, settings);
        }, this));
    };

    $.prototype.colore.apply = function (element, settings) {
        $(element).css(settings);
    }
    $.prototype.colore.defaults = {
        color: 'green',
        background: 'white'
    };

    $.colore = $.prototype.colore;


    /*
     $.prototype.messaggio = function () {
     //console.log(this.eq(0).text());
     var n = this;
     this.each(
     $.proxy(function (i, element) { //Proxy = Assegnazione del this come scope nelle funzioni
     console.log(this.text());
     //  console.log($(element).text());
     },n) //n= this (nella funzione vale this)
     );
     return this; // Restituisco il selettore di origine
     };
     
     */







})(jQuery);