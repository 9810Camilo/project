
$(document).ready(function(){
//	$(".Carta").flip(function(){ voltera carta
		//trigger:'click';
	//});
	
		var cars = [1,2,3,4,5,6,7,8];
	

	$("#Iniciar").click(function(){
		caja1="";
		caja2="";
		 var valor= $("#option").val(); //optener valores 
           $("#Tablero").empty();//limpiar contenedor


       function doble(){ // fucion para llamar doble vez 
		for ( i =0; i < valor/2; i++) {
			// var	caja1="";
		Caja="<div class='Carta'>";
		Caja+="<div class='front'>f</div>";
		Caja+="<div class='back'>"+cars[i]+"</div>";

		Caja+="</div>";
	
		$("#Tablero").append(Caja);// añade html
		$(".Carta").flip(function(){
			trigger:'click';

		});
	}}
	doble();
	doble();
		

   	$(".Carta").click(function(){
   		DIV=$(this);// añado lo que tenga carta
   		validar(DIV);
	});

   	function validar(DIV){
   	
   		FueVolteada=DIV.data("flip-model");
   			if (caja1 ==""){
   				
   				if (FueVolteada.isFlipped) {
   				Ele1=DIV;
   				caja1= DIV.html();// obtener lo que tenga detro la caja
   				//alert(caja1);	
   				}
   			}else if(caja2==""){
   				if (FueVolteada.isFlipped) {
	         		Ele2=DIV;
	         		caja2= DIV.html();
	        		if(caja1==caja2){
	        			// reinicia variables  para poder jugar
	        			caja1="";
	        			caja2="";
	         			//alert("Son iguales");
	         			// tiempo antes de ocultar
	         			Ele1.fadeOut(1500);
	         			Ele2.fadeOut(1500);

	         		}else{
	         			// reinicia variables  para poder jugar
	         			caja1="";
	        			caja2="";
			         	// voltearcartas
	        			//alert("Son Diferentes");
	        			// tiempo de duracion cuando cuando son diferentes
	        			setTimeout(function(){ 
	        				Ele1.flip("toggle");
	         			Ele2.flip("toggle");

	        			 },600);
	         			
	         		}
         		}
         	}

   }
 
 });


});

/*
////verificar si la carta fue bolteadda
FueVolteada=$(this).data("flip-model");
FueVolteada.isFlipped;//esto va en in if da un valor tru false
// voltearcartas
Elemento=$(this);
Elemento.flip("toggle");
*/