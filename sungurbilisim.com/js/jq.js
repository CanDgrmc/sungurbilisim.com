
function sayfaboyut(){
	var sayfagenislik=$(window).width();
	var sayfayukseklik=$(window).height();
	
	$('header, #webdiv,#sosyaldiv').height(sayfayukseklik);
	$('#duyurudiv').height(sayfayukseklik);
	$('#butonlar').height(sayfayukseklik/6);
	$('.btna').css({width: sayfagenislik/8});
	$('header,#webdiv,#sosyaldiv,#duyurudiv,#butonlar').width(sayfagenislik);
	$('.dialogekip').width(sayfagenislik-100);
}
function butonboyut(){

	var genislik=$(window).width();
	var yukseklik=$(window).height();
	var butonlar=$('#butonlar').height();
	var tekbuton=butonlar/1.2;
	$('.btna').css({height:tekbuton});
	if (genislik<800) {
		$('.btna').css({fontSize: 15});
	};
	if (genislik>=800){
		$('.btna').css({fontSize:26});
	};


};


$(document).ready(function(){
	sayfaboyut();
	butonboyut();
	$('html, body').animate({
			scrollTop: parseInt($('header').offset().top)
		},500)
	
});

$(window).on('resize',function(){
	
	sayfaboyut();
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