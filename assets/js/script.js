$(function(){

 $("a").click(function(event){
    if(this.hash !==""){
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({scrollTop: $(gato).offset().top
    }, 800, function(){
    window.location.hash = gato;
    });
  } 
 });
 
 $('[data-toggle="popover"]').popover()
 
 $('[data-toggle="tooltip"]').tooltip()
 $(document).ready(function(){

	$('.button-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.button-up').slideDown(300);
		} else {
			$('.button-up').slideUp(300);
		}
	});

});
});
