
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

	$('html, body').animate({
			scrollTop: parseInt($('header').offset().top)
		},500)
	
});

$(window).on('resize',function(){
	butonboyut();
});

$('#webprojects').click(function(e){
		
		$('html, body').animate({
			scrollTop: parseInt($('#webdiv').offset().top)
		},500)
		return false;

	});
$('#socialprojects').click(function(e){
	$('html, body').animate({
		scrollTop:parseInt($('#sosyaldiv').offset().top)
	},500)
	return	false;
});
$('#duyuru').click(function(e){
	$('html, body').animate({
		scrollTop:parseInt($('#duyurudiv').offset().top)
	},500)
	return	false;
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