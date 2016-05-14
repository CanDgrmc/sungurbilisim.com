
function butonboyut(){
	var genislik=$(window).width();
	var yukseklik=$(window).height();
	if (genislik<=600) {
		$('.btna').css({
			width:'100px',
			'font-size':'12px'
		});
	}
	else{
		$('.btna').css({
			width:'140px',
			'font-size':'18px'
		})
		if (yukseklik>800) {
			$('header').css({
				height:'600px'
			})
		}
		else {
			$('header').css({
				height:'500px'
			})
		}
	};

};


$(document).ready(function(){
	butonboyut();
	$(document).click(function(e){
		if (e.target!=='.btna') {
			$('.btna').css({'padding-top':'40px'})
		}
	});
/*	$('html, body').animate({
			scrollTop: parseInt($('header').offset().top)
		},500)*/
	
});
$(window).on('resize',function(){
	butonboyut();
});
$('#webprojects').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: parseInt($('#webdiv').offset().top)
		},500)

	});
$('#socialprojects').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop:parseInt($('#sosyaldiv').offset().top)
	},500)
});
$('#duyuru').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop:parseInt($('#duyurudiv').offset().top)
	},500)
})
$('#up').click(function(){
	$('html, body').animate({
		scrollTop:parseInt($('header').offset().top)
	},500)
})
$('#down').click(function(){
	$('html, body').animate({
		scrollTop:parseInt($('#sosyaldiv').offset().top)
	},500)
})
$('#upsos').click(function(){
	$('html, body').animate({
		scrollTop:parseInt($('#webdiv').offset().top)
	},500)
})
$('#downsos').click(function(){
	$('html, body').animate({
		scrollTop:parseInt($('#duyurudiv').offset().top)
	},500)
})
$('#upduy').click(function(){
	$('html, body').animate({
		scrollTop:parseInt($('#sosyaldiv').offset().top)
	},500)
})

$('.home').click(function(e){
	e.stopPropagation();
	$('html, body').animate({
		scrollTop:parseInt($('header').offset().top)
	},500).delay(1000)
})