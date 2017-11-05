"use strict";
// preloader
$(window).on("load", function() {
	$("#preloader").delay(350).fadeOut(500);
});
//preloader end
$(document).ready(function(){
	// // Обхот с посторонней вставкой бесплатного хоста
		var bag = $('#freewha');
			bag.remove();
/////////background animation
function bgSlide(){
	var bgItems = $('.bg__items'),
	 	slideNow = 1,
		slideCount = bgItems.length,
	 	liFirst = bgItems.first(),
	 	liLast = bgItems.last(),
	 	activeSlide = bgItems.filter('.active'),
	 	nextSlide = activeSlide.next();
 
	 if(liLast.hasClass('active')){
	 	liLast.removeClass('active');
	 	 liFirst.addClass('active').siblings().removeClass('active');
	 }else {
	 	nextSlide.addClass('active').siblings('li').removeClass('active');
	 }
}
setInterval(bgSlide,5000);
/////////////////MENU TOGGLE
function menuToggle(){
	var menu = $(".menu");
	var txtMenu = $(".naviganion-text");
	var closeMenu = $(".close");
	var navHref = $(".nav__href");

	txtMenu.on('click',function(){
			if($(this).is(':visible')){
				$(this).hide();
				closeMenu.show();
			}
		menu.slideToggle();
	});
	closeMenu.on('click',function(){
		if($(this).is(':visible')){
			$(this).hide();
			txtMenu.show();
		}
		menu.slideToggle();
	});
		/////
		navHref.on('click', function(){
			
			if (window.innerWidth <=460) {
				menu.hide();
				closeMenu.hide();
				txtMenu.show(); 
			}
	});
	$(window).resize(function() {
		if ($(window).width() > 460) {
			menu.css("display", "");
		}
	});
}
menuToggle();	
////////SCROLL
$(document).scroll(function(e){
	e.preventDefault();
	var galery = $('#galery'),
		nav = $('.naviganion'),
		top = $('.header-content'),
		galeryUl = $('.galery__ul'),
		scrol = $(this).scrollTop() + window.innerHeight,
		selfEff = $('.self-eff'),
		logo = $('.logo'),
		menu = $('.menu'),
		sectionFirsTxt = $('.section-firs__txt'),
		sectionFirsImg = $('.section-firs__img');
////animation section FIRST
	if(scrol > galeryUl.offset().top){
		nav.css({
			height: '50px',
			opacity: '1'
		});
	}else{
		nav.css({
			height: '',
			opacity: ''
		});
	}
/////////animation section Galery
	if(scrol > galeryUl.offset().top){
		var galeryUl = $(".galery__ul li");

		function addAn(el, eq, time) {
			setTimeout(function(){
				 el.eq(eq).addClass('galerryAnim');
			},time);
		}
		addAn(galeryUl, 0, 600);
		addAn(galeryUl, 1, 750);
		addAn(galeryUl, 2, 850);
		addAn(galeryUl, 3, 950);
	}
/////////////section selfEf animation
	if(scrol > selfEff.offset().top){
		selfEff.addClass('selfEffAnimation');
		$('.self-eff__cont').addClass('selfEffContAnimation');
	}
	//////animation section last
	if(scrol > $('.spotify').offset().top){
		$('.spotify').addClass('slide');
	}
	if(scrol > $('.itunes').offset().top){
		$('.itunes').addClass('sliderR');
	}

///////toUpp
	if(scrol > galeryUl.offset().top){
		$(".toUpp").css('opacity', 0.5);
	}else{
		$(".toUpp").css('opacity',0);
	}
});
///////////////Прокрутка ссылок
$(".toUpp").on('click', function(event){
	event.preventDefault();
	$('body,html').animate({scrollTop:0}, 1500);
	return false;
});
////FIRST
var first = $("a[href='#first']");
var firstScroll = $('#first'); 
first.click(function() {
	$('body,html').animate({scrollTop: firstScroll.offset().top}, 1000);
});

/////galery
var galery = $("a[href='#galery']");
var galScroll = $('#galery'); 
galery.click(function() {
	$('body,html').animate({scrollTop: galScroll.offset().top}, 1000);
});
//////instagram
var instagram = $("a[href='#instagram']");
var instagramScroll = $('#instagram'); 
instagram.click(function() {
	$('body,html').animate({scrollTop: instagramScroll.offset().top}, 1000);
});
///////selff
var selff = $("a[href='#selff']");
var selffScroll = $('#self'); 
selff.click(function() {
	$('body,html').animate({scrollTop: selffScroll.offset().top}, 1000);
});
///////contact
var contact = $("a[href='#contact']");
var contactScroll = $('#contact'); 
contact.click(function() {
	$('body,html').animate({scrollTop: contactScroll.offset().top}, 1000);
});
////////////////////////////MODAL WINDOW
function modalWindow(){
	var modalWin = $('.modal-window');
	var modalClos = $('.modal__close');
	var modalWindowContent = $('.modal-window__content');
	var img = $('.galery__ul--img');

	img.on('click', function(){
		modalWin.fadeIn(1000);
		$(this).clone().appendTo(modalWindowContent);
	});
//////////////////////	
	modalClos.on('click', function(){
		modalWin.fadeOut(600);
		modalWindowContent.children(img).remove();
	});
}
modalWindow();
//////////////
});