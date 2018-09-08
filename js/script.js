function arrumar(opcao){
  $(opcao).css("width", "100%");
}
function teste(opcao){
      switch (opcao){
        case 1:arrumar("#violao"); break;
        case 2:arrumar("#cirandar");break;
        case 3:arrumar("#danca");break;
        case 4:arrumar("#dj");break;
        case 5:arrumar("#musicando");break;
        case 6:arrumar("#teatro");break;
        case 7:arrumar("#texto");break;
        case 8:arrumar("#xadrez");break;
        case 9:arrumar("#artes");break;
        case 10:arrumar("#contato");break;
        case 11:arrumar("#recados");break;
        case 12:arrumar("#colaboradores");break;
        case 13:arrumar("#mantenedores");break;
        case 14:arrumar("#galeria");break;

      }
    }
    $(".overlay").click(function(){
      let fechar = '#' + $(this).attr('id');
      $(fechar).css("width", "0");
    });


//TITULO
var space = " ";
  var speed = "140";
  var pos = -20;
  var msg = " Instituto Roberto Zanatta ";
  function scroll(){
    document.title = msg.substring(pos, msg.length) + space;
    pos++;
    if (pos > msg.length + 0) pos = -20;{
      window.setTimeout(scroll, speed);
    }
  }
scroll();

$('.hexLink').click(function(e) {
  e.preventDefault();
});

$(".hexLink").click(function (){
  $("body").css("overflow", "hidden");
});

$(".closebtn").click(function(){
  $("body").css("overflow", "visible");
})