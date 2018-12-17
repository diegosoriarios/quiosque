$( document ).ready(function() {
    let fotos = [];
    const TAM = 28;
    for(let i = 0; i <= TAM-1; i++){
    	let foto = './fotos/' + (i+1) + '.jpg';
    	$("#hexGrid").append("<li class='hex'><div class='hexIn'><a class='hexLink' href='#' onclick='zoom("+ (i+1) + ");'><img id='imagem' src='" + foto + "' /></a></div></li>"
    	);
    }
    $("#proxima").click(function(){
    	let x = $("#atual").attr('src');
    	let atual = x.split('/');
    	atual = (atual[2].split('.')[0]);
    	if(atual < TAM){
			$(".popimg").html("<img id='atual' src=./fotos/" + (parseInt(atual)+1) + ".jpg/>");
    	}else{
    		$(".popimg").html("<img id='atual' src=./fotos/" + 1 + ".jpg/>");
		}
    });

    $("#anterior").click(function(){
    	let x = $("#atual").attr('src');
    	let atual = x.split('/');
    	atual = (atual[2].split('.')[0]);
    	if(atual > 0){
			$(".popimg").html("<img id='atual' src=./fotos/" + (parseInt(atual)-1) + ".jpg />");
    	}else{
    		$(".popimg").html("<img id='atual' src=./fotos/" + TAM + ".jpg/>");
		}
    });

    $("#hexGrid").click(function(){
        $("body").css("overflow", "hidden");
    });

});

function zoom(img){
	$(".popimg").html("<img id='atual' src=./fotos/" + img + ".jpg/>");
	$(".popup").css("width", "100%");	
}

function fechar(){
	$(".popup").css("width", "0");
    $("body").css("overflow", "visible");
}

function proxima(imagem){
	$(".popimg").html("<img src=./fotos/" + (img + 1) + ".jpg/>");
}