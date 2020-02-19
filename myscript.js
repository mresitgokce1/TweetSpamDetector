$(document).ready(function() {

    $("div.js-tweet-text-container").append('<li id="spamgizle" style="cursor: pointer" class="people notifications"><a class="js-nav js-tooltip js-dynamic-tooltip"><span class="Icon Icon--notifications Icon--large"></span><span class="Icon Icon--notificationsFilled Icon--large u-textUserColor"></span><span class="text">Spam Gizle</span></a></li>');
    $("li#spamgizle").click(function () {

        var text=$(this).parent().children(':first-child').text();
        text = text.replace(/beşiktas|Beşiktaş|ah|an/gi,"***");//yasaklı kelimeler buraya eklenecek

        $(this).parent().children(':first-child').text(text);

    });
});