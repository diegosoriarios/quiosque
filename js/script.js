function teste(opcao){
      switch (opcao){
        case 1:
          document.getElementById("violao").style.width = "100%";
          break;
        case 2:
          document.getElementById("cirandar").style.width = "100%";
          break;
        case 3:
          document.getElementById("danca").style.width = "100%";
          break;
        case 4:
          document.getElementById("dj").style.width = "100%";
          break;
        case 5:
          document.getElementById("musicando").style.width = "100%";
          break;
        case 6:
          document.getElementById("teatro").style.width = "100%";
          break;
        case 7:
          document.getElementById("texto").style.width = "100%";
          break;
        case 8:
          document.getElementById("xadrez").style.width = "100%";
          break;
        case 9:
          document.getElementById("artes").style.width = "100%";
          break;
        case 10:
          document.getElementById("contato").style.width = "100%";
          break;
        case 11:
          document.getElementById("recados").style.width = "100%";
          break;
        case 12:
            document.getElementById("colaboradores").style.width = "100%";
            break;
        case 13:
              document.getElementById("mantenedores").style.width = "100%";
              break;

      }
    }

  function closeViolao() {
      document.getElementById("violao").style.width = "0%";
  }

  function closeCirandar() {
      document.getElementById("cirandar").style.width = "0%";
  }

  $('.hexLink').click(function(e) {
    e.preventDefault();
  });

  function closeDanca() {
      document.getElementById("danca").style.width = "0%";
  }

  function closeDj() {
      document.getElementById("dj").style.width = "0%";
  }

  function closeMusicando() {
      document.getElementById("musicando").style.width = "0%";
  }

  function closeTeatro() {
      document.getElementById("teatro").style.width = "0%";
  }

  function closeTexto() {
      document.getElementById("texto").style.width = "0%";
  }

  function closeXadrez() {
      document.getElementById("xadrez").style.width = "0%";
  }

  function closeArtes() {
      document.getElementById("artes").style.width = "0%";
  }

  function closeContato() {
      document.getElementById("contato").style.width = "0%";
  }

  function closeRecados() {
      document.getElementById("recados").style.width = "0%";
  }

  function closeColaboradores() {
      document.getElementById("colaboradores").style.width = "0%";
  }

  function closeMantenedores() {
      document.getElementById("mantenedores").style.width = "0%";
  }

//TITULO
var space = " ";
  var speed = "140";
  var pos = -20;
  var msg = " Instituto Roberto Zanatta ";
  function scroll(){
    document.title = msg.substring(pos, msg.length) + space;
    pos++;
    if (pos > msg.length + 0) pos = -20;
      window.setTimeout(scroll, speed);
  }
  scroll();

  $('.hexLink').click(function(e) {
    e.preventDefault();
  });
