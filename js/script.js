$().ready(function(){
	var control = 0;
	
	$("#enviar").click(function(){
		alert ( "Ainda estamos trabalhando no formulário. Enquanto isso envie um e-mail" );
		return false;
	});

	$('a[href^="#"]').click(function(){
		$("html, body").animate({
			scrollTop: $( $.attr(this, "href")).offset().top
		}, 600);
		return false;
	});

	setTimeout(function(){
		if (control == 0) {
			$("#logo1").animate({width: '120%', height: '120%', top: '-280px'}, 400);
	    	setTimeout(function(){ 
	    		$("#logo1").animate({width: '80%', height: '90.7%', top: '-200px', left: '50%', transform: 'translate(-53%, -400px)'}, 400);
	    	}, 400);
	    	control = 1;
		}
	}, 1000);
});
